// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */
const StructArrayLayout_1_4i = require('./struct_array_layout_1_4i');
const {register} = require('../../util/web_worker_transfer');

class RasterBoundsStructArray extends StructArrayLayout_1_4i {
}

RasterBoundsStructArray.prototype.members = [{"name":"a_pos", "type":"Int16", "components":2, "offset":0, "size":2, "view":"int16"}, {"name":"a_texture_pos", "type":"Int16", "components":2, "offset":4, "size":2, "view":"int16"}];

register('RasterBoundsStructArray', RasterBoundsStructArray);

module.exports = RasterBoundsStructArray;
