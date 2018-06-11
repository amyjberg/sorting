function swap (a, b, array){
  let smaller = array[b];
  let larger = array[a];
  array[a] = smaller;
  array[b] = larger;
}

function compare (a, b, array) {
  return array[a] > array[b];
}

function bubbleSort(array){
  for (let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length - 1; i++){
        if (compare(i, i+1, array)) {
          swap(i, i+1, array);
        }
    }
  }
  console.log(array);
  return array;
}

