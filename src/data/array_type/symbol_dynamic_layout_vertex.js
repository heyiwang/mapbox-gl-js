// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_1_3f');
const {register} = require('../../util/web_worker_transfer');


class SymbolDynamicLayoutVertexStruct extends Struct {
    a_projected_pos0: number;
    a_projected_pos1: number;
    a_projected_pos2: number;
}

(Object.defineProperty: any)(
    SymbolDynamicLayoutVertexStruct.prototype,
    'a_projected_pos0',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    SymbolDynamicLayoutVertexStruct.prototype,
    'a_projected_pos1',
    {
        get: function () { return this._structArray.float32[this._pos4 + 1]; },
        set: function (x) { this._structArray.float32[this._pos4 + 1] = x; }
    }
);
(Object.defineProperty: any)(
    SymbolDynamicLayoutVertexStruct.prototype,
    'a_projected_pos2',
    {
        get: function () { return this._structArray.float32[this._pos4 + 2]; },
        set: function (x) { this._structArray.float32[this._pos4 + 2] = x; }
    }
);
SymbolDynamicLayoutVertexStruct.prototype.size = 12;

class SymbolDynamicLayoutVertexStructArray extends StructArrayLayout {
    geta_projected_pos0(index: number) { return this.float32[index * 3 + 0]; }
    geta_projected_pos1(index: number) { return this.float32[index * 3 + 1]; }
    geta_projected_pos2(index: number) { return this.float32[index * 3 + 2]; }
}

(SymbolDynamicLayoutVertexStructArray: any).serialize = StructArray.serialize;

SymbolDynamicLayoutVertexStructArray.prototype.members = [{"name":"a_projected_pos", "type":"Float32", "components":3, "offset":0, "size":4, "view":"float32"}];
SymbolDynamicLayoutVertexStructArray.prototype.StructType = SymbolDynamicLayoutVertexStruct;

register('SymbolDynamicLayoutVertexStructArray', SymbolDynamicLayoutVertexStructArray);

module.exports = SymbolDynamicLayoutVertexStructArray;
