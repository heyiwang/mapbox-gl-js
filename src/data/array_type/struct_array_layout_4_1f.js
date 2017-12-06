// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow

const {StructArray} = require('../../util/struct_array');

/**
 * Implementation of the StructArray layout:
 * [0]: Float32[1]
 *
 * @private
 */
class StructArrayLayout41f extends StructArray {
    uint8: Uint8Array;
    float32: Float32Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    emplaceBack(v0: number) {
        const i = this.length;
        this.resize(this.length + 1);
        const o4 = i * 1;
        this.float32[o4 + 0] = v0;
        return i;
    }

}

StructArrayLayout41f.prototype.bytesPerElement = 4;

module.exports = StructArrayLayout41f;
