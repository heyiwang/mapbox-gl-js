// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */
const StructArrayLayout_1_2ui = require('./struct_array_layout_1_2ui');
const {register} = require('../../util/web_worker_transfer');

class LineIndexStructArray extends StructArrayLayout_1_2ui {
}

LineIndexStructArray.prototype.members = [{"name":"vertices", "type":"Uint16", "components":2, "offset":0, "size":2, "view":"uint16"}];

register('LineIndexStructArray', LineIndexStructArray);

module.exports = LineIndexStructArray;
