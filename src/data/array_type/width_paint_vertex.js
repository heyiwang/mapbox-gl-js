// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

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

class WidthPaintVertexStructArray extends StructArray {
    uint8: Uint8Array;
    float32: Float32Array;

    geta_width(index: number) {
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

    static deserialize(input: SerializedStructArray): WidthPaintVertexStructArray {
        const structArray = Object.create(WidthPaintVertexStructArray.prototype);
        structArray.arrayBuffer = input.arrayBuffer;
        structArray.length = input.length;
        structArray.capacity = structArray.arrayBuffer.byteLength / structArray.bytesPerElement;
        structArray._refreshViews();
        return structArray;
    }
}

(WidthPaintVertexStructArray: any).serialize = StructArray.serialize;

WidthPaintVertexStructArray.prototype.members = [{"name":"a_width", "type":"Float32", "components":1, "offset":0, "size":4, "view":"float32"}];
WidthPaintVertexStructArray.prototype.bytesPerElement = 4;
WidthPaintVertexStructArray.prototype._usedTypes = ["Uint8", "Float32"];
WidthPaintVertexStructArray.prototype.StructType = WidthPaintVertexStruct;


register('WidthPaintVertexStructArray', WidthPaintVertexStructArray);

module.exports = WidthPaintVertexStructArray;
