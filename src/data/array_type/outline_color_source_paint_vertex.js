// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */
const StructArrayLayout_4_2f = require('./struct_array_layout_4_2f');
const {register} = require('../../util/web_worker_transfer');

class OutlineColorSourcePaintVertexStructArray extends StructArrayLayout_4_2f {
}

OutlineColorSourcePaintVertexStructArray.prototype.members = [{"name":"a_outline_color", "type":"Float32", "components":2, "offset":0, "size":4, "view":"float32"}];

register('OutlineColorSourcePaintVertexStructArray', OutlineColorSourcePaintVertexStructArray);

module.exports = OutlineColorSourcePaintVertexStructArray;
