// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */
const StructArrayLayout_4_4f = require('./struct_array_layout_4_4f');
const {register} = require('../../util/web_worker_transfer');

/**
 * @private
 */
class FillColorCompositePaintVertexStructArray extends StructArrayLayout_4_4f {
}

FillColorCompositePaintVertexStructArray.prototype.members = [{"name":"a_fill_color", "type":"Float32", "components":4, "offset":0, "size":4, "view":"float32"}];

register('FillColorCompositePaintVertexStructArray', FillColorCompositePaintVertexStructArray);

module.exports = FillColorCompositePaintVertexStructArray;
