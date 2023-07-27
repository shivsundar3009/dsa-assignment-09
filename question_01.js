function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      // Since the array is 1-indexed, we add 1 to the indices before returning.
      return [left + 1, right + 1];
    } else if (sum < target) {
      // If the sum is less than the target, move the left pointer to the right to increase the sum.
      left++;
    } else {
      // If the sum is greater than the target, move the right pointer to the left to decrease the sum.
      right--;
    }
  }

  // If no solution is found, return an empty array or throw an error, depending on the problem requirements.
  return [];
}