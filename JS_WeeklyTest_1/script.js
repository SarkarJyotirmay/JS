//! String Reversal:
let str = "abcdefghij";

function reverseGivenString(s) {
  let ans = "";
  for (let i = s.length-1; i >= 0; i--) {
    ans = ans + s.charAt(i);
  }
  return ans;
}

// let answer = reverseGivenString(str);
// console.log(answer);

//! Anagram Check:
let original = "anagram";
let target1 = "nagaram";
let target2 = "xyzeng";

function isAnagram(s, t) {
  if (s.length != t.length) return false;
  let map = new Map();
  for (let i = 0; i < s; i++) {
    if (map.get(s.charAt(i))) {
      map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
    } else {
      map.set(s.charAt(i), 1);
    }
  }
  for (let i = 0; i < t; i++) {
    if (map.get(t.charAt(i))) {
      map.set(t.charAt(i), map.get(t.charAt(i)) - 1);
    } else {
      map.set(t.charAt(i), 1);
    }
  }
  for (let val of map.values()) {
    if (val != 0) {
      return false;
    }
  }

  return true;
}
// console.log( isAnagram(original, target1));
// console.log( isAnagram(original, target2));

//! Array Intersection:
let scores1 = [1, 2, 3, 4];
let scores2 = [3, 4];
let scores3 = [2, 3, 4, 5, 6];

function interSection(arr1, arr2) {
  let ans = arr1.filter((val) => {
    return arr2.includes(val);
  });
  return ans;
}
// console.log(interSection(scores1, scores2));
// console.log(interSection(scores1, scores3));

//! String Palindrome:
let targetStr1 = "a man, a plan, a canal – panama";
let targetStr2 = "not a palindrome";

function isPalindrome(str) {
  let left = 0,
    right = str.length;
  while (left < right) {
    if(!(isLetter(str[left]))){
        left++;
    }
    else if(!(isLetter(str[right]))){
        right--;
    }
    else{
        if(str[left] != str[right]){
            return false;
        }
        else{
            left++;
            right--;
        }
    }
  }
  return true;
}
function isLetter(ch){
    if (ch == undefined || ch == null) return false;

    if((ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) || (ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122)){
        return true;
    }
    return false;
}
// console.log(isPalindrome(targetStr1));
// console.log(isPalindrome(targetStr2));

//! Array Rotation:
let nums = [1,2,3,4,5];

function rotate(arr, k){
    let n = arr.length;
    k = k%n;
    reverse(arr, 0, n-1);
    reverse(arr,0,k-1);
    reverse(arr, k, n-1)
}

function reverse(arr, start, end){
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// rotate(nums, 2);
// console.log(nums);

//! String Compression: 
let example = "aabcccccaaa";

function compressor(str){
    let ans = "";
    let count = 1;

    for(let i = 1; i < str.length; i++){
        if(str[i] == str[i-1]){
            count++;
        }
        else{
            ans +=   str[i-1] + count;
            count = 1;
        }
    }
    ans +=   str[str.length-1] + count;;

    return ans;
}

// console.log(compressor(example));

//! Array Sum:
let prices = [12, 15, 32, 50, 122]
function targetSum(arr, target){
    let left = 0, right = arr.length - 1;
    while(left < right){
        if(arr[left] + arr[right] == target){
            return [arr[left], arr[right]]
        }
        else if(arr[left] + arr[right] > target){
            right--
        }
        else{
            left++;
        }
    }
    return "No possible matches";
}

// console.log(targetSum(prices, 27));

//! Longest Substring Without Repeating Characters:
function findLongest(s) {
  let maxLength = 0;
  let start = 0;
  const map = new Map();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    
    if (map.has(char) && map.get(char) >= start) {
      start = map.get(char) + 1;
    }
    
    map.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example usage
console.log(findLongest("abcababdef"));




 





