// to remove repeated elements (in this case numbers)
//first sort the array 

//method to sort an array
function sortArray(array){
    for(let i=1; i<array.length; i++){
        for(let j=0; j<array.length; j++){
            if(array[i] < array[j]){
                let x = array[i];
                array[i] = array[j];
                array[j] = x;
            }
        }
    }
    return array;
}

// to remove repeated elements


function removeRepeats (array) {
    let sortedArray = sortArray(array);
    let temp = new Array;
for(let i=0; i<sortedArray.length; i++){
    if(sortedArray[i] !== sortedArray[i+1]){
        temp.push(sortedArray[i]);
    }
}
return temp;
}
let arr = [1,10,10,9,8,2,2,3,7,5,5,6,4,4,4]
console.log(removeRepeats(arr));

/*
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*/
