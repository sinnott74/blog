/**
 * Clamps a value to between the Min & Max range
 * @param {Number} value
 * @param {Number} min
 * @param {Number} max
 */
export function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
}
