// eslint-disable-next-line @typescript-eslint/naming-convention
interface positiOnObj {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface elementsPosition {
  parentRect?: positiOnObj;
  childRect?: positiOnObj;
}

const getIfAnyElementIsOnArea = ({
  parentRect,
  childRect,
}: elementsPosition): boolean => {
  const isHorizontalyBound =
    parentRect!.left <= childRect!.left &&
    parentRect!.right >= childRect!.right;
  const isVerticalBound =
    parentRect!.top <= childRect!.top &&
    parentRect!.bottom >= childRect!.bottom;
  return !isHorizontalyBound || !isVerticalBound;
};

export default getIfAnyElementIsOnArea;
