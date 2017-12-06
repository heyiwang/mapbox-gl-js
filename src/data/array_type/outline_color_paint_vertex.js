// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_2f');
const {register} = require('../../util/web_worker_transfer');


class OutlineColorPaintVertexStruct extends Struct {
    a_outline_color0: number;
    a_outline_color1: number;
}

(Object.defineProperty: any)(
    OutlineColorPaintVertexStruct.prototype,
    'a_outline_color0',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    OutlineColorPaintVertexStruct.prototype,
    'a_outline_color1',
    {
        get: function () { return this._structArray.float32[this._pos4 + 1]; },
        set: function (x) { this._structArray.float32[this._pos4 + 1] = x; }
    }
);
OutlineColorPaintVertexStruct.prototype.size = 8;

class OutlineColorPaintVertexStructArray extends StructArrayLayout {
    geta_outline_color0(index: number) { return this.float32[index * 2 + 0]; }
    geta_outline_color1(index: number) { return this.float32[index * 2 + 1]; }
}

(OutlineColorPaintVertexStructArray: any).serialize = StructArray.serialize;

OutlineColorPaintVertexStructArray.prototype.members = [{"name":"a_outline_color", "type":"Float32", "components":2, "offset":0, "size":4, "view":"float32"}];
OutlineColorPaintVertexStructArray.prototype.StructType = OutlineColorPaintVertexStruct;

register('OutlineColorPaintVertexStructArray', OutlineColorPaintVertexStructArray);

module.exports = OutlineColorPaintVertexStructArray;
