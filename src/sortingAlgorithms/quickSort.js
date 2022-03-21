export function getQuickSortAnimations(
  mainArray,
  startIdx,
  endIdx,
  animations
) {
  if (mainArray.startIdx <= 1) return mainArray;
  if (mainArray.length > 1) {
    let index = partition(mainArray, startIdx, endIdx, animations); //index returned from partition
    if (startIdx < index - 1) {
      //more elements on the left side of the pivot
      getQuickSortAnimations(mainArray, startIdx, index - 1, animations);
    }
    if (index < endIdx) {
      //more elements on the right side of the pivot
      getQuickSortAnimations(mainArray, index, endIdx, animations);
    }
  }
  return mainArray;
}
function partition(mainArray, startIdx, endIdx, animations) {
  let pivotIdx = startIdx;
  let i = startIdx;
  let j = endIdx;
  while (i <= j) {
    while (mainArray[i] < mainArray[pivotIdx]) {
      i++;
    }
    while (mainArray[j] > mainArray[pivotIdx]) {
      j--;
    }

    if (i <= j) {
      swap(mainArray, i, j); //swapping two elements
      animations.push([i, j, mainArray[i], mainArray[j]]);
      animations.push([i, j, mainArray[i], mainArray[j]]);
      animations.push([i, j, mainArray[i], mainArray[j]]);
      i++;
      j--;
    }
  }
  return i;
}
export function swap(items = [], leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
