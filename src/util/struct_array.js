// @flow

// Note: all "sizes" are measured in bytes

const assert = require('assert');

import type {Transferable} from '../types/transferable';

const viewTypes = {
    'Int8': Int8Array,
    'Uint8': Uint8Array,
    'Int16': Int16Array,
    'Uint16': Uint16Array,
    'Int32': Int32Array,
    'Uint32': Uint32Array,
    'Float32': Float32Array
};

export type ViewType = $Keys<typeof viewTypes>;

/**
 * @typedef {Object} StructMember
 * @private
 * @property {string} name
 * @property {string} type
 * @property {number} components
 */

/**
 * @private
 */
class Struct {
    _pos1: number;
    _pos2: number;
    _pos4: number;
    _pos8: number;
    _structArray: StructArray;

    // The following properties are defined on the prototype of sub classes.
    size: number;

    /**
     * @param {StructArray} structArray The StructArray the struct is stored in
     * @param {number} index The index of the struct in the StructArray.
     * @private
     */
    constructor(structArray: StructArray, index: number) {
        this._structArray = structArray;
        this._pos1 = index * this.size;
        this._pos2 = this._pos1 / 2;
        this._pos4 = this._pos1 / 4;
        this._pos8 = this._pos1 / 8;
    }
}

const DEFAULT_CAPACITY = 128;
const RESIZE_MULTIPLIER = 5;

export type StructArrayMember = {
    name: string,
    type: ViewType,
    components: number,
    offset: number
};

export type SerializedStructArray = {
    length: number,
    arrayBuffer: ArrayBuffer
};

/**
 * The StructArray class is inherited by the custom StructArrayType classes created with
 * `createStructArrayType(members, options)`.
 * @private
 */
class StructArray {
    capacity: number;
    length: number;
    isTransferred: boolean;
    arrayBuffer: ArrayBuffer;
    +int8: ?Int8Array;
    uint8: Uint8Array;
    +uint8clamped: ?Uint8ClampedArray;
    +int16: ?Int16Array;
    +uint16: ?Uint16Array;
    +int32: ?Int32Array;
    +uint32: ?Uint32Array;
    +float32: ?Float32Array;
    +float64: ?Float64Array;

    // The following properties are defined on the prototype.
    members: Array<StructArrayMember>;
    StructType: typeof Struct;
    bytesPerElement: number;
    _usedTypes: Array<ViewType>;
    +emplaceBack: Function;

    constructor() {
        this.isTransferred = false;
        this.capacity = -1;
        this.resize(0);
    }

    /**
     * Serialize a StructArray instance.  Serializes both the raw data and the
     * metadata needed to reconstruct the StructArray base class during
     * deserialization.
     */
    static serialize(array: StructArray, transferables?: Array<Transferable>): SerializedStructArray {
        assert(!array.isTransferred);

        array._trim();

        if (transferables) {
            array.isTransferred = true;
            transferables.push(array.arrayBuffer);
        }

        return {
            length: array.length,
            arrayBuffer: array.arrayBuffer,
        };
    }

    /**
     * Return the Struct at the given location in the array.
     * @param {number} index The index of the element.
     */
    get(index: number) {
        assert(!this.isTransferred);
        return new this.StructType(this, index);
    }

    /**
     * Resize the array to discard unused capacity.
     */
    _trim() {
        if (this.length !== this.capacity) {
            this.capacity = this.length;
            this.arrayBuffer = this.arrayBuffer.slice(0, this.length * this.bytesPerElement);
            this._refreshViews();
        }
    }

    /**
     * Resets the the length of the array to 0 without de-allocating capcacity.
     */
    clear() {
        this.length = 0;
    }

    /**
     * Resize the array.
     * If `n` is greater than the current length then additional elements with undefined values are added.
     * If `n` is less than the current length then the array will be reduced to the first `n` elements.
     * @param {number} n The new size of the array.
     */
    resize(n: number) {
        assert(!this.isTransferred);
        this.reserve(n);
        this.length = n;
    }

    /**
     * Indicate a planned increase in size, so that any necessary allocation may
     * be done once, ahead of time.
     * @param {number} n The expected size of the array.
     */
    reserve(n: number) {
        if (n > this.capacity) {
            this.capacity = Math.max(n, Math.floor(this.capacity * RESIZE_MULTIPLIER), DEFAULT_CAPACITY);
            this.arrayBuffer = new ArrayBuffer(this.capacity * this.bytesPerElement);

            const oldUint8Array = this.uint8;
            this._refreshViews();
            if (oldUint8Array) this.uint8.set(oldUint8Array);
        }
    }

    /**
     * Create TypedArray views for the current ArrayBuffer.
     */
    _refreshViews() {
        for (const type of this._usedTypes) {
            // $FlowFixMe
            this[getArrayViewName(type)] = new viewTypes[type](this.arrayBuffer);
        }
    }

    /**
     * Output the `StructArray` between indices `startIndex` and `endIndex` as an array of `StructTypes` to enable sorting
     * @param {number} startIndex
     * @param {number} endIndex
     */
    toArray(startIndex: number, endIndex: number) {
        assert(!this.isTransferred);

        const array = [];

        for (let i = startIndex; i < endIndex; i++) {
            const struct = this.get(i);
            array.push(struct);
        }

        return array;
    }
}

function getArrayViewName(type: ViewType): string {
    return type.toLowerCase();
}

module.exports.StructArray = StructArray;
module.exports.Struct = Struct;
