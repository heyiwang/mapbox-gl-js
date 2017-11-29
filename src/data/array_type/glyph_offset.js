// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

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

class GlyphOffsetStructArray extends StructArray {
    uint8: Uint8Array;
    float32: Float32Array;

    getoffsetX(index: number) {
        return this.float32[index * 1 + 0];
    }
    emplaceBack(v0: number) {
        const i = this.length;
        this.resize(this.length + 1);

        // array offsets to the end of current data for each type size
        // var o{SIZE} = i * ROUNDED(bytesPerElement / size);
        const o4 = i * 1;
        this.float32[o4 + 0] = v0;

        return i;
    }

    static deserialize(input: SerializedStructArray): GlyphOffsetStructArray {
        const structArray = Object.create(GlyphOffsetStructArray.prototype);
        structArray.arrayBuffer = input.arrayBuffer;
        structArray.length = input.length;
        structArray.capacity = structArray.arrayBuffer.byteLength / structArray.bytesPerElement;
        structArray._refreshViews();
        return structArray;
    }
}

(GlyphOffsetStructArray: any).serialize = StructArray.serialize;

GlyphOffsetStructArray.prototype.members = [{"name":"offsetX", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
GlyphOffsetStructArray.prototype.bytesPerElement = 4;
GlyphOffsetStructArray.prototype._usedTypes = ["Uint8", "Float32"];
GlyphOffsetStructArray.prototype.StructType = GlyphOffsetStruct;


register('GlyphOffsetStructArray', GlyphOffsetStructArray);

module.exports = GlyphOffsetStructArray;
