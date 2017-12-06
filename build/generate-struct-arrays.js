// @flow

'use strict'; // eslint-disable-line strict

require('flow-remove-types/register');

const assert = require('assert');
const fs = require('fs');
const ejs = require('ejs');
const util = require('../src/util/util');
const spec = require('../src/style-spec/reference/v8');

import type {ViewType} from '../src/util/struct_array';

export type StructArrayTypeParameters = {
    members: $ReadOnlyArray<{
        name: string,
        type: ViewType,
        +components?: number,
    }>,
    alignment?: number
};


const structArrayLayoutJs = ejs.compile(fs.readFileSync('src/util/struct_array_layout.js.ejs', 'utf8'), {strict: true});
const structArrayJs = ejs.compile(fs.readFileSync('src/util/struct_array.js.ejs', 'utf8'), {strict: true});

const viewTypes = {
    'Int8': Int8Array,
    'Uint8': Uint8Array,
    'Int16': Int16Array,
    'Uint16': Uint16Array,
    'Int32': Int32Array,
    'Uint32': Uint32Array,
    'Float32': Float32Array
};

const typeAbbreviations = {
    'Int8': 'b',
    'Uint8': 'ub',
    'Int16': 'i',
    'Uint16': 'ui',
    'Int32': 'l',
    'Uint32': 'ul',
    'Float32': 'f'
};

const layoutCache = {};
const arrayCache = {};
const filesWritten = [];

function createStructArrayType(moduleName: string, options: StructArrayTypeParameters) {
    const alignment = options.alignment === undefined ? 1 : options.alignment;

    let offset = 0;
    let maxSize = 0;
    let hasAnchorPoint = false;
    const usedTypes = ['Uint8'];

    const usedNames = [];
    const members = options.members.map((member) => {
        assert(member.name.length);
        assert(member.type in viewTypes);
        assert(usedNames.indexOf(member.name) < 0);
        usedNames.push(member.name);

        if (usedTypes.indexOf(member.type) < 0) usedTypes.push(member.type);
        if (member.name === 'anchorPointX') hasAnchorPoint = true;

        const typeSize = sizeOf(member.type);
        const memberOffset = offset = align(offset, Math.max(alignment, typeSize));
        const components = member.components || 1;

        maxSize = Math.max(maxSize, typeSize);
        offset += typeSize * components;

        return {
            name: member.name,
            type: member.type,
            components: components,
            offset: memberOffset,
            size: sizeOf(member.type),
            view: member.type.toLowerCase()
        };
    });

    const key = JSON.stringify([members, alignment]);

    const size = align(offset, Math.max(maxSize, alignment));

    const layoutModule = createStructArrayLayoutType(alignment, members, size, usedTypes);

    let code;
    if (!arrayCache[key]) {
        code = structArrayJs({
            name: moduleName,
            members,
            size,
            usedTypes,
            hasAnchorPoint,
            layoutModule
        });
        arrayCache[key] = moduleName;
    } else if (arrayCache[key] !== moduleName) {
        code = `// @flow\nmodule.exports = require('./${arrayCache[key]}');`;
    }

    if (code) {
        const file = `src/data/array_type/${moduleName}.js`;
        assert(filesWritten.indexOf(file) < 0, `${file} already exists`);
        filesWritten.push(file);
        fs.writeFileSync(file, code);
    }
}

function createStructArrayLayoutType(alignment, members, size, usedTypes) {
    // combine consecutive 'members' with same underlying type, summing their
    // component counts
    members = members.reduce((memo, member) => {
        if (memo.length > 0 && memo[memo.length - 1].type === member.type) {
            const last = memo[memo.length - 1];
            return memo.slice(0, -1).concat(util.extend({}, last, {
                components: last.components + member.components,
            }));
        }
        return memo.concat(member);
    }, []);

    const key = `${alignment}_${members.map(m => `${m.components}${typeAbbreviations[m.type]}`).join('_')}`;
    const moduleName = `struct_array_layout_${key}`;
    if (!layoutCache[key]) {
        const code = structArrayLayoutJs({
            name: moduleName,
            members,
            size,
            usedTypes
        });
        const file = `src/data/array_type/${moduleName}.js`;
        assert(filesWritten.indexOf(file) < 0, `${file} already exists`);
        filesWritten.push(file);
        fs.writeFileSync(file, code);
        layoutCache[key] = true;
    }
    return moduleName;
}

function align(offset: number, size: number): number {
    return Math.ceil(offset / size) * size;
}

function sizeOf(type: ViewType): number {
    return viewTypes[type].BYTES_PER_ELEMENT;
}

function camelize (str) {
    return str.replace(/(?:^|[-_])(.)/g, (_, x) => {
        return x.toUpperCase();
    });
}

global.camelize = camelize;

