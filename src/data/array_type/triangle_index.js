// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_1_3ui');
const {register} = require('../../util/web_worker_transfer');


class TriangleIndexStruct extends Struct {
    vertices0: number;
    vertices1: number;
    vertices2: number;
}

(Object.defineProperty: any)(
    TriangleIndexStruct.prototype,
    'vertices0',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 0]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    TriangleIndexStruct.prototype,
    'vertices1',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 1]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 1] = x; }
    }
);
(Object.defineProperty: any)(
    TriangleIndexStruct.prototype,
    'vertices2',
    {
        get: function () { return this._structArray.uint16[this._pos2 + 2]; },
        set: function (x) { this._structArray.uint16[this._pos2 + 2] = x; }
    }
);
TriangleIndexStruct.prototype.size = 6;

class TriangleIndexStructArray extends StructArrayLayout {
    getvertices0(index: number) { return this.uint16[index * 3 + 0]; }
    getvertices1(index: number) { return this.uint16[index * 3 + 1]; }
    getvertices2(index: number) { return this.uint16[index * 3 + 2]; }
}

(TriangleIndexStructArray: any).serialize = StructArray.serialize;

TriangleIndexStructArray.prototype.members = [{"name":"vertices", "type":"Uint16", "components":3, "offset":0, "size":2, "view":"uint16"}];
TriangleIndexStructArray.prototype.StructType = TriangleIndexStruct;

register('TriangleIndexStructArray', TriangleIndexStructArray);

module.exports = TriangleIndexStructArray;
