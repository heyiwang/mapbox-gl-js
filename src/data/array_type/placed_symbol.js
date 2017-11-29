// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class PlacedSymbolStruct extends Struct {
    anchorX: number;
    anchorY: number;
    glyphStartIndex: number;
    numGlyphs: number;
    vertexStartIndex: number;
    lineStartIndex: number;
    lineLength: number;
    segment: number;
    lowerSize: number;
    upperSize: number;
    lineOffsetX: number;
    lineOffsetY: number;
    writingMode: number;
    hidden: number;
}

(Object.defineProperty: any)(
    PlacedSymbolStruct.prototype,
    'anchorX',
    {
        get: function () { return this._structArray.int16[this._pos2 + 0]; },
        set: function (x) { this._structArray.int16[this._pos2 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    PlacedSymbolStruct.prototype,
    'anchorY',
    {
        get: function () { return this._structArray.int16[this._pos2 + 1]; },
        set: function (x) { this._structArray.int16[this._pos2 + 1] = x; }
    }
);
(Object.defineProperty: any)(
    PlacedSymbolStruct.prototype,
    'glyphStartIndex',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 2]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 2] = x; }
    }
);
(Object.defineProperty: any)(
    PlacedSymbolStruct.prototype,
    'numGlyphs',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 3]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 3] = x; }
    }
);
(Object.defineProperty: any)(
    PlacedSymbolStruct.prototype,
    'vertexStartIndex',
    {
        get: function () { return this._structArray.uint32[this._pos4 + 2]; },
        set: function (x) { this._structArray.uint32[this._pos4 + 2] = x; }
    }
);
(Object.defineProperty: any)(
    PlacedSymbolStruct.prototype,
    'lineStartIndex',
    {
        get: function () { return this._structArray.uint32[this._pos4 + 3]; },
        set: function (x) { this._structArray.uint32[this._pos4 + 3] = x; }
    }
);
(Object.defineProperty: any)(
    PlacedSymbolStruct.prototype,
    'lineLength',
    {
        get: function () { return this._structArray.uint32[this._pos4 + 4]; },
        set: function (x) { this._structArray.uint32[this._pos4 + 4] = x; }
    }
);
(Object.defineProperty: any)(
    PlacedSymbolStruct.prototype,
    'segment',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 10]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 10] = x; }
    }
);
(Object.defineProperty: any)(
    PlacedSymbolStruct.prototype,
    'lowerSize',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 11]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 11] = x; }
    }
);
(Object.defineProperty: any)(
    PlacedSymbolStruct.prototype,
    'upperSize',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 12]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 12] = x; }
    }
);
(Object.defineProperty: any)(
    PlacedSymbolStruct.prototype,
    'lineOffsetX',
    {
        get: function () { return this._structArray.float32[this._pos4 + 7]; },
        set: function (x) { this._structArray.float32[this._pos4 + 7] = x; }
    }
);
(Object.defineProperty: any)(
    PlacedSymbolStruct.prototype,
    'lineOffsetY',
    {
        get: function () { return this._structArray.float32[this._pos4 + 8]; },
        set: function (x) { this._structArray.float32[this._pos4 + 8] = x; }
    }
);
(Object.defineProperty: any)(
    PlacedSymbolStruct.prototype,
    'writingMode',
    {
        get: function () { return this._structArray.uint8[this._pos1 + 36]; },
        set: function (x) { this._structArray.uint8[this._pos1 + 36] = x; }
    }
);
(Object.defineProperty: any)(
    PlacedSymbolStruct.prototype,
    'hidden',
    {
        get: function () { return this._structArray.uint8[this._pos1 + 37]; },
        set: function (x) { this._structArray.uint8[this._pos1 + 37] = x; }
    }
);
PlacedSymbolStruct.prototype.size = 40;

