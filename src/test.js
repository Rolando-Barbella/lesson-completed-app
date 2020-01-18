string.split('');
isNaN();

Array.reduce((acc, e, i, arr) =>  {
	if( !acc.includes(e)) {
		return (acc + e);
	}
	return acc
	
},[]);

// Not unique
Array.filter((value, index, array) => { 
  return (array.indexOf(value) !== index )
});

// Unique
[...new Set()]

// flattened is [0, 1, 2, 3, 4, 5]
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(accumulator, currentValue) {
    return accumulator.concat(currentValue)
  },
  []
)

// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})


