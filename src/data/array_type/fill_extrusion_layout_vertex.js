// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */
const StructArrayLayout_4_6i = require('./struct_array_layout_4_6i');
const {register} = require('../../util/web_worker_transfer');

class FillExtrusionLayoutVertexStructArray extends StructArrayLayout_4_6i {
}

FillExtrusionLayoutVertexStructArray.prototype.members = [{"name":"a_pos", "type":"Int16", "components":2, "offset":0, "size":2, "view":"int16"}, {"name":"a_normal", "type":"Int16", "components":3, "offset":4, "size":2, "view":"int16"}, {"name":"a_edgedistance", "type":"Int16", "components":1, "offset":12, "size":2, "view":"int16"}];

register('FillExtrusionLayoutVertexStructArray', FillExtrusionLayoutVertexStructArray);

module.exports = FillExtrusionLayoutVertexStructArray;
