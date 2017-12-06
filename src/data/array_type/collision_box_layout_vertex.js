// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_6i');
const {register} = require('../../util/web_worker_transfer');


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

class CollisionBoxLayoutVertexStructArray extends StructArrayLayout {
    geta_pos0(index: number) { return this.int16[index * 6 + 0]; }
    geta_pos1(index: number) { return this.int16[index * 6 + 1]; }
    geta_anchor_pos0(index: number) { return this.int16[index * 6 + 2]; }
    geta_anchor_pos1(index: number) { return this.int16[index * 6 + 3]; }
    geta_extrude0(index: number) { return this.int16[index * 6 + 4]; }
    geta_extrude1(index: number) { return this.int16[index * 6 + 5]; }
}

(CollisionBoxLayoutVertexStructArray: any).serialize = StructArray.serialize;

CollisionBoxLayoutVertexStructArray.prototype.members = [{"name":"a_pos", "type":"Int16", "components":2, "offset":0, "size":2, "view":"int16"}, {"name":"a_anchor_pos", "type":"Int16", "components":2, "offset":4, "size":2, "view":"int16"}, {"name":"a_extrude", "type":"Int16", "components":2, "offset":8, "size":2, "view":"int16"}];
CollisionBoxLayoutVertexStructArray.prototype.StructType = CollisionBoxLayoutVertexStruct;

register('CollisionBoxLayoutVertexStructArray', CollisionBoxLayoutVertexStructArray);

module.exports = CollisionBoxLayoutVertexStructArray;
