// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


class OpacityPaintVertexStruct extends Struct {
    a_opacity: number;
}

(Object.defineProperty: any)(
    OpacityPaintVertexStruct.prototype,
    'a_opacity',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);
OpacityPaintVertexStruct.prototype.size = 4;

class OpacityPaintVertexStructArray extends StructArrayLayout {
    geta_opacity(index: number) { return this.float32[index * 1 + 0]; }
}

(OpacityPaintVertexStructArray: any).serialize = StructArray.serialize;

OpacityPaintVertexStructArray.prototype.members = [{"name":"a_opacity", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
OpacityPaintVertexStructArray.prototype.StructType = OpacityPaintVertexStruct;

register('OpacityPaintVertexStructArray', OpacityPaintVertexStructArray);

module.exports = OpacityPaintVertexStructArray;
