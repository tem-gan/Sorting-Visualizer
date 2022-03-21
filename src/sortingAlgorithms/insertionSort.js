import { swap } from "./quickSort";

export function getInsertionSortAnimations(mainArray) {
  const animations = [];
  let n = mainArray.length;
  for (let i = 0; i < n; i++) {
    let j = i;
    while (j >= 0 && mainArray[j - 1] > mainArray[j]) {
      swap(mainArray, j, j - 1);
      animations.push([j, j - 1, mainArray[j], mainArray[j - 1]]);
      animations.push([j, j - 1, mainArray[j], mainArray[j - 1]]);
      animations.push([j, j - 1, mainArray[j], mainArray[j - 1]]);
      j = j - 1;
    }
  }
  return animations;
}
