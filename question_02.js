
var searchRange = function(nums, target) {
    // Binary search to find the starting position
    function findStart(nums, target) {
      let left = 0;
      let right = nums.length - 1;
      let start = -1;
  
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] >= target) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
  
        if (nums[mid] === target) {
          start = mid;
        }
      }
  
      return start;
    }
  
    // Binary search to find the ending position
    function findEnd(nums, target) {
      let left = 0;
      let right = nums.length - 1;
      let end = -1;
  
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] <= target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
  
        if (nums[mid] === target) {
          end = mid;
        }
      }
  
      return end;
    }
  
    const start = findStart(nums, target);
    const end = findEnd(nums, target);
  
    return [start, end];
  };