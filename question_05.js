function majorityElement(nums) {
    let majority = nums[0]; // Assume the first element as the majority candidate
    let count = 1; // Initialize the count of the majority candidate
  
    // Traverse the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
      if (count === 0) {
        // If count becomes 0, update the majority candidate to the current element
        majority = nums[i];
        count = 1;
      } else if (nums[i] === majority) {
        // If the current element is the same as the majority candidate, increment count
        count++;
      } else {
        // If the current element is different from the majority candidate, decrement count
        count--;
      }
    }
  
    return majority;
  }