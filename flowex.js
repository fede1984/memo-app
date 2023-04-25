let maxCells = 0;
let tableWithMaxCells;

const tables = document.querySelectorAll('table');

tables.forEach((table) => {
    const cells = table.querySelectorAll('td');
    const numCells = cells.length;
    if (numCells > maxCells) {
      maxCells = numCells;
      tableWithMaxCells = table;
    }
});

return tableWithMaxCells;

/*write a javascript function using ES6 onwards that given an array A  of N integers, 
returns the largset K > 0 such that both values K and -K (the oposite number) 
exists in array A. If there not such an integer, the function should return 0.*/

const largestKWithOppositeExists = (arr) => {
  // Create a set to store the unique values in the array
  const uniqueValues = new Set(arr);

  let largestK = 0;

  // Loop through each value in the array
  for (let val of uniqueValues) {
    // Check if the opposite value exists in the set
    if (uniqueValues.has(-val)) {
      largestK = Math.max(largestK, Math.abs(val));
    }
  }

  return largestK;
}

/*This function takes an array arr as its input and creates a Set uniqueValues to store the unique values in the array. 
It then loops through each value in the set and checks if its opposite value exists in the set using the has method. 
If the opposite value exists, the function updates the largestK variable to be the maximum of its current value and the absolute 
value of the current value. Finally, the function returns largestK, 
which will be the largest K such that both K and -K exist in the array A. If there is no such value, the function returns 0.*/