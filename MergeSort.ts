function mergeSort(_data: number[], _helper: number[], _low: number, _high: number) {
    if(_low < _high) {
        let middle = Math.floor((_low + _high) / 2);
        mergeSort(_data, _helper, _low, middle); // sort left half
        mergeSort(_data, _helper, middle + 1, _high); // sort right half
        merge(_data, _helper, _low, middle, _high); // merge them
    }

}

function merge(_data: number[], _helper: number[], _low: number, _middle: number, _high: number) {
   for(let i = _low; i <= _high; i++) {
        _helper[i] = _data[i]!;
   }

   let helperLeft = _low;
   let helperRight = _middle + 1;
   let current = _low;

   while(helperLeft <= _middle && helperRight <= _high) {
        if(_helper[helperLeft]! <= _helper[helperRight]!) {
            _data[current] = _helper[helperLeft]!;
            helperLeft++;
        } else {
             _data[current] = _helper[helperRight]!;
             helperRight++;
        }
        current++;
   }


   let remaining = _middle - helperLeft;
   for(let i = 0; i <= remaining; i++) {
        _data[current + i] = _helper[helperLeft + i]!;
   }
}


// main

let numbers = [4,2,1,6,7,5,3];
let helper: number[] = new Array(numbers.length);
let low = 0;
let high = numbers.length;
console.log("helper", helper);
mergeSort(numbers, helper, low, high - 1);
console.log("Sorted data");
console.log(numbers);