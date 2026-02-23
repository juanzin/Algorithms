function countingSort(arr: any[], exp: number) {
    let n = arr.length;
    let output = new Array(n);
    let count = new Array(10);

    for(let i = 0; i < 10; i++) {
        count[i] = 0;
    }
    // Count occurrences of each digit
    for (let i = 0; i < n; i++) {
        let digit = Math.floor(arr[i] / exp) % 10;
        count[digit]++;
    }
    console.log("count before to cumulative");
    console.log(count);
    // Convert count to cumulative count
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    console.log("count after to cumulative");
    console.log(count);
    // Build output array (IMPORTANT: go backwards for stability)
    for (let i = n - 1; i >= 0; i--) {
        let digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // Copy output back into original array
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr: any[]) {
    let max = Math.max(...arr);
    let exp = 1;

    while (Math.floor(max / exp) > 0) {
        countingSort(arr, exp);
        exp *= 10;
    }

    return arr;
}

// main
// let numbers = [170, 45, 75, 90, 802, 24, 2, 66];
let numbers = [170, 45];
console.log(radixSort(numbers));