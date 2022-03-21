import { swap } from "./quickSort";

export function getSelectionSortAnimations(mainArray) {
  const animations = [];
  let pos;
  let i, j;
  for (i = 0; i < mainArray.length - 1; i++) {
    pos = i;
    for (j = i + 1; j < mainArray.length; j++) {
      if (mainArray[j] < mainArray[pos]) {
        pos = j;
      }
    }
    swap(mainArray, i, pos);
    animations.push([i, pos, mainArray[i], mainArray[pos]]);
    animations.push([i, pos, mainArray[i], mainArray[pos]]);
    animations.push([i, pos, mainArray[i], mainArray[pos]]);
  }
  return animations;
}
