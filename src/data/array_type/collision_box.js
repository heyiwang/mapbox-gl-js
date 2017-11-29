// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');

const Point = require('@mapbox/point-geometry');


import type {SerializedStructArray} from '../../util/struct_array';

class CollisionBoxStruct extends Struct {
    anchorPointX: number;
    anchorPointY: number;
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    featureIndex: number;
    sourceLayerIndex: number;
    bucketIndex: number;
    radius: number;
    signedDistanceFromAnchor: number;
    anchorPoint: Point;
}

(Object.defineProperty: any)(
    CollisionBoxStruct.prototype,
    'anchorPointX',
    {
        get: function () { return this._structArray.int16[this._pos2 + 0]; },
        set: function (x) { this._structArray.int16[this._pos2 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    CollisionBoxStruct.prototype,
    'anchorPointY',
    {
        get: function () { return this._structArray.int16[this._pos2 + 1]; },
        set: function (x) { this._structArray.int16[this._pos2 + 1] = x; }
    }
);
(Object.defineProperty: any)(
    CollisionBoxStruct.prototype,
    'x1',
    {
        get: function () { return this._structArray.int16[this._pos2 + 2]; },
        set: function (x) { this._structArray.int16[this._pos2 + 2] = x; }
    }
);
(Object.defineProperty: any)(
    CollisionBoxStruct.prototype,
    'y1',
    {
        get: function () { return this._structArray.int16[this._pos2 + 3]; },
        set: function (x) { this._structArray.int16[this._pos2 + 3] = x; }
    }
);
(Object.defineProperty: any)(
    CollisionBoxStruct.prototype,
    'x2',
    {
        get: function () { return this._structArray.int16[this._pos2 + 4]; },
        set: function (x) { this._structArray.int16[this._pos2 + 4] = x; }
    }
);
(Object.defineProperty: any)(
    CollisionBoxStruct.prototype,
    'y2',
    {
        get: function () { return this._structArray.int16[this._pos2 + 5]; },
        set: function (x) { this._structArray.int16[this._pos2 + 5] = x; }
    }
);
(Object.defineProperty: any)(
    CollisionBoxStruct.prototype,
    'featureIndex',
    {
        get: function () { return this._structArray.uint32[this._pos4 + 3]; },
        set: function (x) { this._structArray.uint32[this._pos4 + 3] = x; }
    }
);
(Object.defineProperty: any)(
    CollisionBoxStruct.prototype,
    'sourceLayerIndex',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 8]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 8] = x; }
    }
);
(Object.defineProperty: any)(
    CollisionBoxStruct.prototype,
    'bucketIndex',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 9]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 9] = x; }
    }
);
(Object.defineProperty: any)(
    CollisionBoxStruct.prototype,
    'radius',
    {
        get: function () { return this._structArray.int16[this._pos2 + 10]; },
        set: function (x) { this._structArray.int16[this._pos2 + 10] = x; }
    }
);
(Object.defineProperty: any)(
    CollisionBoxStruct.prototype,
    'signedDistanceFromAnchor',
    {
        get: function () { return this._structArray.int16[this._pos2 + 11]; },
        set: function (x) { this._structArray.int16[this._pos2 + 11] = x; }
    }
);
// https://github.com/facebook/flow/issues/285
(Object.defineProperty: any)(CollisionBoxStruct.prototype, 'anchorPoint', {
    get() { return new Point(this.anchorPointX, this.anchorPointY); }
});
CollisionBoxStruct.prototype.size = 24;

class CollisionBoxStructArray extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;
    uint32: Uint32Array;
    uint16: Uint16Array;

    getanchorPointX(index: number) {
        return this.int16[index * 12 + 0];
    }
    getanchorPointY(index: number) {
        return this.int16[index * 12 + 1];
    }
    getx1(index: number) {
        return this.int16[index * 12 + 2];
    }
    gety1(index: number) {
        return this.int16[index * 12 + 3];
    }
    getx2(index: number) {
        return this.int16[index * 12 + 4];
    }
    gety2(index: number) {
        return this.int16[index * 12 + 5];
    }
    getfeatureIndex(index: number) {
        return this.uint32[index * 6 + 3];
    }
    getsourceLayerIndex(index: number) {
        return this.uint16[index * 12 + 8];
    }
    getbucketIndex(index: number) {
        return this.uint16[index * 12 + 9];
    }
    getradius(index: number) {
        return this.int16[index * 12 + 10];
    }
    getsignedDistanceFromAnchor(index: number) {
        return this.int16[index * 12 + 11];
    }
    emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number) {
        const i = this.length;
        this.resize(this.length + 1);

        // array offsets to the end of current data for each type size
        // var o{SIZE} = i * ROUNDED(bytesPerElement / size);
        const o2 = i * 12;
        const o4 = i * 6;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        this.int16[o2 + 4] = v4;
        this.int16[o2 + 5] = v5;
        this.uint32[o4 + 3] = v6;
        this.uint16[o2 + 8] = v7;
        this.uint16[o2 + 9] = v8;
        this.int16[o2 + 10] = v9;
        this.int16[o2 + 11] = v10;

        return i;
    }

    static deserialize(input: SerializedStructArray): CollisionBoxStructArray {
        const structArray = Object.create(CollisionBoxStructArray.prototype);
        structArray.arrayBuffer = input.arrayBuffer;
        structArray.length = input.length;
        structArray.capacity = structArray.arrayBuffer.byteLength / structArray.bytesPerElement;
        structArray._refreshViews();
        return structArray;
    }
}

(CollisionBoxStructArray: any).serialize = StructArray.serialize;

CollisionBoxStructArray.prototype.members = [{"name":"anchorPointX", "type":"Int16", "components":1, "offset":0, "size":2, "view":"int16"}, {"name":"anchorPointY", "type":"Int16", "components":1, "offset":2, "size":2, "view":"int16"}, {"name":"x1", "type":"Int16", "components":1, "offset":4, "size":2, "view":"int16"}, {"name":"y1", "type":"Int16", "components":1, "offset":6, "size":2, "view":"int16"}, {"name":"x2", "type":"Int16", "components":1, "offset":8, "size":2, "view":"int16"}, {"name":"y2", "type":"Int16", "components":1, "offset":10, "size":2, "view":"int16"}, {"name":"featureIndex", "type":"Uint32", "components":1, "offset":12, "size":4, "view":"uint32"}, {"name":"sourceLayerIndex", "type":"Uint16", "components":1, "offset":16, "size":2, "view":"uint16"}, {"name":"bucketIndex", "type":"Uint16", "components":1, "offset":18, "size":2, "view":"uint16"}, {"name":"radius", "type":"Int16", "components":1, "offset":20, "size":2, "view":"int16"}, {"name":"signedDistanceFromAnchor", "type":"Int16", "components":1, "offset":22, "size":2, "view":"int16"}];
CollisionBoxStructArray.prototype.bytesPerElement = 24;
CollisionBoxStructArray.prototype._usedTypes = ["Uint8", "Int16", "Uint32", "Uint16"];
CollisionBoxStructArray.prototype.StructType = CollisionBoxStruct;


register('CollisionBoxStructArray', CollisionBoxStructArray);

module.exports = CollisionBoxStructArray;
