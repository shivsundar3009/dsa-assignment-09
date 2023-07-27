function firstBadVersion(n) {
    let left = 1;
    let right = n;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      
      if (isBadVersion(mid)) {
        // If the middle version is bad, the first bad version is on the left side
        right = mid;
      } else {
        // If the middle version is not bad, the first bad version is on the right side
        left = mid + 1;
      }
    }
  
    return left;
  }