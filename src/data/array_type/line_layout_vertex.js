// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */
const StructArrayLayout_4_4i4ub = require('./struct_array_layout_4_4i4ub');
const {register} = require('../../util/web_worker_transfer');

class LineLayoutVertexStructArray extends StructArrayLayout_4_4i4ub {
}

LineLayoutVertexStructArray.prototype.members = [{"name":"a_pos_normal", "type":"Int16", "components":4, "offset":0, "size":2, "view":"int16"}, {"name":"a_data", "type":"Uint8", "components":4, "offset":8, "size":1, "view":"uint8"}];

register('LineLayoutVertexStructArray', LineLayoutVertexStructArray);

module.exports = LineLayoutVertexStructArray;
