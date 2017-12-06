// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


class HeightPaintVertexStruct extends Struct {
    a_height: number;
}

(Object.defineProperty: any)(
    HeightPaintVertexStruct.prototype,
    'a_height',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);
HeightPaintVertexStruct.prototype.size = 4;

class HeightPaintVertexStructArray extends StructArrayLayout {
    geta_height(index: number) { return this.float32[index * 1 + 0]; }
}

(HeightPaintVertexStructArray: any).serialize = StructArray.serialize;

HeightPaintVertexStructArray.prototype.members = [{"name":"a_height", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
HeightPaintVertexStructArray.prototype.StructType = HeightPaintVertexStruct;

register('HeightPaintVertexStructArray', HeightPaintVertexStructArray);

module.exports = HeightPaintVertexStructArray;
