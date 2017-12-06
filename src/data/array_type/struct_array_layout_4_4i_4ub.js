// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

const {StructArray} = require('../../util/struct_array');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[4]
 * [8]: Uint8[4]
 *
 * @private
 */
class StructArrayLayout44i4ub extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number, v6: number, v7: number) {
        const i = this.length;
        this.resize(this.length + 1);
        const o2 = i * 6;
        const o1 = i * 12;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        this.uint8[o1 + 8] = v4;
        this.uint8[o1 + 9] = v5;
        this.uint8[o1 + 10] = v6;
        this.uint8[o1 + 11] = v7;
        return i;
    }

}

StructArrayLayout44i4ub.prototype.bytesPerElement = 12;

module.exports = StructArrayLayout44i4ub;
