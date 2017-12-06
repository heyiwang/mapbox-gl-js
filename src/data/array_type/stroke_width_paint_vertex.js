// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


class StrokeWidthPaintVertexStruct extends Struct {
    a_stroke_width: number;
}

(Object.defineProperty: any)(
    StrokeWidthPaintVertexStruct.prototype,
    'a_stroke_width',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);
StrokeWidthPaintVertexStruct.prototype.size = 4;

class StrokeWidthPaintVertexStructArray extends StructArrayLayout {
    geta_stroke_width(index: number) { return this.float32[index * 1 + 0]; }
}

(StrokeWidthPaintVertexStructArray: any).serialize = StructArray.serialize;

StrokeWidthPaintVertexStructArray.prototype.members = [{"name":"a_stroke_width", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
StrokeWidthPaintVertexStructArray.prototype.StructType = StrokeWidthPaintVertexStruct;

register('StrokeWidthPaintVertexStructArray', StrokeWidthPaintVertexStructArray);

module.exports = StrokeWidthPaintVertexStructArray;
