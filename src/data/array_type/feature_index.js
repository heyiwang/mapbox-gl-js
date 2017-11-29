// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');


import type {SerializedStructArray} from '../../util/struct_array';

class FeatureIndexStruct extends Struct {
    featureIndex: number;
    sourceLayerIndex: number;
    bucketIndex: number;
}

(Object.defineProperty: any)(
    FeatureIndexStruct.prototype,
    'featureIndex',
    {
        get: function () { return this._structArray.uint32[this._pos4 + 0]; },
        set: function (x) { this._structArray.uint32[this._pos4 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    FeatureIndexStruct.prototype,
    'sourceLayerIndex',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 2]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 2] = x; }
    }
);
(Object.defineProperty: any)(
    FeatureIndexStruct.prototype,
    'bucketIndex',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 3]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 3] = x; }
    }
);
FeatureIndexStruct.prototype.size = 8;

class FeatureIndexStructArray extends StructArray {
    uint8: Uint8Array;
    uint32: Uint32Array;
    uint16: Uint16Array;

    getfeatureIndex(index: number) {
        return this.uint32[index * 2 + 0];
    }
    getsourceLayerIndex(index: number) {
        return this.uint16[index * 4 + 2];
    }
    getbucketIndex(index: number) {
        return this.uint16[index * 4 + 3];
    }
    emplaceBack(v0: number, v1: number, v2: number) {
        const i = this.length;
        this.resize(this.length + 1);

        // array offsets to the end of current data for each type size
        // var o{SIZE} = i * ROUNDED(bytesPerElement / size);
        const o4 = i * 2;
        const o2 = i * 4;
        this.uint32[o4 + 0] = v0;
        this.uint16[o2 + 2] = v1;
        this.uint16[o2 + 3] = v2;

        return i;
    }

    static deserialize(input: SerializedStructArray): FeatureIndexStructArray {
        const structArray = Object.create(FeatureIndexStructArray.prototype);
        structArray.arrayBuffer = input.arrayBuffer;
        structArray.length = input.length;
        structArray.capacity = structArray.arrayBuffer.byteLength / structArray.bytesPerElement;
        structArray._refreshViews();
        return structArray;
    }
}

(FeatureIndexStructArray: any).serialize = StructArray.serialize;

FeatureIndexStructArray.prototype.members = [{"name":"featureIndex", "type":"Uint32", "components":1, "offset":0, "size":4, "view":"uint32"}, {"name":"sourceLayerIndex", "type":"Uint16", "components":1, "offset":4, "size":2, "view":"uint16"}, {"name":"bucketIndex", "type":"Uint16", "components":1, "offset":6, "size":2, "view":"uint16"}];
FeatureIndexStructArray.prototype.bytesPerElement = 8;
FeatureIndexStructArray.prototype._usedTypes = ["Uint8", "Uint32", "Uint16"];
FeatureIndexStructArray.prototype.StructType = FeatureIndexStruct;


register('FeatureIndexStructArray', FeatureIndexStructArray);

module.exports = FeatureIndexStructArray;
