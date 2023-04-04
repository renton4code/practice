function countSwaps(a) {
  let res = 0;
  const n = a.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      console.log("iter", a, a[j]);
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        swap(a, j, j + 1);
      }
    }
  }

  function swap(a, indexOne, indexTwo) {
    const temp = a[indexOne];
    a[indexOne] = a[indexTwo];
    a[indexTwo] = temp;
    res += 1;
  }

  console.log(`Array is sorted in ${res} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
}

countSwaps([3, 2, 1, 0]);
