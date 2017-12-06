// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */
const StructArrayLayout_1_4i4ui = require('./struct_array_layout_1_4i4ui');
const {register} = require('../../util/web_worker_transfer');

class SymbolLayoutVertexStructArray extends StructArrayLayout_1_4i4ui {
}

SymbolLayoutVertexStructArray.prototype.members = [{"name":"a_pos_offset", "type":"Int16", "components":4, "offset":0, "size":2, "view":"int16"}, {"name":"a_data", "type":"Uint16", "components":4, "offset":8, "size":2, "view":"uint16"}];

register('SymbolLayoutVertexStructArray', SymbolLayoutVertexStructArray);

module.exports = SymbolLayoutVertexStructArray;
