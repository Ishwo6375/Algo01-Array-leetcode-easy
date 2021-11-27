// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.
// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

var reverseString = function(s) {
  //create a two pointer start and end//
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    //create a temporary variable temp set it equal to 1st index of string///
    let temp = s[start];
    //swap the first character of array to the last character of arrray//
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }
  return s;

}

reverseString(["h","e","l","l","o"]) // => 