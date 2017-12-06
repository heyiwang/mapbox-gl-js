// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_4i_4ub');
const {register} = require('../../util/web_worker_transfer');


class LineLayoutVertexStruct extends Struct {
    a_pos_normal0: number;
    a_pos_normal1: number;
    a_pos_normal2: number;
    a_pos_normal3: number;
    a_data0: number;
    a_data1: number;
    a_data2: number;
    a_data3: number;
}

(Object.defineProperty: any)(
    LineLayoutVertexStruct.prototype,
    'a_pos_normal0',
    {
        get: function () { return this._structArray.int16[this._pos2 + 0]; },
        set: function (x) { this._structArray.int16[this._pos2 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    LineLayoutVertexStruct.prototype,
    'a_pos_normal1',
    {
        get: function () { return this._structArray.int16[this._pos2 + 1]; },
        set: function (x) { this._structArray.int16[this._pos2 + 1] = x; }
    }
);
(Object.defineProperty: any)(
    LineLayoutVertexStruct.prototype,
    'a_pos_normal2',
    {
        get: function () { return this._structArray.int16[this._pos2 + 2]; },
        set: function (x) { this._structArray.int16[this._pos2 + 2] = x; }
    }
);
(Object.defineProperty: any)(
    LineLayoutVertexStruct.prototype,
    'a_pos_normal3',
    {
        get: function () { return this._structArray.int16[this._pos2 + 3]; },
        set: function (x) { this._structArray.int16[this._pos2 + 3] = x; }
    }
);
(Object.defineProperty: any)(
    LineLayoutVertexStruct.prototype,
    'a_data0',
    {
        get: function () { return this._structArray.uint8[this._pos1 + 8]; },
        set: function (x) { this._structArray.uint8[this._pos1 + 8] = x; }
    }
);
(Object.defineProperty: any)(
    LineLayoutVertexStruct.prototype,
    'a_data1',
    {
        get: function () { return this._structArray.uint8[this._pos1 + 9]; },
        set: function (x) { this._structArray.uint8[this._pos1 + 9] = x; }
    }
);
(Object.defineProperty: any)(
    LineLayoutVertexStruct.prototype,
    'a_data2',
    {
        get: function () { return this._structArray.uint8[this._pos1 + 10]; },
        set: function (x) { this._structArray.uint8[this._pos1 + 10] = x; }
    }
);
(Object.defineProperty: any)(
    LineLayoutVertexStruct.prototype,
    'a_data3',
    {
        get: function () { return this._structArray.uint8[this._pos1 + 11]; },
        set: function (x) { this._structArray.uint8[this._pos1 + 11] = x; }
    }
);
LineLayoutVertexStruct.prototype.size = 12;

class LineLayoutVertexStructArray extends StructArrayLayout {
    geta_pos_normal0(index: number) { return this.int16[index * 6 + 0]; }
    geta_pos_normal1(index: number) { return this.int16[index * 6 + 1]; }
    geta_pos_normal2(index: number) { return this.int16[index * 6 + 2]; }
    geta_pos_normal3(index: number) { return this.int16[index * 6 + 3]; }
    geta_data0(index: number) { return this.uint8[index * 12 + 8]; }
    geta_data1(index: number) { return this.uint8[index * 12 + 9]; }
    geta_data2(index: number) { return this.uint8[index * 12 + 10]; }
    geta_data3(index: number) { return this.uint8[index * 12 + 11]; }
}

(LineLayoutVertexStructArray: any).serialize = StructArray.serialize;

LineLayoutVertexStructArray.prototype.members = [{"name":"a_pos_normal", "type":"Int16", "components":4, "offset":0, "size":2, "view":"int16"}, {"name":"a_data", "type":"Uint8", "components":4, "offset":8, "size":1, "view":"uint8"}];
LineLayoutVertexStructArray.prototype.StructType = LineLayoutVertexStruct;

register('LineLayoutVertexStructArray', LineLayoutVertexStructArray);

module.exports = LineLayoutVertexStructArray;
