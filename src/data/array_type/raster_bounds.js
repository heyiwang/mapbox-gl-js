// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_1_4i');
const {register} = require('../../util/web_worker_transfer');


class RasterBoundsStruct extends Struct {
    a_pos0: number;
    a_pos1: number;
    a_texture_pos0: number;
    a_texture_pos1: number;
}

(Object.defineProperty: any)(
    RasterBoundsStruct.prototype,
    'a_pos0',
    {
        get: function () { return this._structArray.int16[this._pos2 + 0]; },
        set: function (x) { this._structArray.int16[this._pos2 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    RasterBoundsStruct.prototype,
    'a_pos1',
    {
        get: function () { return this._structArray.int16[this._pos2 + 1]; },
        set: function (x) { this._structArray.int16[this._pos2 + 1] = x; }
    }
);
(Object.defineProperty: any)(
    RasterBoundsStruct.prototype,
    'a_texture_pos0',
    {
        get: function () { return this._structArray.int16[this._pos2 + 2]; },
        set: function (x) { this._structArray.int16[this._pos2 + 2] = x; }
    }
);
(Object.defineProperty: any)(
    RasterBoundsStruct.prototype,
    'a_texture_pos1',
    {
        get: function () { return this._structArray.int16[this._pos2 + 3]; },
        set: function (x) { this._structArray.int16[this._pos2 + 3] = x; }
    }
);
RasterBoundsStruct.prototype.size = 8;

class RasterBoundsStructArray extends StructArrayLayout {
    geta_pos0(index: number) { return this.int16[index * 4 + 0]; }
    geta_pos1(index: number) { return this.int16[index * 4 + 1]; }
    geta_texture_pos0(index: number) { return this.int16[index * 4 + 2]; }
    geta_texture_pos1(index: number) { return this.int16[index * 4 + 3]; }
}

(RasterBoundsStructArray: any).serialize = StructArray.serialize;

RasterBoundsStructArray.prototype.members = [{"name":"a_pos", "type":"Int16", "components":2, "offset":0, "size":2, "view":"int16"}, {"name":"a_texture_pos", "type":"Int16", "components":2, "offset":4, "size":2, "view":"int16"}];
RasterBoundsStructArray.prototype.StructType = RasterBoundsStruct;

register('RasterBoundsStructArray', RasterBoundsStructArray);

module.exports = RasterBoundsStructArray;
