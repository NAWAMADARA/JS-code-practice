let array = [1,10,2,9,3,8,4,7,5,6,100,10123456];

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
console.log(sortArray(array));

/*Output

[
  1,  2,   3,     4,
  5,  6,   7,     8,
  9, 10, 100, 10123
]

*/