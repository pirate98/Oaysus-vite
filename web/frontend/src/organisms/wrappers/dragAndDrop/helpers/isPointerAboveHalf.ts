export function isPointerAboveHalf(
  element: any,
  mouseYPosition: number | undefined
) {
  if (!mouseYPosition) return;

  const clientRects = element.getClientRects();
  const elTop = clientRects[0].top;

  const elHeight = element.offsetHeight;

  // console.log(elTop, elHeight, pointerY);

  return mouseYPosition <= elTop + elHeight / 2;
}
