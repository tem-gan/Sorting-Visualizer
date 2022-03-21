import { swap } from "./quickSort";

export function getHeapSortAnimations(mainArray) {
  const animations = [];
  let n = mainArray.length;

  // Build heap (rearrange array)
  for (let i = n / 2 - 1; i >= 0; i--) {
    heapify(mainArray, n, i);
  }

  // One by one extract an element from heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    swap(mainArray, 0, i);
    animations.push([0, i, mainArray[0], mainArray[i]]);
    animations.push([0, i, mainArray[0], mainArray[i]]);
    animations.push([0, i, mainArray[0], mainArray[i]]);

    // call max heapify on the reduced heap
    heapify(mainArray, i, 0);
  }
  return animations;
}
function heapify(arr = [], n, i) {
  let largest = i; // Initialize largest as root
  let l = 2 * i + 1; // left = 2*i + 1
  let r = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (l < n && arr[l] > arr[largest]) largest = l;

  // If right child is larger than largest so far
  if (r < n && arr[r] > arr[largest]) largest = r;

  // If largest is not root
  if (largest != i) {
    swap(arr, largest, i);
    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}