class PlacedSymbolStructArray extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;
    uint16: Uint16Array;
    uint32: Uint32Array;
    float32: Float32Array;

    getanchorX(index: number) {
        return this.int16[index * 20 + 0];
    }
    getanchorY(index: number) {
        return this.int16[index * 20 + 1];
    }
    getglyphStartIndex(index: number) {
        return this.uint16[index * 20 + 2];
    }
    getnumGlyphs(index: number) {
        return this.uint16[index * 20 + 3];
    }
    getvertexStartIndex(index: number) {
        return this.uint32[index * 10 + 2];
    }
    getlineStartIndex(index: number) {
        return this.uint32[index * 10 + 3];
    }
    getlineLength(index: number) {
        return this.uint32[index * 10 + 4];
    }
    getsegment(index: number) {
        return this.uint16[index * 20 + 10];
    }
    getlowerSize(index: number) {
        return this.uint16[index * 20 + 11];
    }
    getupperSize(index: number) {
        return this.uint16[index * 20 + 12];
    }
    getlineOffsetX(index: number) {
        return this.float32[index * 10 + 7];
    }
    getlineOffsetY(index: number) {
        return this.float32[index * 10 + 8];
    }
    getwritingMode(index: number) {
        return this.uint8[index * 40 + 36];
    }
    gethidden(index: number) {
        return this.uint8[index * 40 + 37];
    }
    emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number, v11: number, v12: number, v13: number) {
        const i = this.length;
        this.resize(this.length + 1);

        // array offsets to the end of current data for each type size
        // var o{SIZE} = i * ROUNDED(bytesPerElement / size);
        const o2 = i * 20;
        const o4 = i * 10;
        const o1 = i * 40;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.uint16[o2 + 2] = v2;
        this.uint16[o2 + 3] = v3;
        this.uint32[o4 + 2] = v4;
        this.uint32[o4 + 3] = v5;
        this.uint32[o4 + 4] = v6;
        this.uint16[o2 + 10] = v7;
        this.uint16[o2 + 11] = v8;
        this.uint16[o2 + 12] = v9;
        this.float32[o4 + 7] = v10;
        this.float32[o4 + 8] = v11;
        this.uint8[o1 + 36] = v12;
        this.uint8[o1 + 37] = v13;

        return i;
    }

    static deserialize(input: SerializedStructArray): PlacedSymbolStructArray {
        const structArray = Object.create(PlacedSymbolStructArray.prototype);
        structArray.arrayBuffer = input.arrayBuffer;
        structArray.length = input.length;
        structArray.capacity = structArray.arrayBuffer.byteLength / structArray.bytesPerElement;
        structArray._refreshViews();
        return structArray;
    }
}

(PlacedSymbolStructArray: any).serialize = StructArray.serialize;

PlacedSymbolStructArray.prototype.members = [{"name":"anchorX", "type":"Int16", "components":1, "offset":0, "size":2, "view":"int16"}, {"name":"anchorY", "type":"Int16", "components":1, "offset":2, "size":2, "view":"int16"}, {"name":"glyphStartIndex", "type":"Uint16", "components":1, "offset":4, "size":2, "view":"uint16"}, {"name":"numGlyphs", "type":"Uint16", "components":1, "offset":6, "size":2, "view":"uint16"}, {"name":"vertexStartIndex", "type":"Uint32", "components":1, "offset":8, "size":4, "view":"uint32"}, {"name":"lineStartIndex", "type":"Uint32", "components":1, "offset":12, "size":4, "view":"uint32"}, {"name":"lineLength", "type":"Uint32", "components":1, "offset":16, "size":4, "view":"uint32"}, {"name":"segment", "type":"Uint16", "components":1, "offset":20, "size":2, "view":"uint16"}, {"name":"lowerSize", "type":"Uint16", "components":1, "offset":22, "size":2, "view":"uint16"}, {"name":"upperSize", "type":"Uint16", "components":1, "offset":24, "size":2, "view":"uint16"}, {"name":"lineOffsetX", "type":"Float32", "components":1, "offset":28, "size":4, "view":"float32"}, {"name":"lineOffsetY", "type":"Float32", "components":1, "offset":32, "size":4, "view":"float32"}, {"name":"writingMode", "type":"Uint8", "components":1, "offset":36, "size":1, "view":"uint8"}, {"name":"hidden", "type":"Uint8", "components":1, "offset":37, "size":1, "view":"uint8"}];
PlacedSymbolStructArray.prototype.bytesPerElement = 40;
PlacedSymbolStructArray.prototype._usedTypes = ["Uint8", "Int16", "Uint16", "Uint32", "Float32"];
PlacedSymbolStructArray.prototype.StructType = PlacedSymbolStruct;


register('PlacedSymbolStructArray', PlacedSymbolStructArray);

module.exports = PlacedSymbolStructArray;
