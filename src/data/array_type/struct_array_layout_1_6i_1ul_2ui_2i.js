// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

const {StructArray} = require('../../util/struct_array');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[6]
 * [12]: Uint32[1]
 * [16]: Uint16[2]
 * [20]: Int16[2]
 *
 * @private
 */
class StructArrayLayout16i1ul2ui2i extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;
    uint32: Uint32Array;
    uint16: Uint16Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
        this.uint32 = new Uint32Array(this.arrayBuffer);
        this.uint16 = new Uint16Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number, v8: number, v9: number, v10: number) {
        const i = this.length;
        this.resize(this.length + 1);
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

}

StructArrayLayout16i1ul2ui2i.prototype.bytesPerElement = 24;

module.exports = StructArrayLayout16i1ul2ui2i;
