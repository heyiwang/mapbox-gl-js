// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


class GapwidthPaintVertexStruct extends Struct {
    a_gapwidth: number;
}

(Object.defineProperty: any)(
    GapwidthPaintVertexStruct.prototype,
    'a_gapwidth',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);
GapwidthPaintVertexStruct.prototype.size = 4;

class GapwidthPaintVertexStructArray extends StructArrayLayout {
    geta_gapwidth(index: number) { return this.float32[index * 1 + 0]; }
}

(GapwidthPaintVertexStructArray: any).serialize = StructArray.serialize;

GapwidthPaintVertexStructArray.prototype.members = [{"name":"a_gapwidth", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
GapwidthPaintVertexStructArray.prototype.StructType = GapwidthPaintVertexStruct;

register('GapwidthPaintVertexStructArray', GapwidthPaintVertexStructArray);

module.exports = GapwidthPaintVertexStructArray;
