// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


class WidthPaintVertexStruct extends Struct {
    a_width: number;
}

(Object.defineProperty: any)(
    WidthPaintVertexStruct.prototype,
    'a_width',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);
WidthPaintVertexStruct.prototype.size = 4;

class WidthPaintVertexStructArray extends StructArrayLayout {
    geta_width(index: number) { return this.float32[index * 1 + 0]; }
}

(WidthPaintVertexStructArray: any).serialize = StructArray.serialize;

WidthPaintVertexStructArray.prototype.members = [{"name":"a_width", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
WidthPaintVertexStructArray.prototype.StructType = WidthPaintVertexStruct;

register('WidthPaintVertexStructArray', WidthPaintVertexStructArray);

module.exports = WidthPaintVertexStructArray;
