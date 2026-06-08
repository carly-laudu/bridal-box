export function pad(t) { return t && t.density === "relaxed" ? 132 : 108; }
export function headlineTransform(t) { return t && t.headline === "title" ? "none" : "uppercase"; }
export function moodFilter(t) { return t && t.colourPhotos ? "none" : "grayscale(1) contrast(1.05)"; }
