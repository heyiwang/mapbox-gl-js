// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_1_4i_4ui');
const {register} = require('../../util/web_worker_transfer');


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

class SymbolLayoutVertexStructArray extends StructArrayLayout {
    geta_pos_offset0(index: number) { return this.int16[index * 8 + 0]; }
    geta_pos_offset1(index: number) { return this.int16[index * 8 + 1]; }
    geta_pos_offset2(index: number) { return this.int16[index * 8 + 2]; }
    geta_pos_offset3(index: number) { return this.int16[index * 8 + 3]; }
    geta_data0(index: number) { return this.uint16[index * 8 + 4]; }
    geta_data1(index: number) { return this.uint16[index * 8 + 5]; }
    geta_data2(index: number) { return this.uint16[index * 8 + 6]; }
    geta_data3(index: number) { return this.uint16[index * 8 + 7]; }
}

(SymbolLayoutVertexStructArray: any).serialize = StructArray.serialize;

SymbolLayoutVertexStructArray.prototype.members = [{"name":"a_pos_offset", "type":"Int16", "components":4, "offset":0, "size":2, "view":"int16"}, {"name":"a_data", "type":"Uint16", "components":4, "offset":8, "size":2, "view":"uint16"}];
SymbolLayoutVertexStructArray.prototype.StructType = SymbolLayoutVertexStruct;

register('SymbolLayoutVertexStructArray', SymbolLayoutVertexStructArray);

module.exports = SymbolLayoutVertexStructArray;
