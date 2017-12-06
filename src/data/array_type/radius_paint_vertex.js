// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_1f');
const {register} = require('../../util/web_worker_transfer');


class RadiusPaintVertexStruct extends Struct {
    a_radius: number;
}

(Object.defineProperty: any)(
    RadiusPaintVertexStruct.prototype,
    'a_radius',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);
RadiusPaintVertexStruct.prototype.size = 4;

class RadiusPaintVertexStructArray extends StructArrayLayout {
    geta_radius(index: number) { return this.float32[index * 1 + 0]; }
}

(RadiusPaintVertexStructArray: any).serialize = StructArray.serialize;

RadiusPaintVertexStructArray.prototype.members = [{"name":"a_radius", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
RadiusPaintVertexStructArray.prototype.StructType = RadiusPaintVertexStruct;

register('RadiusPaintVertexStructArray', RadiusPaintVertexStructArray);

module.exports = RadiusPaintVertexStructArray;
