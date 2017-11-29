// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class FillExtrusionLayoutVertexStruct extends Struct {
    a_pos0: number;
    a_pos1: number;
    a_normal0: number;
    a_normal1: number;
    a_normal2: number;
    a_edgedistance: number;
}

(Object.defineProperty: any)(
    FillExtrusionLayoutVertexStruct.prototype,
    'a_pos0',
    {
        get: function () { return this._structArray.int16[this._pos2 + 0]; },
        set: function (x) { this._structArray.int16[this._pos2 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    FillExtrusionLayoutVertexStruct.prototype,
    'a_pos1',
    {
        get: function () { return this._structArray.int16[this._pos2 + 1]; },
        set: function (x) { this._structArray.int16[this._pos2 + 1] = x; }
    }
);
(Object.defineProperty: any)(
    FillExtrusionLayoutVertexStruct.prototype,
    'a_normal0',
    {
        get: function () { return this._structArray.int16[this._pos2 + 2]; },
        set: function (x) { this._structArray.int16[this._pos2 + 2] = x; }
    }
);
(Object.defineProperty: any)(
    FillExtrusionLayoutVertexStruct.prototype,
    'a_normal1',
    {
        get: function () { return this._structArray.int16[this._pos2 + 3]; },
        set: function (x) { this._structArray.int16[this._pos2 + 3] = x; }
    }
);
(Object.defineProperty: any)(
    FillExtrusionLayoutVertexStruct.prototype,
    'a_normal2',
    {
        get: function () { return this._structArray.int16[this._pos2 + 4]; },
        set: function (x) { this._structArray.int16[this._pos2 + 4] = x; }
    }
);
(Object.defineProperty: any)(
    FillExtrusionLayoutVertexStruct.prototype,
    'a_edgedistance',
    {
        get: function () { return this._structArray.int16[this._pos2 + 6]; },
        set: function (x) { this._structArray.int16[this._pos2 + 6] = x; }
    }
);
FillExtrusionLayoutVertexStruct.prototype.size = 16;

class FillExtrusionLayoutVertexStructArray extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;

    geta_pos0(index: number) {
        return this.int16[index * 8 + 0];
    }
    geta_pos1(index: number) {
        return this.int16[index * 8 + 1];
    }
    geta_normal0(index: number) {
        return this.int16[index * 8 + 2];
    }
    geta_normal1(index: number) {
        return this.int16[index * 8 + 3];
    }
    geta_normal2(index: number) {
        return this.int16[index * 8 + 4];
    }
    geta_edgedistance(index: number) {
        return this.int16[index * 8 + 6];
    }
    emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number) {
        const i = this.length;
        this.resize(this.length + 1);

        // array offsets to the end of current data for each type size
        // var o{SIZE} = i * ROUNDED(bytesPerElement / size);
        const o2 = i * 8;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        this.int16[o2 + 4] = v4;
        this.int16[o2 + 6] = v5;

        return i;
    }

    static deserialize(input: SerializedStructArray): FillExtrusionLayoutVertexStructArray {
        const structArray = Object.create(FillExtrusionLayoutVertexStructArray.prototype);
        structArray.arrayBuffer = input.arrayBuffer;
        structArray.length = input.length;
        structArray.capacity = structArray.arrayBuffer.byteLength / structArray.bytesPerElement;
        structArray._refreshViews();
        return structArray;
    }
}

(FillExtrusionLayoutVertexStructArray: any).serialize = StructArray.serialize;

FillExtrusionLayoutVertexStructArray.prototype.members = [{"name":"a_pos", "type":"Int16", "components":2, "offset":0, "size":2, "view":"int16"}, {"name":"a_normal", "type":"Int16", "components":3, "offset":4, "size":2, "view":"int16"}, {"name":"a_edgedistance", "type":"Int16", "components":1, "offset":12, "size":2, "view":"int16"}];
FillExtrusionLayoutVertexStructArray.prototype.bytesPerElement = 16;
FillExtrusionLayoutVertexStructArray.prototype._usedTypes = ["Uint8", "Int16"];
FillExtrusionLayoutVertexStructArray.prototype.StructType = FillExtrusionLayoutVertexStruct;


register('FillExtrusionLayoutVertexStructArray', FillExtrusionLayoutVertexStructArray);

module.exports = FillExtrusionLayoutVertexStructArray;
