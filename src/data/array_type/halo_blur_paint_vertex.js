// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


class HaloBlurPaintVertexStruct extends Struct {
    a_halo_blur: number;
}

(Object.defineProperty: any)(
    HaloBlurPaintVertexStruct.prototype,
    'a_halo_blur',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);
HaloBlurPaintVertexStruct.prototype.size = 4;

class HaloBlurPaintVertexStructArray extends StructArrayLayout {
    geta_halo_blur(index: number) { return this.float32[index * 1 + 0]; }
}

(HaloBlurPaintVertexStructArray: any).serialize = StructArray.serialize;

HaloBlurPaintVertexStructArray.prototype.members = [{"name":"a_halo_blur", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
HaloBlurPaintVertexStructArray.prototype.StructType = HaloBlurPaintVertexStruct;

register('HaloBlurPaintVertexStructArray', HaloBlurPaintVertexStructArray);

module.exports = HaloBlurPaintVertexStructArray;
