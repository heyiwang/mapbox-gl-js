// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */
const StructArrayLayout_4_2f = require('./struct_array_layout_4_2f');
const {register} = require('../../util/web_worker_transfer');

/**
 * @private
 */
class HeightCompositePaintVertexStructArray extends StructArrayLayout_4_2f {
}

HeightCompositePaintVertexStructArray.prototype.members = [{"name":"a_height", "type":"Float32", "components":2, "offset":0, "size":4, "view":"float32"}];

register('HeightCompositePaintVertexStructArray', HeightCompositePaintVertexStructArray);

module.exports = HeightCompositePaintVertexStructArray;
