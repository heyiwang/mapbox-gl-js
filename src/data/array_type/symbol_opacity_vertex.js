// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */
const StructArrayLayout_4_1ul = require('./struct_array_layout_4_1ul');
const {register} = require('../../util/web_worker_transfer');

class SymbolOpacityVertexStructArray extends StructArrayLayout_4_1ul {
}

SymbolOpacityVertexStructArray.prototype.members = [{"name":"a_fade_opacity", "type":"Uint32", "components":1, "offset":0, "size":4, "view":"uint32"}];

register('SymbolOpacityVertexStructArray', SymbolOpacityVertexStructArray);

module.exports = SymbolOpacityVertexStructArray;
