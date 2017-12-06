// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_2ub');
const {register} = require('../../util/web_worker_transfer');


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

class CollisionVertexStructArray extends StructArrayLayout {
    geta_placed0(index: number) { return this.uint8[index * 4 + 0]; }
    geta_placed1(index: number) { return this.uint8[index * 4 + 1]; }
}

(CollisionVertexStructArray: any).serialize = StructArray.serialize;

CollisionVertexStructArray.prototype.members = [{"name":"a_placed", "type":"Uint8", "components":2, "offset":0, "size":1, "view":"uint8"}];
CollisionVertexStructArray.prototype.StructType = CollisionVertexStruct;

register('CollisionVertexStructArray', CollisionVertexStructArray);

module.exports = CollisionVertexStructArray;
