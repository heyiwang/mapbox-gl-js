// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class SymbolLayoutVertexStruct extends Struct {
    a_pos_offset0: number;
    a_pos_offset1: number;
    a_pos_offset2: number;
    a_pos_offset3: number;
    a_data0: number;
    a_data1: number;
    a_data2: number;
    a_data3: number;
}

(Object.defineProperty: any)(
    SymbolLayoutVertexStruct.prototype,
    'a_pos_offset0',
    {
        get: function () { return this._structArray.int16[this._pos2 + 0]; },
        set: function (x) { this._structArray.int16[this._pos2 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    SymbolLayoutVertexStruct.prototype,
    'a_pos_offset1',
    {
        get: function () { return this._structArray.int16[this._pos2 + 1]; },
        set: function (x) { this._structArray.int16[this._pos2 + 1] = x; }
    }
);
(Object.defineProperty: any)(
    SymbolLayoutVertexStruct.prototype,
    'a_pos_offset2',
    {
        get: function () { return this._structArray.int16[this._pos2 + 2]; },
        set: function (x) { this._structArray.int16[this._pos2 + 2] = x; }
    }
);
(Object.defineProperty: any)(
    SymbolLayoutVertexStruct.prototype,
    'a_pos_offset3',
    {
        get: function () { return this._structArray.int16[this._pos2 + 3]; },
        set: function (x) { this._structArray.int16[this._pos2 + 3] = x; }
    }
);
(Object.defineProperty: any)(
    SymbolLayoutVertexStruct.prototype,
    'a_data0',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 4]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 4] = x; }
    }
);
(Object.defineProperty: any)(
    SymbolLayoutVertexStruct.prototype,
    'a_data1',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 5]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 5] = x; }
    }
);
(Object.defineProperty: any)(
    SymbolLayoutVertexStruct.prototype,
    'a_data2',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 6]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 6] = x; }
    }
);
(Object.defineProperty: any)(
    SymbolLayoutVertexStruct.prototype,
    'a_data3',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 7]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 7] = x; }
    }
);
SymbolLayoutVertexStruct.prototype.size = 16;

class SymbolLayoutVertexStructArray extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;
    uint16: Uint16Array;

    geta_pos_offset0(index: number) {
        return this.int16[index * 8 + 0];
    }
    geta_pos_offset1(index: number) {
        return this.int16[index * 8 + 1];
    }
    geta_pos_offset2(index: number) {
        return this.int16[index * 8 + 2];
    }
    geta_pos_offset3(index: number) {
        return this.int16[index * 8 + 3];
    }
    geta_data0(index: number) {
        return this.uint16[index * 8 + 4];
    }
    geta_data1(index: number) {
        return this.uint16[index * 8 + 5];
    }
    geta_data2(index: number) {
        return this.uint16[index * 8 + 6];
    }
    geta_data3(index: number) {
        return this.uint16[index * 8 + 7];
    }
    emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number) {
        const i = this.length;
        this.resize(this.length + 1);

        // array offsets to the end of current data for each type size
        // var o{SIZE} = i * ROUNDED(bytesPerElement / size);
        const o2 = i * 8;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        this.uint16[o2 + 4] = v4;
        this.uint16[o2 + 5] = v5;
        this.uint16[o2 + 6] = v6;
        this.uint16[o2 + 7] = v7;

        return i;
    }

    static deserialize(input: SerializedStructArray): SymbolLayoutVertexStructArray {
        const structArray = Object.create(SymbolLayoutVertexStructArray.prototype);
        structArray.arrayBuffer = input.arrayBuffer;
        structArray.length = input.length;
        structArray.capacity = structArray.arrayBuffer.byteLength / structArray.bytesPerElement;
        structArray._refreshViews();
        return structArray;
    }
}

(SymbolLayoutVertexStructArray: any).serialize = StructArray.serialize;

SymbolLayoutVertexStructArray.prototype.members = [{"name":"a_pos_offset", "type":"Int16", "components":4, "offset":0, "size":2, "view":"int16"}, {"name":"a_data", "type":"Uint16", "components":4, "offset":8, "size":2, "view":"uint16"}];
SymbolLayoutVertexStructArray.prototype.bytesPerElement = 16;
SymbolLayoutVertexStructArray.prototype._usedTypes = ["Uint8", "Int16", "Uint16"];
SymbolLayoutVertexStructArray.prototype.StructType = SymbolLayoutVertexStruct;


register('SymbolLayoutVertexStructArray', SymbolLayoutVertexStructArray);

module.exports = SymbolLayoutVertexStructArray;
