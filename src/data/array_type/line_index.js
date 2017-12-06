// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_1_2ui');
const {register} = require('../../util/web_worker_transfer');


class LineIndexStruct extends Struct {
    vertices0: number;
    vertices1: number;
}

(Object.defineProperty: any)(
    LineIndexStruct.prototype,
    'vertices0',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 0]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    LineIndexStruct.prototype,
    'vertices1',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 1]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 1] = x; }
    }
);
LineIndexStruct.prototype.size = 4;

class LineIndexStructArray extends StructArrayLayout {
    getvertices0(index: number) { return this.uint16[index * 2 + 0]; }
    getvertices1(index: number) { return this.uint16[index * 2 + 1]; }
}

(LineIndexStructArray: any).serialize = StructArray.serialize;

LineIndexStructArray.prototype.members = [{"name":"vertices", "type":"Uint16", "components":2, "offset":0, "size":2, "view":"uint16"}];
LineIndexStructArray.prototype.StructType = LineIndexStruct;

register('LineIndexStructArray', LineIndexStructArray);

module.exports = LineIndexStructArray;
