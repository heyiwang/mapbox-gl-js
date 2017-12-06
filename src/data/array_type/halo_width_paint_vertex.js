// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


class HaloWidthPaintVertexStruct extends Struct {
    a_halo_width: number;
}

(Object.defineProperty: any)(
    HaloWidthPaintVertexStruct.prototype,
    'a_halo_width',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);
HaloWidthPaintVertexStruct.prototype.size = 4;

class HaloWidthPaintVertexStructArray extends StructArrayLayout {
    geta_halo_width(index: number) { return this.float32[index * 1 + 0]; }
}

(HaloWidthPaintVertexStructArray: any).serialize = StructArray.serialize;

HaloWidthPaintVertexStructArray.prototype.members = [{"name":"a_halo_width", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
HaloWidthPaintVertexStructArray.prototype.StructType = HaloWidthPaintVertexStruct;

register('HaloWidthPaintVertexStructArray', HaloWidthPaintVertexStructArray);

module.exports = HaloWidthPaintVertexStructArray;
