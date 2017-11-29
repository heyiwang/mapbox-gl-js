// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class CircleLayoutVertexStruct extends Struct {
    a_pos0: number;
    a_pos1: number;
}

(Object.defineProperty: any)(
    CircleLayoutVertexStruct.prototype,
    'a_pos0',
    {
        get: function () { return this._structArray.int16[this._pos2 + 0]; },
        set: function (x) { this._structArray.int16[this._pos2 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    CircleLayoutVertexStruct.prototype,
    'a_pos1',
    {
        get: function () { return this._structArray.int16[this._pos2 + 1]; },
        set: function (x) { this._structArray.int16[this._pos2 + 1] = x; }
    }
);
CircleLayoutVertexStruct.prototype.size = 4;

class CircleLayoutVertexStructArray extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;

    geta_pos0(index: number) {
        return this.int16[index * 2 + 0];
    }
    geta_pos1(index: number) {
        return this.int16[index * 2 + 1];
    }
    emplaceBack(v0: number, v1: number) {
        const i = this.length;
        this.resize(this.length + 1);

        // array offsets to the end of current data for each type size
        // var o{SIZE} = i * ROUNDED(bytesPerElement / size);
        const o2 = i * 2;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;

        return i;
    }

    static deserialize(input: SerializedStructArray): CircleLayoutVertexStructArray {
        const structArray = Object.create(CircleLayoutVertexStructArray.prototype);
        structArray.arrayBuffer = input.arrayBuffer;
        structArray.length = input.length;
        structArray.capacity = structArray.arrayBuffer.byteLength / structArray.bytesPerElement;
        structArray._refreshViews();
        return structArray;
    }
}

(CircleLayoutVertexStructArray: any).serialize = StructArray.serialize;

CircleLayoutVertexStructArray.prototype.members = [{"name":"a_pos", "type":"Int16", "components":2, "offset":0, "size":2, "view":"int16"}];
CircleLayoutVertexStructArray.prototype.bytesPerElement = 4;
CircleLayoutVertexStructArray.prototype._usedTypes = ["Uint8", "Int16"];
CircleLayoutVertexStructArray.prototype.StructType = CircleLayoutVertexStruct;


register('CircleLayoutVertexStructArray', CircleLayoutVertexStructArray);

module.exports = CircleLayoutVertexStructArray;
