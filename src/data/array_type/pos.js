// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */
const StructArrayLayout_1_2i = require('./struct_array_layout_1_2i');
const {register} = require('../../util/web_worker_transfer');

class PosStructArray extends StructArrayLayout_1_2i {
}

PosStructArray.prototype.members = [{"name":"a_pos", "type":"Int16", "components":2, "offset":0, "size":2, "view":"int16"}];

register('PosStructArray', PosStructArray);

module.exports = PosStructArray;
