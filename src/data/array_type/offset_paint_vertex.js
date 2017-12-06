// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


class OffsetPaintVertexStruct extends Struct {
    a_offset: number;
}

(Object.defineProperty: any)(
    OffsetPaintVertexStruct.prototype,
    'a_offset',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);
OffsetPaintVertexStruct.prototype.size = 4;

class OffsetPaintVertexStructArray extends StructArrayLayout {
    geta_offset(index: number) { return this.float32[index * 1 + 0]; }
}

(OffsetPaintVertexStructArray: any).serialize = StructArray.serialize;

OffsetPaintVertexStructArray.prototype.members = [{"name":"a_offset", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
OffsetPaintVertexStructArray.prototype.StructType = OffsetPaintVertexStruct;

register('OffsetPaintVertexStructArray', OffsetPaintVertexStructArray);

module.exports = OffsetPaintVertexStructArray;
