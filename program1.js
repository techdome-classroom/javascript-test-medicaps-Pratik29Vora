function longestSubstring(s) {
  // Implementation of longestSubstring function
  let maxLength = 0;
  let currentLength = 0;
  let visited = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (visited[char] == null) {
      currentLength++;
    } else {
      currentLength = Math.min(i - visited[char], currentLength + 1);
    }
    maxLength = Math.max(maxLength, currentLength);
    visited[char] = i;
  }

  return maxLength;
}

module.exports = { longestSubstring };
