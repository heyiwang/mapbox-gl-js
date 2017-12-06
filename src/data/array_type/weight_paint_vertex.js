// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


class WeightPaintVertexStruct extends Struct {
    a_weight: number;
}

(Object.defineProperty: any)(
    WeightPaintVertexStruct.prototype,
    'a_weight',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);
WeightPaintVertexStruct.prototype.size = 4;

class WeightPaintVertexStructArray extends StructArrayLayout {
    geta_weight(index: number) { return this.float32[index * 1 + 0]; }
}

(WeightPaintVertexStructArray: any).serialize = StructArray.serialize;

WeightPaintVertexStructArray.prototype.members = [{"name":"a_weight", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
WeightPaintVertexStructArray.prototype.StructType = WeightPaintVertexStruct;

register('WeightPaintVertexStructArray', WeightPaintVertexStructArray);

module.exports = WeightPaintVertexStructArray;
