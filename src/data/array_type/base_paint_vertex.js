// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


class BasePaintVertexStruct extends Struct {
    a_base: number;
}

(Object.defineProperty: any)(
    BasePaintVertexStruct.prototype,
    'a_base',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);
BasePaintVertexStruct.prototype.size = 4;

class BasePaintVertexStructArray extends StructArrayLayout {
    geta_base(index: number) { return this.float32[index * 1 + 0]; }
}

(BasePaintVertexStructArray: any).serialize = StructArray.serialize;

BasePaintVertexStructArray.prototype.members = [{"name":"a_base", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
BasePaintVertexStructArray.prototype.StructType = BasePaintVertexStruct;

register('BasePaintVertexStructArray', BasePaintVertexStructArray);

module.exports = BasePaintVertexStructArray;
