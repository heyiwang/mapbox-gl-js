// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_4_6i');
const {register} = require('../../util/web_worker_transfer');


class FillExtrusionLayoutVertexStruct extends Struct {
    a_pos0: number;
    a_pos1: number;
    a_normal0: number;
    a_normal1: number;
    a_normal2: number;
    a_edgedistance: number;
}

(Object.defineProperty: any)(
    FillExtrusionLayoutVertexStruct.prototype,
    'a_pos0',
    {
        get: function () { return this._structArray.int16[this._pos2 + 0]; },
        set: function (x) { this._structArray.int16[this._pos2 + 0] = x; }
    }
);
(Object.defineProperty: any)(
    FillExtrusionLayoutVertexStruct.prototype,
    'a_pos1',
    {
        get: function () { return this._structArray.int16[this._pos2 + 1]; },
        set: function (x) { this._structArray.int16[this._pos2 + 1] = x; }
    }
);
(Object.defineProperty: any)(
    FillExtrusionLayoutVertexStruct.prototype,
    'a_normal0',
    {
        get: function () { return this._structArray.int16[this._pos2 + 2]; },
        set: function (x) { this._structArray.int16[this._pos2 + 2] = x; }
    }
);
(Object.defineProperty: any)(
    FillExtrusionLayoutVertexStruct.prototype,
    'a_normal1',
    {
        get: function () { return this._structArray.int16[this._pos2 + 3]; },
        set: function (x) { this._structArray.int16[this._pos2 + 3] = x; }
    }
);
(Object.defineProperty: any)(
    FillExtrusionLayoutVertexStruct.prototype,
    'a_normal2',
    {
        get: function () { return this._structArray.int16[this._pos2 + 4]; },
        set: function (x) { this._structArray.int16[this._pos2 + 4] = x; }
    }
);
(Object.defineProperty: any)(
    FillExtrusionLayoutVertexStruct.prototype,
    'a_edgedistance',
    {
        get: function () { return this._structArray.int16[this._pos2 + 6]; },
        set: function (x) { this._structArray.int16[this._pos2 + 6] = x; }
    }
);
FillExtrusionLayoutVertexStruct.prototype.size = 16;

class FillExtrusionLayoutVertexStructArray extends StructArrayLayout {
    geta_pos0(index: number) { return this.int16[index * 8 + 0]; }
    geta_pos1(index: number) { return this.int16[index * 8 + 1]; }
    geta_normal0(index: number) { return this.int16[index * 8 + 2]; }
    geta_normal1(index: number) { return this.int16[index * 8 + 3]; }
    geta_normal2(index: number) { return this.int16[index * 8 + 4]; }
    geta_edgedistance(index: number) { return this.int16[index * 8 + 6]; }
}

(FillExtrusionLayoutVertexStructArray: any).serialize = StructArray.serialize;

FillExtrusionLayoutVertexStructArray.prototype.members = [{"name":"a_pos", "type":"Int16", "components":2, "offset":0, "size":2, "view":"int16"}, {"name":"a_normal", "type":"Int16", "components":3, "offset":4, "size":2, "view":"int16"}, {"name":"a_edgedistance", "type":"Int16", "components":1, "offset":12, "size":2, "view":"int16"}];
FillExtrusionLayoutVertexStructArray.prototype.StructType = FillExtrusionLayoutVertexStruct;

register('FillExtrusionLayoutVertexStructArray', FillExtrusionLayoutVertexStructArray);

module.exports = FillExtrusionLayoutVertexStructArray;
