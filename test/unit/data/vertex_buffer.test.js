'use strict';

const test = require('mapbox-gl-js-test').test;
const VertexBuffer = require('../../../src/gl/vertex_buffer');
const StructArrayLayout3i = require('../../../src/data/array_type/struct_array_layout_1_3i');
const Context = require('../../../src/gl/context');

test('VertexBuffer', (t) => {
    class TestArray extends StructArrayLayout3i {}
    TestArray.prototype.members = [
        { name: 'map', components: 1, type: 'Int16', offset: 0 },
        { name: 'box', components: 2, type: 'Int16', offset: 4 }
    ];

    t.test('constructs itself', (t) => {
        const context = new Context(require('gl')(10, 10));
        const array = new TestArray();
        array.emplaceBack(1, 1, 1);
        array.emplaceBack(1, 1, 1);
        array.emplaceBack(1, 1, 1);

        const buffer = new VertexBuffer(context, array);

        t.deepEqual(buffer.attributes, [
            { name: 'map', components: 1, type: 'Int16', offset: 0 },
            { name: 'box', components: 2, type: 'Int16', offset: 4 }
        ]);
        t.deepEqual(buffer.itemSize, 6);
        t.deepEqual(buffer.length, 3);
        t.end();
    });

    t.end();
});
