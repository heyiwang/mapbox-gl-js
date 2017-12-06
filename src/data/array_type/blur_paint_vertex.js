// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


class BlurPaintVertexStruct extends Struct {
    a_blur: number;
}

(Object.defineProperty: any)(
    BlurPaintVertexStruct.prototype,
    'a_blur',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);
BlurPaintVertexStruct.prototype.size = 4;

class BlurPaintVertexStructArray extends StructArrayLayout {
    geta_blur(index: number) { return this.float32[index * 1 + 0]; }
}

(BlurPaintVertexStructArray: any).serialize = StructArray.serialize;

BlurPaintVertexStructArray.prototype.members = [{"name":"a_blur", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
BlurPaintVertexStructArray.prototype.StructType = BlurPaintVertexStruct;

register('BlurPaintVertexStructArray', BlurPaintVertexStructArray);

module.exports = BlurPaintVertexStructArray;
