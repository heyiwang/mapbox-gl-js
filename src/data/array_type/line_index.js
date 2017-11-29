// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class LineIndexStruct extends Struct {
    vertices0: number;
    vertices1: number;
}

(Object.defineProperty: any)(
    LineIndexStruct.prototype,
    'vertices0',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 0]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    LineIndexStruct.prototype,
    'vertices1',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 1]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 1] = x; }
    }
);
LineIndexStruct.prototype.size = 4;

class LineIndexStructArray extends StructArray {
    uint8: Uint8Array;
    uint16: Uint16Array;

    getvertices0(index: number) {
        return this.uint16[index * 2 + 0];
    }
    getvertices1(index: number) {
        return this.uint16[index * 2 + 1];
    }
    emplaceBack(v0: number, v1: number) {
        const i = this.length;
        this.resize(this.length + 1);

        // array offsets to the end of current data for each type size
        // var o{SIZE} = i * ROUNDED(bytesPerElement / size);
        const o2 = i * 2;
        this.uint16[o2 + 0] = v0;
        this.uint16[o2 + 1] = v1;

        return i;
    }

    static deserialize(input: SerializedStructArray): LineIndexStructArray {
        const structArray = Object.create(LineIndexStructArray.prototype);
        structArray.arrayBuffer = input.arrayBuffer;
        structArray.length = input.length;
        structArray.capacity = structArray.arrayBuffer.byteLength / structArray.bytesPerElement;
        structArray._refreshViews();
        return structArray;
    }
}

(LineIndexStructArray: any).serialize = StructArray.serialize;

LineIndexStructArray.prototype.members = [{"name":"vertices", "type":"Uint16", "components":2, "offset":0, "size":2, "view":"uint16"}];
LineIndexStructArray.prototype.bytesPerElement = 4;
LineIndexStructArray.prototype._usedTypes = ["Uint8", "Uint16"];
LineIndexStructArray.prototype.StructType = LineIndexStruct;


register('LineIndexStructArray', LineIndexStructArray);

module.exports = LineIndexStructArray;
