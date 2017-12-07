// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */
const StructArrayLayout_4_4f = require('./struct_array_layout_4_4f');
const {register} = require('../../util/web_worker_transfer');

/**
 * @private
 */
class HaloColorCompositePaintVertexStructArray extends StructArrayLayout_4_4f {
}

HaloColorCompositePaintVertexStructArray.prototype.members = [{"name":"a_halo_color", "type":"Float32", "components":4, "offset":0, "size":4, "view":"float32"}];

register('HaloColorCompositePaintVertexStructArray', HaloColorCompositePaintVertexStructArray);

module.exports = HaloColorCompositePaintVertexStructArray;
