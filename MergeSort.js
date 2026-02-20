function mergeSort(_data, _helper, _low, _high) {
    if (_low < _high) {
        var middle = Math.floor((_low + _high) / 2);
        mergeSort(_data, _helper, _low, middle); // sort left half
        mergeSort(_data, _helper, middle + 1, _high); // sort right half
        merge(_data, _helper, _low, middle, _high); // merge them
    }
}
function merge(_data, _helper, _low, _middle, _high) {
    for (var i = _low; i <= _high; i++) {
        _helper[i] = _data[i];
    }
    var helperLeft = _low;
    var helperRight = _middle + 1;
    var current = _low;
    while (helperLeft <= _middle && helperRight <= _high) {
        if (_helper[helperLeft] <= _helper[helperRight]) {
            _data[current] = _helper[helperLeft];
            helperLeft++;
        }
        else {
            _data[current] = _helper[helperRight];
            helperRight++;
        }
        current++;
    }
    var remaining = _middle - helperLeft;
    for (var i = 0; i <= remaining; i++) {
        _data[current + i] = _helper[helperLeft + i];
    }
}
// main
var numbers = [4, 2, 1, 6, 7, 5, 3];
var helper = new Array(numbers.length);
var low = 0;
var high = numbers.length;
console.log("helper", helper);
mergeSort(numbers, helper, low, high - 1);
console.log("Sorted data");
console.log(numbers);
