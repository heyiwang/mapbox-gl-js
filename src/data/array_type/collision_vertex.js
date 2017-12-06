// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */
const StructArrayLayout_4_2ub = require('./struct_array_layout_4_2ub');
const {register} = require('../../util/web_worker_transfer');

class CollisionVertexStructArray extends StructArrayLayout_4_2ub {
}

CollisionVertexStructArray.prototype.members = [{"name":"a_placed", "type":"Uint8", "components":2, "offset":0, "size":1, "view":"uint8"}];

register('CollisionVertexStructArray', CollisionVertexStructArray);

module.exports = CollisionVertexStructArray;
