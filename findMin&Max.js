function minMax(array) {
    let min;
    let max;
    let temp = new Array;
    for(let i=1; i<array.length;i++){
        for(let j=0; j<array.length; j++){
            if(array[j] < array[i]){
                min=array[j];
            }
            if(array[j] > array[i]){
                max=array[j];
            }
        }
    }
    temp.push(min,max);
    return temp; // contains the minimun number and the maximum number in order
}
let array = [1,2,3,4,5,6,7,8,9,0,10]
console.log(minMax(array));