function QuickSort(_data: number[], _left: number, _right: number) {
    let index: number = partition(_data, _left, _right);
    if(_left < index - 1) { // sort left half
        QuickSort(_data, _left, index - 1);
    }
    if(index < _right) { // sort right half
        QuickSort(_data, index, _right);
    }
}

function partition(_data: number[], _left: number, _right: number): number {
    let pivot: number = _data[Math.floor((_left + _right) / 2)];
    while(_left <= _right) {
        while(_data[_left] < pivot) {
            _left++;
        }

        while(_data[_right] > pivot) {
            _right--;
        }

        if(_left <= _right) {
            let aux = _data[_left];
            _data[_left] = _data[_right];
            _data[_right] = aux;
            _left++;
            _right--;
        }
    }
    return _left;
}


// main
// let original_data = [7,2,1,6,8,5,3,4];
let original_data = [4, 4, 3, 4];
QuickSort(original_data, 0, original_data.length - 1);
console.log("ordered data: ");
console.log(original_data);