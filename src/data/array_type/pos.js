// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_1_2i');
const {register} = require('../../util/web_worker_transfer');


class PosStruct extends Struct {
    a_pos0: number;
    a_pos1: number;
}

(Object.defineProperty: any)(
    PosStruct.prototype,
    'a_pos0',
    {
        get: function () { return this._structArray.int16[this._pos2 + 0]; },
        set: function (x) { this._structArray.int16[this._pos2 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    PosStruct.prototype,
    'a_pos1',
    {
        get: function () { return this._structArray.int16[this._pos2 + 1]; },
        set: function (x) { this._structArray.int16[this._pos2 + 1] = x; }
    }
);
PosStruct.prototype.size = 4;

class PosStructArray extends StructArrayLayout {
    geta_pos0(index: number) { return this.int16[index * 2 + 0]; }
    geta_pos1(index: number) { return this.int16[index * 2 + 1]; }
}

(PosStructArray: any).serialize = StructArray.serialize;

PosStructArray.prototype.members = [{"name":"a_pos", "type":"Int16", "components":2, "offset":0, "size":2, "view":"int16"}];
PosStructArray.prototype.StructType = PosStruct;

register('PosStructArray', PosStructArray);

module.exports = PosStructArray;
