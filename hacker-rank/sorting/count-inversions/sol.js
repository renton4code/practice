function countInversions(arr) {
  let res = 0;

  function merge(left, right) {
    const merged = [];
    let rc = 0;
    let lc = 0;
    while (left[lc] !== undefined || right[rc] !== undefined) {
      while(right[rc] !== undefined && left[lc] > right[rc]) {
        merged.push(right[rc]);
        rc += 1;
        res += left.length - lc;
      }
      while(left[lc] !== undefined && right[rc] >= left[lc]) {
        merged.push(left[lc])
        lc += 1;
      }
      if (left[lc] === undefined) {
        merged.splice(merged.length, null, ...right.slice(rc))
        break;
      }
      if (right[rc] === undefined) {
        merged.splice(merged.length, null, ...left.slice(lc))
        break;
      }
    }
    return merged;
  }

  let unmerged = arr;

  while (unmerged.length > 1) {
    const nextLayer = [];
    for(let i = 0; i < unmerged.length; i += 2) {
      const left = typeof unmerged[i] === 'number' ? [unmerged[i]] : unmerged[i];
      const right = typeof unmerged[i+1] === 'number' ? [unmerged[i+1]] : unmerged[i+1];
      if (!left || !right) {
        if (left) nextLayer.push(left);
        if(right) nextLayer.push(right);
        break;
      }
      nextLayer.push(merge(left, right));
    }
    unmerged = nextLayer;
  }

  return res;
}












