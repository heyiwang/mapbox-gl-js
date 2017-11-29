// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class FillColorPaintVertexStruct extends Struct {
    a_fill_color0: number;
    a_fill_color1: number;
}

(Object.defineProperty: any)(
    FillColorPaintVertexStruct.prototype,
    'a_fill_color0',
    {
        get: function () { return this._structArray.float32[this._pos4 + 0]; },
        set: function (x) { this._structArray.float32[this._pos4 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    FillColorPaintVertexStruct.prototype,
    'a_fill_color1',
    {
        get: function () { return this._structArray.float32[this._pos4 + 1]; },
        set: function (x) { this._structArray.float32[this._pos4 + 1] = x; }
    }
);
FillColorPaintVertexStruct.prototype.size = 8;

class FillColorPaintVertexStructArray extends StructArray {
    uint8: Uint8Array;
    float32: Float32Array;

    geta_fill_color0(index: number) {
        return this.float32[index * 2 + 0];
    }
    geta_fill_color1(index: number) {
        return this.float32[index * 2 + 1];
    }
    emplaceBack(v0: number, v1: number) {
        const i = this.length;
        this.resize(this.length + 1);

        // array offsets to the end of current data for each type size
        // var o{SIZE} = i * ROUNDED(bytesPerElement / size);
        const o4 = i * 2;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;

        return i;
    }

    static deserialize(input: SerializedStructArray): FillColorPaintVertexStructArray {
        const structArray = Object.create(FillColorPaintVertexStructArray.prototype);
        structArray.arrayBuffer = input.arrayBuffer;
        structArray.length = input.length;
        structArray.capacity = structArray.arrayBuffer.byteLength / structArray.bytesPerElement;
        structArray._refreshViews();
        return structArray;
    }
}

(FillColorPaintVertexStructArray: any).serialize = StructArray.serialize;

FillColorPaintVertexStructArray.prototype.members = [{"name":"a_fill_color", "type":"Float32", "components":2, "offset":0, "size":4, "view":"float32"}];
FillColorPaintVertexStructArray.prototype.bytesPerElement = 8;
FillColorPaintVertexStructArray.prototype._usedTypes = ["Uint8", "Float32"];
FillColorPaintVertexStructArray.prototype.StructType = FillColorPaintVertexStruct;


register('FillColorPaintVertexStructArray', FillColorPaintVertexStructArray);

module.exports = FillColorPaintVertexStructArray;
