// @flow

export type CollisionBox = {
    anchorPoint: Point,
    anchorPointX: number,
    anchorPointY: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    featureIndex: number,
    sourceLayerIndex: number,
    bucketIndex: number,
    radius: number,
    signedDistanceFromAnchor: number
};

/**
 * A collision box represents an area of the map that that is covered by a
 * label. CollisionFeature uses one or more of these collision boxes to
 * represent all the area covered by a single label. They are used to
 * prevent collisions between labels.
 *
 * Line labels are represented by a set of these boxes spaced out along the
 * line. When we calculate collision geometries, we use the circle inscribed
 * in the box, rather than the box itself. This makes collision detection more
 * stable during rotation. The circle geometry is based solely on the line
 * geometry and the total length of the label -- individual glyph shapings
 * doesn't factor into collision detection.
 *
 * @class CollisionBoxArray
 * @private
 */
module.exports = require('../data/array_type/collision_box');
