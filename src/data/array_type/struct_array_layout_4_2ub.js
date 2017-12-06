// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

const {StructArray} = require('../../util/struct_array');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint8[2]
 *
 * @private
 */
class StructArrayLayout42ub extends StructArray {
    uint8: Uint8Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number) {
        const i = this.length;
        this.resize(this.length + 1);
        const o1 = i * 4;
        this.uint8[o1 + 0] = v0;
        this.uint8[o1 + 1] = v1;
        return i;
    }

}

StructArrayLayout42ub.prototype.bytesPerElement = 4;

module.exports = StructArrayLayout42ub;
