// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_1_1ul_2ui');
const {register} = require('../../util/web_worker_transfer');


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

class FeatureIndexStructArray extends StructArrayLayout {
    getfeatureIndex(index: number) { return this.uint32[index * 2 + 0]; }
    getsourceLayerIndex(index: number) { return this.uint16[index * 4 + 2]; }
    getbucketIndex(index: number) { return this.uint16[index * 4 + 3]; }
}

(FeatureIndexStructArray: any).serialize = StructArray.serialize;

FeatureIndexStructArray.prototype.members = [{"name":"featureIndex", "type":"Uint32", "components":1, "offset":0, "size":4, "view":"uint32"}, {"name":"sourceLayerIndex", "type":"Uint16", "components":1, "offset":4, "size":2, "view":"uint16"}, {"name":"bucketIndex", "type":"Uint16", "components":1, "offset":6, "size":2, "view":"uint16"}];
FeatureIndexStructArray.prototype.StructType = FeatureIndexStruct;

register('FeatureIndexStructArray', FeatureIndexStructArray);

module.exports = FeatureIndexStructArray;
