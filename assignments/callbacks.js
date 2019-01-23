// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

 
/*
  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });
*/


// Problem:
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
};

// Solution:
function getLength(arr, cb) {
  return cb(arr.length);
}

getLength(items, function(arr_length) {
  console.log(arr_length)
});


// Problem:
function last(arr, cb) {
  // last passes the last item of the array into the callback.
}

// Solution:
function last(arr, cb) {
  return cb(arr.slice(-1).pop());
};

last(items, function(last_item) {
  console.log(last_item)
});


// Problem:
function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

// Solution:
function sumNums(x, y, cb) {
  return cb(x + y);
}

sumNums(3, 6, function(add_nums) {
  console.log(add_nums)
});


// Problem:
function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

// Solution:
function multiplyNums(x, y, cb) {
  return cb(x * y);
}

multiplyNums(3, 6, function(mult_nums) {
  console.log(mult_nums)
});


// Problem:
function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

// Solution:
function contains(item, list, cb) {
  
  for (let i = 0; i < list.length; i++) {

    if (list[i] == item) {
      return console.log("true");
    };

  };
  
  return console.log("false");

  };

contains('Gum', items, function(has_it) {
  console.log(has_it)
});


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
