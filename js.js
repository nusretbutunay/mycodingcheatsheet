const a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const result = {};

for (let i = 0; i < a.length; ++i) { // loop over array

  if (!result[a[i]]){  // if no key for that number yet
    result[a[i]] = 0;  // then make one
  }
    
  ++result[a[i]];     // increment the property for that number
  console.log(result)
}

/*
value of result after each loop
{ '5': 1 }
{ '5': 2 }
{ '5': 3 }
{ '2': 1, '5': 3 }
{ '2': 2, '5': 3 }
{ '2': 3, '5': 3 }
{ '2': 4, '5': 3 }
{ '2': 5, '5': 3 }
{ '2': 5, '5': 3, '9': 1 }
{ '2': 5, '4': 1, '5': 3, '9': 1 }
*/
