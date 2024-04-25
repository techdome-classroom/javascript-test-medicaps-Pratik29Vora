function longestSubstring(s) {
    // Implementation of longestSubstring function
    let start = 0;
  let end = 0;
  let maxLength = 0;
  let seen = {};

  while (end < s.length) {
    const currentChar = str[end];
    if (seen[currentChar]) {
      start = Math.max(start, seen[currentChar] + 1);
    }

    seen[currentChar] = end;
    maxLength = Math.max(maxLength, end - start + 1);

    end++;
  }

  return str.substring(start, end);
}

module.exports = { longestSubstring };


