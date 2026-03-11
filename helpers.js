export function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

export function capitalize(str) {
    if (str.length === 0) return str;
    return str[0].toUpperCase() + str.slice(1);
}

export const VERSION = "1.0.0";