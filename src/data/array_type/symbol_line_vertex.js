// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class SymbolLineVertexStruct extends Struct {
    x: number;
    y: number;
    tileUnitDistanceFromAnchor: number;
}

(Object.defineProperty: any)(
    SymbolLineVertexStruct.prototype,
    'x',
    {
        get: function () { return this._structArray.int16[this._pos2 + 0]; },
        set: function (x) { this._structArray.int16[this._pos2 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    SymbolLineVertexStruct.prototype,
    'y',
    {
        get: function () { return this._structArray.int16[this._pos2 + 1]; },
        set: function (x) { this._structArray.int16[this._pos2 + 1] = x; }
    }
);
(Object.defineProperty: any)(
    SymbolLineVertexStruct.prototype,
    'tileUnitDistanceFromAnchor',
    {
        get: function () { return this._structArray.int16[this._pos2 + 2]; },
        set: function (x) { this._structArray.int16[this._pos2 + 2] = x; }
    }
);
SymbolLineVertexStruct.prototype.size = 6;

class SymbolLineVertexStructArray extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;

    getx(index: number) {
        return this.int16[index * 3 + 0];
    }
    gety(index: number) {
        return this.int16[index * 3 + 1];
    }
    gettileUnitDistanceFromAnchor(index: number) {
        return this.int16[index * 3 + 2];
    }
    emplaceBack(v0: number, v1: number, v2: number) {
        const i = this.length;
        this.resize(this.length + 1);

        // array offsets to the end of current data for each type size
        // var o{SIZE} = i * ROUNDED(bytesPerElement / size);
        const o2 = i * 3;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;

        return i;
    }

    static deserialize(input: SerializedStructArray): SymbolLineVertexStructArray {
        const structArray = Object.create(SymbolLineVertexStructArray.prototype);
        structArray.arrayBuffer = input.arrayBuffer;
        structArray.length = input.length;
        structArray.capacity = structArray.arrayBuffer.byteLength / structArray.bytesPerElement;
        structArray._refreshViews();
        return structArray;
    }
}

(SymbolLineVertexStructArray: any).serialize = StructArray.serialize;

SymbolLineVertexStructArray.prototype.members = [{"name":"x", "type":"Int16", "components":1, "offset":0, "size":2, "view":"int16"}, {"name":"y", "type":"Int16", "components":1, "offset":2, "size":2, "view":"int16"}, {"name":"tileUnitDistanceFromAnchor", "type":"Int16", "components":1, "offset":4, "size":2, "view":"int16"}];
SymbolLineVertexStructArray.prototype.bytesPerElement = 6;
SymbolLineVertexStructArray.prototype._usedTypes = ["Uint8", "Int16"];
SymbolLineVertexStructArray.prototype.StructType = SymbolLineVertexStruct;


register('SymbolLineVertexStructArray', SymbolLineVertexStructArray);

module.exports = SymbolLineVertexStructArray;
