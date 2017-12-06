// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */
const StructArrayLayout_4_4f = require('./struct_array_layout_4_4f');
const {register} = require('../../util/web_worker_transfer');

class ColorCompositePaintVertexStructArray extends StructArrayLayout_4_4f {
}

ColorCompositePaintVertexStructArray.prototype.members = [{"name":"a_color", "type":"Float32", "components":4, "offset":0, "size":4, "view":"float32"}];

register('ColorCompositePaintVertexStructArray', ColorCompositePaintVertexStructArray);

module.exports = ColorCompositePaintVertexStructArray;
