// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class RasterBoundsStruct extends Struct {
    a_pos0: number;
    a_pos1: number;
    a_texture_pos0: number;
    a_texture_pos1: number;
}

(Object.defineProperty: any)(
    RasterBoundsStruct.prototype,
    'a_pos0',
    {
        get: function () { return this._structArray.int16[this._pos2 + 0]; },
        set: function (x) { this._structArray.int16[this._pos2 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    RasterBoundsStruct.prototype,
    'a_pos1',
    {
        get: function () { return this._structArray.int16[this._pos2 + 1]; },
        set: function (x) { this._structArray.int16[this._pos2 + 1] = x; }
    }
);
(Object.defineProperty: any)(
    RasterBoundsStruct.prototype,
    'a_texture_pos0',
    {
        get: function () { return this._structArray.int16[this._pos2 + 2]; },
        set: function (x) { this._structArray.int16[this._pos2 + 2] = x; }
    }
);
(Object.defineProperty: any)(
    RasterBoundsStruct.prototype,
    'a_texture_pos1',
    {
        get: function () { return this._structArray.int16[this._pos2 + 3]; },
        set: function (x) { this._structArray.int16[this._pos2 + 3] = x; }
    }
);
RasterBoundsStruct.prototype.size = 8;

class RasterBoundsStructArray extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;

    geta_pos0(index: number) {
        return this.int16[index * 4 + 0];
    }
    geta_pos1(index: number) {
        return this.int16[index * 4 + 1];
    }
    geta_texture_pos0(index: number) {
        return this.int16[index * 4 + 2];
    }
    geta_texture_pos1(index: number) {
        return this.int16[index * 4 + 3];
    }
    emplaceBack(v0: number, v1: number, v2: number, v3: number) {
        const i = this.length;
        this.resize(this.length + 1);

        // array offsets to the end of current data for each type size
        // var o{SIZE} = i * ROUNDED(bytesPerElement / size);
        const o2 = i * 4;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;

        return i;
    }

    static deserialize(input: SerializedStructArray): RasterBoundsStructArray {
        const structArray = Object.create(RasterBoundsStructArray.prototype);
        structArray.arrayBuffer = input.arrayBuffer;
        structArray.length = input.length;
        structArray.capacity = structArray.arrayBuffer.byteLength / structArray.bytesPerElement;
        structArray._refreshViews();
        return structArray;
    }
}

(RasterBoundsStructArray: any).serialize = StructArray.serialize;

RasterBoundsStructArray.prototype.members = [{"name":"a_pos", "type":"Int16", "components":2, "offset":0, "size":2, "view":"int16"}, {"name":"a_texture_pos", "type":"Int16", "components":2, "offset":4, "size":2, "view":"int16"}];
RasterBoundsStructArray.prototype.bytesPerElement = 8;
RasterBoundsStructArray.prototype._usedTypes = ["Uint8", "Int16"];
RasterBoundsStructArray.prototype.StructType = RasterBoundsStruct;


register('RasterBoundsStructArray', RasterBoundsStructArray);

module.exports = RasterBoundsStructArray;
