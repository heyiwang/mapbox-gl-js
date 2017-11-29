// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class CollisionBoxLayoutVertexStruct extends Struct {
    a_pos0: number;
    a_pos1: number;
    a_anchor_pos0: number;
    a_anchor_pos1: number;
    a_extrude0: number;
    a_extrude1: number;
}

(Object.defineProperty: any)(
    CollisionBoxLayoutVertexStruct.prototype,
    'a_pos0',
    {
        get: function () { return this._structArray.int16[this._pos2 + 0]; },
        set: function (x) { this._structArray.int16[this._pos2 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    CollisionBoxLayoutVertexStruct.prototype,
    'a_pos1',
    {
        get: function () { return this._structArray.int16[this._pos2 + 1]; },
        set: function (x) { this._structArray.int16[this._pos2 + 1] = x; }
    }
);
(Object.defineProperty: any)(
    CollisionBoxLayoutVertexStruct.prototype,
    'a_anchor_pos0',
    {
        get: function () { return this._structArray.int16[this._pos2 + 2]; },
        set: function (x) { this._structArray.int16[this._pos2 + 2] = x; }
    }
);
(Object.defineProperty: any)(
    CollisionBoxLayoutVertexStruct.prototype,
    'a_anchor_pos1',
    {
        get: function () { return this._structArray.int16[this._pos2 + 3]; },
        set: function (x) { this._structArray.int16[this._pos2 + 3] = x; }
    }
);
(Object.defineProperty: any)(
    CollisionBoxLayoutVertexStruct.prototype,
    'a_extrude0',
    {
        get: function () { return this._structArray.int16[this._pos2 + 4]; },
        set: function (x) { this._structArray.int16[this._pos2 + 4] = x; }
    }
);
(Object.defineProperty: any)(
    CollisionBoxLayoutVertexStruct.prototype,
    'a_extrude1',
    {
        get: function () { return this._structArray.int16[this._pos2 + 5]; },
        set: function (x) { this._structArray.int16[this._pos2 + 5] = x; }
    }
);
CollisionBoxLayoutVertexStruct.prototype.size = 12;

class CollisionBoxLayoutVertexStructArray extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;

    geta_pos0(index: number) {
        return this.int16[index * 6 + 0];
    }
    geta_pos1(index: number) {
        return this.int16[index * 6 + 1];
    }
    geta_anchor_pos0(index: number) {
        return this.int16[index * 6 + 2];
    }
    geta_anchor_pos1(index: number) {
        return this.int16[index * 6 + 3];
    }
    geta_extrude0(index: number) {
        return this.int16[index * 6 + 4];
    }
    geta_extrude1(index: number) {
        return this.int16[index * 6 + 5];
    }
    emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number) {
        const i = this.length;
        this.resize(this.length + 1);

        // array offsets to the end of current data for each type size
        // var o{SIZE} = i * ROUNDED(bytesPerElement / size);
        const o2 = i * 6;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        this.int16[o2 + 4] = v4;
        this.int16[o2 + 5] = v5;

        return i;
    }

    static deserialize(input: SerializedStructArray): CollisionBoxLayoutVertexStructArray {
        const structArray = Object.create(CollisionBoxLayoutVertexStructArray.prototype);
        structArray.arrayBuffer = input.arrayBuffer;
        structArray.length = input.length;
        structArray.capacity = structArray.arrayBuffer.byteLength / structArray.bytesPerElement;
        structArray._refreshViews();
        return structArray;
    }
}

(CollisionBoxLayoutVertexStructArray: any).serialize = StructArray.serialize;

CollisionBoxLayoutVertexStructArray.prototype.members = [{"name":"a_pos", "type":"Int16", "components":2, "offset":0, "size":2, "view":"int16"}, {"name":"a_anchor_pos", "type":"Int16", "components":2, "offset":4, "size":2, "view":"int16"}, {"name":"a_extrude", "type":"Int16", "components":2, "offset":8, "size":2, "view":"int16"}];
CollisionBoxLayoutVertexStructArray.prototype.bytesPerElement = 12;
CollisionBoxLayoutVertexStructArray.prototype._usedTypes = ["Uint8", "Int16"];
CollisionBoxLayoutVertexStructArray.prototype.StructType = CollisionBoxLayoutVertexStruct;


register('CollisionBoxLayoutVertexStructArray', CollisionBoxLayoutVertexStructArray);

module.exports = CollisionBoxLayoutVertexStructArray;
