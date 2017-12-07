// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */
const StructArrayLayout_4_4f = require('./struct_array_layout_4_4f');
const {register} = require('../../util/web_worker_transfer');

/**
 * @private
 */
class OutlineColorCompositePaintVertexStructArray extends StructArrayLayout_4_4f {
}

OutlineColorCompositePaintVertexStructArray.prototype.members = [{"name":"a_outline_color", "type":"Float32", "components":4, "offset":0, "size":4, "view":"float32"}];

register('OutlineColorCompositePaintVertexStructArray', OutlineColorCompositePaintVertexStructArray);

module.exports = OutlineColorCompositePaintVertexStructArray;
