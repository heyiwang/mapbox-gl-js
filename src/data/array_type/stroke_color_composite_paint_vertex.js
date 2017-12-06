// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */
const StructArrayLayout_4_4f = require('./struct_array_layout_4_4f');
const {register} = require('../../util/web_worker_transfer');

class StrokeColorCompositePaintVertexStructArray extends StructArrayLayout_4_4f {
}

StrokeColorCompositePaintVertexStructArray.prototype.members = [{"name":"a_stroke_color", "type":"Float32", "components":4, "offset":0, "size":4, "view":"float32"}];

register('StrokeColorCompositePaintVertexStructArray', StrokeColorCompositePaintVertexStructArray);

module.exports = StrokeColorCompositePaintVertexStructArray;
