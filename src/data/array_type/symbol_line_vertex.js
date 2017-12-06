// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

/* eslint-disable camelcase */

const {Struct, StructArray} = require('../../util/struct_array');
const StructArrayLayout = require('./struct_array_layout_1_3i');
const {register} = require('../../util/web_worker_transfer');


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

class SymbolLineVertexStructArray extends StructArrayLayout {
    getx(index: number) { return this.int16[index * 3 + 0]; }
    gety(index: number) { return this.int16[index * 3 + 1]; }
    gettileUnitDistanceFromAnchor(index: number) { return this.int16[index * 3 + 2]; }
}

(SymbolLineVertexStructArray: any).serialize = StructArray.serialize;

SymbolLineVertexStructArray.prototype.members = [{"name":"x", "type":"Int16", "components":1, "offset":0, "size":2, "view":"int16"}, {"name":"y", "type":"Int16", "components":1, "offset":2, "size":2, "view":"int16"}, {"name":"tileUnitDistanceFromAnchor", "type":"Int16", "components":1, "offset":4, "size":2, "view":"int16"}];
SymbolLineVertexStructArray.prototype.StructType = SymbolLineVertexStruct;

register('SymbolLineVertexStructArray', SymbolLineVertexStructArray);

module.exports = SymbolLineVertexStructArray;
