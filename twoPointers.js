/**
 * Opposite Direction Pointers

    Used when:

    * ARRAY IS SORTED

    * Looking for a pair

    * Palindrome problems
*/
function findTwoValues(_data, _target) {
    var wereFound = false;
    var size = _data.length;
    var sum = 0;
    var left = 0;
    var right = size - 1;
    while (left < right) {
        sum = _data[left] + _data[right];
        if (sum === _target) {
            wereFound = true;
            return wereFound;
        }
        if (sum > _target) {
            right--;
        }
        else {
            left++;
        }
    }
    return wereFound;
}
function isPalindrome(_str) {
    var response = true;
    var left = 0;
    var right = _str.length - 1;
    while (left < right) {
        if (_str[left] === _str[right]) {
            left++;
            right--;
        }
        else {
            response = false;
            break;
        }
    }
    return response;
}
/**
 * Slow and Fast Pointers

    Used for:

    * Detect cycle in linked list

    * Remove duplicates (SORTED)

    * Partition arrays
*/
function removeDuplicates(arr) {
    var slow = 0;
    for (var fast = 1; fast < arr.length; fast++) {
        if (arr[fast] !== arr[slow]) {
            slow++;
            arr[slow] = arr[fast];
        }
    }
    arr.length = slow + 1;
    console.log("remove duplicates: ", arr);
}
/*
Sliding Window (Advanced Two Pointers)

Used for:

    * Subarray problems

    * Longest substring

    * Max sum window
*/
function maxSubarraySum(arr, k) {
    var windowSum = 0;
    var maxSum = 0;
    // First window
    for (var i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    // Slide the window
    for (var i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    console.log("MAX: ", maxSum);
    return maxSum;
}
// main 
var numbers = [1, 2, 3, 3, 6, 6];
console.log("------------Oposite directions--------------");
console.log("find numbers that have an specific sum");
var result = findTwoValues(numbers, 11);
console.log("the numbers were found: ", result);
console.log("PALINDROME");
var res = isPalindrome("level");
console.log("Is palindrome? ", res);
console.log("-----------fast and slow pointers---------------");
console.log("removing duplicates");
removeDuplicates(numbers);
console.log("-----------sliding window---------------");
console.log("max value of subarray k");
maxSubarraySum(numbers, 2);
