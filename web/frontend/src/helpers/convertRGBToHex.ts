type RGBA = {
  r?: number;
  g?: number;
  b?: number;
  a?: number;
};

type RCEvent = {
  rgb: RGBA;
};

function RGBAToHexA(rgba: RGBA) {
  let { r, g, b, a } = rgba;

  let _r = r?.toString(16);
  let _g = g?.toString(16);
  let _b = b?.toString(16);
  let _a = a ? Math.round(a * 255)?.toString(16) : undefined;

  if (_r?.length == 1) _r = "0" + _r;
  if (_g?.length == 1) _g = "0" + _g;
  if (_b?.length == 1) _b = "0" + _b;
  if (_a?.length == 1) _a = "0" + _a;

  return "#" + _r + _g + _b + _a;
}

export function convertRGBToHex(reactColorEvent: RCEvent) {
  const { rgb } = reactColorEvent;

  return RGBAToHexA(rgb);
}
