function longestSubstring(s) {
  // Implementation of longestSubstring function
  if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    let maxLength = 1;
    let currentLength = 1;
    let visited = {};

    for (let i = 1; i < s.length; i++) {
        let char = s[i];
        let prevIndex = visited[char];

        if (prevIndex == null || i - currentLength > prevIndex) {
            currentLength++;
        } else {
            maxLength = Math.max(maxLength, currentLength);
            currentLength = i - prevIndex;
        }
        visited[char] = i;
    }

    return Math.max(maxLength, currentLength);
}

module.exports = { longestSubstring };
