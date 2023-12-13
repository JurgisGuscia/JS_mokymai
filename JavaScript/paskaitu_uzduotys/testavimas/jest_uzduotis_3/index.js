function findMax(arr) {
  if (arr.length > 0) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      arr[i] > max && (max = arr[i]);
    }
    return max;
  } else {
    return 0;
  }
}

module.exports = findMax;
