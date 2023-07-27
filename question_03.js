function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] < nums[mid + 1]) {
        // The peak element must be on the right side
        left = mid + 1;
      } else {
        // The peak element must be on the left side or could be the mid element
        right = mid;
      }
    }
  
    // At this point, left and right will be pointing to the same element, which is a peak element
    return left;
  }