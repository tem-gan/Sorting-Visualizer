import { swap } from "./quickSort";

export function getBubbleSortAnimations(mainArray) {
  const animations = [];
  if (mainArray.startIdx <= 1) return mainArray;
  let sorted = false;
  let counter = 0;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < mainArray.length - 1 - counter; i++) {
      if (mainArray[i] > mainArray[i + 1]) {
        swap(mainArray, i, i + 1);
        sorted = false;
        animations.push([i, i + 1, mainArray[i], mainArray[i + 1]]);
        animations.push([i, i + 1, mainArray[i], mainArray[i + 1]]);
        animations.push([i, i + 1, mainArray[i], mainArray[i + 1]]);
      }
    }
    counter++;
  }
  return animations;
}
