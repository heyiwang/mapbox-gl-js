// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_1_1f');
const {register} = require('../../util/web_worker_transfer');


class GlyphOffsetStruct extends Struct {
    offsetX: number;
}

(Object.defineProperty: any)(
    GlyphOffsetStruct.prototype,
    'offsetX',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);
GlyphOffsetStruct.prototype.size = 4;

class GlyphOffsetStructArray extends StructArrayLayout {
    getoffsetX(index: number) { return this.float32[index * 1 + 0]; }
}

(GlyphOffsetStructArray: any).serialize = StructArray.serialize;

GlyphOffsetStructArray.prototype.members = [{"name":"offsetX", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
GlyphOffsetStructArray.prototype.StructType = GlyphOffsetStruct;

register('GlyphOffsetStructArray', GlyphOffsetStructArray);

module.exports = GlyphOffsetStructArray;
