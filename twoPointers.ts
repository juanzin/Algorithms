/**
 * Opposite Direction Pointers

    Used when:

    * ARRAY IS SORTED

    * Looking for a pair

    * Palindrome problems 
*/

function findTwoValues(_data: number[], _target: number): boolean {
    let wereFound: boolean = false;
    let size = _data.length;
    let sum: number = 0;
    let left = 0;
    let right = size - 1;

    while(left < right) {
        sum = _data[left]! + _data[right]!;
        if(sum === _target) {
            wereFound = true;
            return wereFound;
        }

        if(sum > _target) {
            right--;
        } else {
            left++;
        }
    }

    return wereFound;
}

function isPalindrome(_str: string): boolean {
    let response: boolean = true;
    let left: number = 0;
    let right: number = _str.length -1;

    while(left < right) {
        if(_str[left] === _str[right]) {
            left++;
            right--;
        } else {
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

function removeDuplicates(arr: any[]) {
    let slow = 0;

    for (let fast = 1; fast < arr.length; fast++) {
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

function maxSubarraySum(arr: number[], k: number) {
    let windowSum = 0;
    let maxSum = 0;

    // First window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i]!;
    }

    maxSum = windowSum;

    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i]! - arr[i - k]!;
        maxSum = Math.max(maxSum, windowSum);
    }
    console.log("MAX: ", maxSum);
    return maxSum;
}


// main 
let numbers = [1,2,3,3,6,6];
console.log("-----------Oposite directions--------------");
console.log("find numbers that have an specific sum");
let result = findTwoValues(numbers, 11);
console.log("the numbers were found: ", result);
console.log("PALINDROME");
let res = isPalindrome("level");
console.log("Is palindrome? ", res);
console.log("-----------fast and slow pointers---------------");
console.log("removing duplicates");
removeDuplicates(numbers);
console.log("-----------sliding window---------------");
console.log("max value of subarray k");
maxSubarraySum(numbers, 2);