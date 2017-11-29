// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class CollisionVertexStruct extends Struct {
    a_placed0: number;
    a_placed1: number;
}

(Object.defineProperty: any)(
    CollisionVertexStruct.prototype,
    'a_placed0',
    {
        get: function () { return this._structArray.uint8[this._pos1 + 0]; },
        set: function (x) { this._structArray.uint8[this._pos1 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    CollisionVertexStruct.prototype,
    'a_placed1',
    {
        get: function () { return this._structArray.uint8[this._pos1 + 1]; },
        set: function (x) { this._structArray.uint8[this._pos1 + 1] = x; }
    }
);
CollisionVertexStruct.prototype.size = 4;

class CollisionVertexStructArray extends StructArray {
    uint8: Uint8Array;

    geta_placed0(index: number) {
        return this.uint8[index * 4 + 0];
    }
    geta_placed1(index: number) {
        return this.uint8[index * 4 + 1];
    }
    emplaceBack(v0: number, v1: number) {
        const i = this.length;
        this.resize(this.length + 1);

        // array offsets to the end of current data for each type size
        // var o{SIZE} = i * ROUNDED(bytesPerElement / size);
        const o1 = i * 4;
        this.uint8[o1 + 0] = v0;
        this.uint8[o1 + 1] = v1;

        return i;
    }

    static deserialize(input: SerializedStructArray): CollisionVertexStructArray {
        const structArray = Object.create(CollisionVertexStructArray.prototype);
        structArray.arrayBuffer = input.arrayBuffer;
        structArray.length = input.length;
        structArray.capacity = structArray.arrayBuffer.byteLength / structArray.bytesPerElement;
        structArray._refreshViews();
        return structArray;
    }
}

(CollisionVertexStructArray: any).serialize = StructArray.serialize;

CollisionVertexStructArray.prototype.members = [{"name":"a_placed", "type":"Uint8", "components":2, "offset":0, "size":1, "view":"uint8"}];
CollisionVertexStructArray.prototype.bytesPerElement = 4;
CollisionVertexStructArray.prototype._usedTypes = ["Uint8"];
CollisionVertexStructArray.prototype.StructType = CollisionVertexStruct;


register('CollisionVertexStructArray', CollisionVertexStructArray);

module.exports = CollisionVertexStructArray;
