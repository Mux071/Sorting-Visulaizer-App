const bubbleSort = (req, res) => {
    let array = req.body.array;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    res.json(array);
  };
  
  const selectionSort = (req, res) => {
    let array = req.body.array;
    for (let i = 0; i < array.length; i++) {
      let min = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) min = j;
      }
      [array[i], array[min]] = [array[min], array[i]];
    }
    res.json(array);
  };
  
  const insertionSort = (req, res) => {
    let array = req.body.array;
    for (let i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j = j - 1;
      }
      array[j + 1] = key;
    }
    res.json(array);
  };
  
  const mergeSortHelper = (array) => {
    if (array.length <= 1) return array;
    const mid = Math.floor(array.length / 2);
    const left = mergeSortHelper(array.slice(0, mid));
    const right = mergeSortHelper(array.slice(mid));
    return merge(left, right);
  };
  
  const merge = (left, right) => {
    let result = [], leftIndex = 0, rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) result.push(left[leftIndex++]);
      else result.push(right[rightIndex++]);
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  };
  
  const mergeSort = (req, res) => {
    const array = req.body.array;
    res.json(mergeSortHelper(array));
  };
  
  const quickSortHelper = (array) => {
    if (array.length <= 1) return array;
    const pivot = array[array.length - 1];
    const left = [], right = [];
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) left.push(array[i]);
      else right.push(array[i]);
    }
    return [...quickSortHelper(left), pivot, ...quickSortHelper(right)];
  };
  
  const quickSort = (req, res) => {
    const array = req.body.array;
    res.json(quickSortHelper(array));
  };
  
  const heapify = (array, n, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < n && array[left] > array[largest]) largest = left;
    if (right < n && array[right] > array[largest]) largest = right;
    if (largest !== i) {
      [array[i], array[largest]] = [array[largest], array[i]];
      heapify(array, n, largest);
    }
  };
  
  const heapSort = (req, res) => {
    let array = req.body.array;
    const n = array.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(array, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
      [array[0], array[i]] = [array[i], array[0]];
      heapify(array, i, 0);
    }
    res.json(array);
  };
  
  module.exports = { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort, heapSort };
