function fibonacci(n, values = [0, 1, 1]) {
  if (n === 0) {
    return 0;
  }

  if (n === values[2]) {
    return values[1];
  }

  values = [values[1], values[0] + values[1], ++values[2]];
  return fibonacci(n, values);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: 6765");
  console.log("=>", fibonacci(20));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// Declare variable "values" as a trio of values: [prevSequence#, currSequence#, element#] as arguments to pass into function
// Check if n equals 0, return 0 if so
// Check if element# equals the given n value
// If so, return the current sequence#
// return fibonacci(n, values)
// And a written explanation of your solution
