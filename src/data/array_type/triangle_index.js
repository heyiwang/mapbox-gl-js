// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class TriangleIndexStruct extends Struct {
    vertices0: number;
    vertices1: number;
    vertices2: number;
}

(Object.defineProperty: any)(
    TriangleIndexStruct.prototype,
    'vertices0',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 0]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    TriangleIndexStruct.prototype,
    'vertices1',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 1]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 1] = x; }
    }
);
(Object.defineProperty: any)(
    TriangleIndexStruct.prototype,
    'vertices2',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 2]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 2] = x; }
    }
);
TriangleIndexStruct.prototype.size = 6;

class TriangleIndexStructArray extends StructArray {
    uint8: Uint8Array;
    uint16: Uint16Array;

    getvertices0(index: number) {
        return this.uint16[index * 3 + 0];
    }
    getvertices1(index: number) {
        return this.uint16[index * 3 + 1];
    }
    getvertices2(index: number) {
        return this.uint16[index * 3 + 2];
    }
    emplaceBack(v0: number, v1: number, v2: number) {
        const i = this.length;
        this.resize(this.length + 1);

        // array offsets to the end of current data for each type size
        // var o{SIZE} = i * ROUNDED(bytesPerElement / size);
        const o2 = i * 3;
        this.uint16[o2 + 0] = v0;
        this.uint16[o2 + 1] = v1;
        this.uint16[o2 + 2] = v2;

        return i;
    }

    static deserialize(input: SerializedStructArray): TriangleIndexStructArray {
        const structArray = Object.create(TriangleIndexStructArray.prototype);
        structArray.arrayBuffer = input.arrayBuffer;
        structArray.length = input.length;
        structArray.capacity = structArray.arrayBuffer.byteLength / structArray.bytesPerElement;
        structArray._refreshViews();
        return structArray;
    }
}

(TriangleIndexStructArray: any).serialize = StructArray.serialize;

TriangleIndexStructArray.prototype.members = [{"name":"vertices", "type":"Uint16", "components":3, "offset":0, "size":2, "view":"uint16"}];
TriangleIndexStructArray.prototype.bytesPerElement = 6;
TriangleIndexStructArray.prototype._usedTypes = ["Uint8", "Uint16"];
TriangleIndexStructArray.prototype.StructType = TriangleIndexStruct;


register('TriangleIndexStructArray', TriangleIndexStructArray);

module.exports = TriangleIndexStructArray;
