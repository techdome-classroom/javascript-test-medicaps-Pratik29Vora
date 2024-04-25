function smallestMissingPositiveInteger(nums) {

  
  let n = nums.length;

  let j = 0;
  for (let i = 0; i < n; i++) {
      if (nums[i] <= 0) {
          // Swap non-positive integers to the left
          let temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;
          j++;
      }
  }

  // We will work only with positive integers from index j onwards
  for (let i = j; i < n; i++) {
      let index = Math.abs(nums[i]) - 1 + j;
      if (index < n && nums[index] > 0) {
          nums[index] = -nums[index];
      }
  }

  // Find the smallest missing positive integer
  for (let i = j; i < n; i++) {
      if (nums[i] > 0) {
          return i - j + 1;
      }
  }

  return n - j + 1;

}

module.exports = smallestMissingPositiveInteger;
