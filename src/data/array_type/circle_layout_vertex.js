// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */
const StructArrayLayout_4_2i = require('./struct_array_layout_4_2i');
const {register} = require('../../util/web_worker_transfer');

class CircleLayoutVertexStructArray extends StructArrayLayout_4_2i {
}

CircleLayoutVertexStructArray.prototype.members = [{"name":"a_pos", "type":"Int16", "components":2, "offset":0, "size":2, "view":"int16"}];

register('CircleLayoutVertexStructArray', CircleLayoutVertexStructArray);

module.exports = CircleLayoutVertexStructArray;
