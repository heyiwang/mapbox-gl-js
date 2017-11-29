// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

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

class SymbolDynamicLayoutVertexStructArray extends StructArray {
    uint8: Uint8Array;
    float32: Float32Array;

    geta_projected_pos0(index: number) {
        return this.float32[index * 3 + 0];
    }
    geta_projected_pos1(index: number) {
        return this.float32[index * 3 + 1];
    }
    geta_projected_pos2(index: number) {
        return this.float32[index * 3 + 2];
    }
    emplaceBack(v0: number, v1: number, v2: number) {
        const i = this.length;
        this.resize(this.length + 1);

        // array offsets to the end of current data for each type size
        // var o{SIZE} = i * ROUNDED(bytesPerElement / size);
        const o4 = i * 3;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        this.float32[o4 + 2] = v2;

        return i;
    }

    static deserialize(input: SerializedStructArray): SymbolDynamicLayoutVertexStructArray {
        const structArray = Object.create(SymbolDynamicLayoutVertexStructArray.prototype);
        structArray.arrayBuffer = input.arrayBuffer;
        structArray.length = input.length;
        structArray.capacity = structArray.arrayBuffer.byteLength / structArray.bytesPerElement;
        structArray._refreshViews();
        return structArray;
    }
}

(SymbolDynamicLayoutVertexStructArray: any).serialize = StructArray.serialize;

SymbolDynamicLayoutVertexStructArray.prototype.members = [{"name":"a_projected_pos", "type":"Float32", "components":3, "offset":0, "size":4, "view":"float32"}];
SymbolDynamicLayoutVertexStructArray.prototype.bytesPerElement = 12;
SymbolDynamicLayoutVertexStructArray.prototype._usedTypes = ["Uint8", "Float32"];
SymbolDynamicLayoutVertexStructArray.prototype.StructType = SymbolDynamicLayoutVertexStruct;


register('SymbolDynamicLayoutVertexStructArray', SymbolDynamicLayoutVertexStructArray);

module.exports = SymbolDynamicLayoutVertexStructArray;
