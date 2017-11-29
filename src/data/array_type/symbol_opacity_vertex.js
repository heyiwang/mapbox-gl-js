// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

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

class SymbolOpacityVertexStructArray extends StructArray {
    uint8: Uint8Array;
    uint32: Uint32Array;

    geta_fade_opacity(index: number) {
        return this.uint32[index * 1 + 0];
    }
    emplaceBack(v0: number) {
        const i = this.length;
        this.resize(this.length + 1);

        // array offsets to the end of current data for each type size
        // var o{SIZE} = i * ROUNDED(bytesPerElement / size);
        const o4 = i * 1;
        this.uint32[o4 + 0] = v0;

        return i;
    }

    static deserialize(input: SerializedStructArray): SymbolOpacityVertexStructArray {
        const structArray = Object.create(SymbolOpacityVertexStructArray.prototype);
        structArray.arrayBuffer = input.arrayBuffer;
        structArray.length = input.length;
        structArray.capacity = structArray.arrayBuffer.byteLength / structArray.bytesPerElement;
        structArray._refreshViews();
        return structArray;
    }
}

(SymbolOpacityVertexStructArray: any).serialize = StructArray.serialize;

SymbolOpacityVertexStructArray.prototype.members = [{"name":"a_fade_opacity", "type":"Uint32", "components":1, "offset":0, "size":4, "view":"uint32"}];
SymbolOpacityVertexStructArray.prototype.bytesPerElement = 4;
SymbolOpacityVertexStructArray.prototype._usedTypes = ["Uint8", "Uint32"];
SymbolOpacityVertexStructArray.prototype.StructType = SymbolOpacityVertexStruct;


register('SymbolOpacityVertexStructArray', SymbolOpacityVertexStructArray);

module.exports = SymbolOpacityVertexStructArray;
