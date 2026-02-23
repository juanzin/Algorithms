function countingSort(arr, exp) {
    var n = arr.length;
    var output = new Array(n);
    var count = new Array(10);
    for (var i = 0; i < 10; i++) {
        count[i] = 0;
    }
    // Count occurrences of each digit
    for (var i = 0; i < n; i++) {
        var digit = Math.floor(arr[i] / exp) % 10;
        count[digit]++;
    }
    console.log("count before to cumulative");
    console.log(count);
    // Convert count to cumulative count
    for (var i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    console.log("count after to cumulative");
    console.log(count);
    // Build output array (IMPORTANT: go backwards for stability)
    for (var i = n - 1; i >= 0; i--) {
        var digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }
    // Copy output back into original array
    for (var i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}
function radixSort(arr) {
    var max = Math.max.apply(Math, arr);
    var exp = 1;
    while (Math.floor(max / exp) > 0) {
        countingSort(arr, exp);
        exp *= 10;
    }
    return arr;
}
// main
// let numbers = [170, 45, 75, 90, 802, 24, 2, 66];
var numbers = [170, 45];
console.log(radixSort(numbers));