createStructArrayType('pos', {
    members: [{ name: 'a_pos', type: 'Int16', components: 2 }]
});

createStructArrayType('raster_bounds', {
    members: [
        { name: 'a_pos', type: 'Int16', components: 2 },
        { name: 'a_texture_pos', type: 'Int16', components: 2 }
    ]
});

// layout vertex arrays
const layoutAttributes = {
    circle: require('../src/data/bucket/circle_attributes'),
    fill: require('../src/data/bucket/fill_attributes'),
    'fill-extrusion': require('../src/data/bucket/fill_extrusion_attributes'),
    heatmap: require('../src/data/bucket/circle_attributes'),
    line: require('../src/data/bucket/line_attributes')
};
for (const name in layoutAttributes) {
    const members = layoutAttributes[name].layoutAttributes;
    createStructArrayType(`${name.replace(/-/g, '_')}_layout_vertex`, {
        members,
        alignment: 4
    });
}

// symbol layer specific arrays
const symbolAttributes = require('../src/data/bucket/symbol_attributes');
createStructArrayType(`symbol_layout_vertex`, {
    members: symbolAttributes.symbolLayoutAttributes,
    aligmnent: 4
});
createStructArrayType(`symbol_dynamic_layout_vertex`, {
    members: symbolAttributes.dynamicLayoutAttributes,
    aligmnent: 4
});
createStructArrayType(`symbol_opacity_vertex`, {
    members: symbolAttributes.placementOpacityAttributes,
    alignment: 4
});
createStructArrayType('collision_box', {
    members: symbolAttributes.collisionBox
});
createStructArrayType(`collision_box_layout_vertex`, {
    members: symbolAttributes.collisionBoxLayout,
    alignment: 4
});
createStructArrayType(`collision_circle_layout_vertex`, {
    members: symbolAttributes.collisionCircleLayout,
    alignment: 4
});
createStructArrayType(`collision_vertex`, {
    members: symbolAttributes.collisionAttributes,
    alignment: 4
});
createStructArrayType('placed_symbol', {
    members: symbolAttributes.placement
});
createStructArrayType('glyph_offset', {
    members: symbolAttributes.glyphOffset
});
createStructArrayType('symbol_line_vertex', {
    members: symbolAttributes.lineVertex
});

// feature index array
createStructArrayType('feature_index', {
    members: [
        // the index of the feature in the original vectortile
        { type: 'Uint32', name: 'featureIndex' },
        // the source layer the feature appears in
        { type: 'Uint16', name: 'sourceLayerIndex' },
        // the bucket the feature appears in
        { type: 'Uint16', name: 'bucketIndex' }
    ]
});

// triangle index array
createStructArrayType('triangle_index', {
    members: [{
        type: 'Uint16',
        name: 'vertices',
        components: 3
    }]
});

// line index array
createStructArrayType('line_index', {
    members: [{
        type: 'Uint16',
        name: 'vertices',
        components: 2
    }]
});

// paint vertex arrays

// collect paint attribute metadata from spec
const paintAttributes = [];
for (const type in spec.layer.type.values) {
    for (const property in spec[`paint_${type}`]) {
        const propertySpec = spec[`paint_${type}`][property];
        if (!propertySpec['property-function']) continue;
        const name = paintAttributeName(property, type);
        paintAttributes.push({name, type: propertySpec.type, property});
    }
}

const entries = [];
for (const attribute of paintAttributes) {
    const moduleName = `${attribute.name}_paint_vertex`;
    createStructArrayType(moduleName, {
        members: [{
            name: `a_${attribute.name}`,
            type: 'Float32',
            components: attribute.type === 'color' ? 2 : 1
        }],
        alignment: 4
    });
    entries.push(`    '${attribute.property}': require('./${moduleName}')`);
}

const paintArrayRegistry = `// This file is generated. Edit build/generate-struct-arrays.js, then run \`node build/generate-struct-arrays.js\`.
// @flow
module.exports = {
${entries.join(',\n')}
};`;

fs.writeFileSync('src/data/array_type/paint_vertex_arrays.js', paintArrayRegistry);

function paintAttributeName(property, type) {
    const attributeNameExceptions = {
        'text-opacity': 'opacity',
        'icon-opacity': 'opacity',
        'text-color': 'fill_color',
        'icon-color': 'fill_color',
        'text-halo-color': 'halo_color',
        'icon-halo-color': 'halo_color',
        'text-halo-blur': 'halo_blur',
        'icon-halo-blur': 'halo_blur',
        'text-halo-width': 'halo_width',
        'icon-halo-width': 'halo_width',
        'line-gap-width': 'gapwidth'
    };
    return attributeNameExceptions[property] ||
        property.replace(`${type}-`, '').replace(/-/g, '_');
}
