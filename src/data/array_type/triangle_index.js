// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */
const StructArrayLayout_1_3ui = require('./struct_array_layout_1_3ui');
const {register} = require('../../util/web_worker_transfer');

class TriangleIndexStructArray extends StructArrayLayout_1_3ui {
}

TriangleIndexStructArray.prototype.members = [{"name":"vertices", "type":"Uint16", "components":3, "offset":0, "size":2, "view":"uint16"}];

register('TriangleIndexStructArray', TriangleIndexStructArray);

module.exports = TriangleIndexStructArray;
