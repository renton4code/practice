function activityNotifications(expenditure, d) {
  if (expenditure.length < d) {
    return 0;
  }

  let i = 0;
  let res = 0;

  let window = [...expenditure.slice(0, d)].sort((a, b) => a - b);
  const cutExp = expenditure.slice(d);

  while (i < cutExp.length) {
    if (cutExp[i] >= median(window) * 2) {
      res += 1;
    }
    window = adjustWindow(window, cutExp[i], expenditure[i]);
    i++;
  }

  function adjustWindow(window, elemToAdd, elemToRemove) {
    const indexR = binarySearch(window, 0, window.length - 1, elemToRemove);
    window.splice(indexR, 1);

    const indexI = binarySearch(window, 0, window.length - 1, elemToAdd);
    window.splice(indexI, 0, elemToAdd);

    return window;
  }

  function binarySearch(arr, l, r, x) {
    if (r >= l) {
      let mid = l + Math.floor((r - l) / 2);

      if (arr[mid] === x) return mid;

      if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);

      return binarySearch(arr, mid + 1, r, x);
    }

    return -1;
  }

  function median(window) {
    if (window.length % 2 !== 0) {
      return window[Math.floor(window.length / 2)];
    } else {
      return (window[window.length / 2] + window[window.length / 2 - 1]) / 2;
    }
  }

  return res;
}
