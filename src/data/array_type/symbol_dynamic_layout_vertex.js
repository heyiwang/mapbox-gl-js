// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */
const StructArrayLayout_1_3f = require('./struct_array_layout_1_3f');
const {register} = require('../../util/web_worker_transfer');

class SymbolDynamicLayoutVertexStructArray extends StructArrayLayout_1_3f {
}

SymbolDynamicLayoutVertexStructArray.prototype.members = [{"name":"a_projected_pos", "type":"Float32", "components":3, "offset":0, "size":4, "view":"float32"}];

register('SymbolDynamicLayoutVertexStructArray', SymbolDynamicLayoutVertexStructArray);

module.exports = SymbolDynamicLayoutVertexStructArray;
