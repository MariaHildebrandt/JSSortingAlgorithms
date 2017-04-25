
class SortAlgorithm{
    constructor(array){
        this._array = array;
    }
    quickSort(){
        let quickSort = new QuickSort(this._array, 0, this._array.length - 1);
        quickSort.sort();
    }
}

class QuickSort{
    constructor(array, left, right){
        this.array = array;
        this.left = left;
        this.right = right;
    }
    sort(){
        this.quick(this.array, this.left, this.right);
    }
    quick(array, left, right){
        var index; 
        if (array.length > 1) { 
            index = this.partition(array, left, right);
            if (left < index - 1) { 
                this.quick(array, left, index - 1); 
            }
            if (index < right) {    
                this.quick(array, index, right); 
            }
        }
    }
    swap(array, index1 , index2){
        [array[index1], array[index2]] = [array[index2], array[index1]];
    }
    partition(array, left, right) {
        var pivot = array[Math.floor((right + left) / 2)], 
                i = left, 
                j = right; 
        while (i <= j) { 
            while (array[i] < pivot) { 
                i++;
            }
            while (array[j] > pivot) {
                j--;
            }
            if (i <= j) { 
            this.swap(array, i, j);
                i++;
                j--;
            }
        }
        return i; 
    }
}

var array = [9, 3, 4, 5, 1, -2 , 4, 5, 9, 13];
console.log("Array unsorted: " + array.toString());

let sortArray = new SortAlgorithm(array);
sortArray.quickSort();
console.log("Array sorted: " +array.toString());




