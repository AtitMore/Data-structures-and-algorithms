console.log(bubbleSort([8,1,2,3,4,5,6,7]));

function bubbleSort(array){
  let isSorted = false;
  let counter = 0;
  while(!isSorted){
    isSorted = true;
    for(let i=0; i<array.length - 1 - counter; i++){
      if(array[i+1] < array[i]){
        swap(i+1, i, array);
        isSorted = false;
      }
    }
    counter++;
  }
  return array
}

function swap(j, i, array){
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}