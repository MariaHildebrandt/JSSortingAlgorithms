
class SortAlgorithm{
    constructor(array){
        this._array = array;
    }
    quickSort(){
        let quickSort = new QuickSort(this._array, 0, this._array.length - 1);
        quickSort.sort();
    }
    mergeSort(){
        let mergeSort = new MergeSort(this._array);
        mergeSort.sort();
    }
}



/*********************/
/**Merge Sort *******/
/*******************/

class MergeSort{
    constructor(array){
        this.array = array;
    }
    sort(){
        this.mergeSortRec(this.array);
    }
    mergeSortRec(array){
        var length = array.length;
        
        if(length === 1) { 
            return array; 
        }
        var mid = Math.floor(length / 2), 
            left = array.slice(0, mid), 
            right = array.slice(mid, length); 
        
        return this.merge(this.mergeSortRec(left), this.mergeSortRec(right));
    }
    merge(left, right){
        var result = [],il = 0,ir = 0;
        
        while(il < left.length && ir < right.length) {
            
            if(left[il] < right[ir]) {
                result.push(left[il++]); 
            } else{
                result.push(right[ir++]); 
            }
        }
        while (il < left.length){ 
            result.push(left[il++]);
        }
        
        while (ir < right.length){ 
            result.push(right[ir++]);
        }
        
        //view Merge Porgress
        //console.log(result.toString());
        
        //to print result array only
        if(result.length === this.array.length){
            this.printResult(result);
        }
        
        return result;
    }
    printResult(result){
        console.log(result.toString());
    }
}
/*********************/
/**Quick Sort *******/
/*******************/

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

/*******Sort with QuickSort ************/

var array = [9, 3, 4, 5, 1, -2 , 4, 5, 9, 13];
console.log("Array unsorted: " + array.toString());

let quickSortArray = new SortAlgorithm(array);
quickSortArray.quickSort();
console.log("Array sorted: " +array.toString());


/*******Sort with MergeSort ************/

var array = [9, 3, 4, 5, 1, -2 , 4, 5, 9, 13];
console.log("Array unsorted: " + array.toString());

let mergeSortArray = new SortAlgorithm(array);
console.log("Array sorted: "  );
mergeSortArray.mergeSort();




