// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1ul');
const {register} = require('../../util/web_worker_transfer');


class SymbolOpacityVertexStruct extends Struct {
    a_fade_opacity: number;
}

(Object.defineProperty: any)(
    SymbolOpacityVertexStruct.prototype,
    'a_fade_opacity',
    {
        get: function () { return this._structArray.uint32[this._pos4 + 0]; },
        set: function (x) { this._structArray.uint32[this._pos4 + 0] = x; }
    }
);
SymbolOpacityVertexStruct.prototype.size = 4;

class SymbolOpacityVertexStructArray extends StructArrayLayout {
    geta_fade_opacity(index: number) { return this.uint32[index * 1 + 0]; }
}

(SymbolOpacityVertexStructArray: any).serialize = StructArray.serialize;

SymbolOpacityVertexStructArray.prototype.members = [{"name":"a_fade_opacity", "type":"Uint32", "components":1, "offset":0, "size":4, "view":"uint32"}];
SymbolOpacityVertexStructArray.prototype.StructType = SymbolOpacityVertexStruct;

register('SymbolOpacityVertexStructArray', SymbolOpacityVertexStructArray);

module.exports = SymbolOpacityVertexStructArray;
