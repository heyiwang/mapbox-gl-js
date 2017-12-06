// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */

const assert = require('assert');
const {Struct} = require('../../util/struct_array');
const StructArrayLayout_1_1f = require('./struct_array_layout_1_1f');
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

export type GlyphOffset = GlyphOffsetStruct;


class GlyphOffsetStructArray extends StructArrayLayout_1_1f {
    getoffsetX(index: number) { return this.float32[index * 1 + 0]; }
    /**
     * Return the GlyphOffsetStruct at the given location in the array.
     * @param {number} index The index of the element.
     */
    get(index: number): GlyphOffsetStruct {
        assert(!this.isTransferred);
        return new GlyphOffsetStruct(this, index);
    }
}

GlyphOffsetStructArray.prototype.members = [{"name":"offsetX", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];

register('GlyphOffsetStructArray', GlyphOffsetStructArray);

module.exports = GlyphOffsetStructArray;
