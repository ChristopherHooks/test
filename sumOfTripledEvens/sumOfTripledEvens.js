/**
 function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      // Step 1: If the element is an even number
      if (array[i] % 2 === 0) {
        // Step 2: Multiply this number by three
        const tripleEvenNumber = array[i] * 3;
  
        // Step 3: Add the new number to the total
        sum += tripleEvenNumber;
      }
    }
    return sum;
  }
    **/

//Rewrite using map, reduce, and filter

//First filter
function isEven(num) {
  return num % 2 === 0;
}

const arr = [1, 2, 3, 4, 5];
const evensArr = arr.filter(isEven);

//Then map
const mappedArr = evensArr.map((num) => num * 3);

//Then reduce
const sum = mappedArr.reduce((total, currentItem) => {
  return total + currentItem;
})

console.log(sum);