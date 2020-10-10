// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation:
/**
 * Nested functions have access to all variables within the same fuction because they are within the same scope called variable scope. They are found locally inside the same function. We can also say there is closure that is keeping the inner function "nestedFunction()" that is keeping it from accessing the "external" variable.
 */

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

summation = (arg) => {
  function add() {
    let result = 0;
    let plus = 1;
    for (let i = 0; i < arg; i++) {
      result += plus;
      plus++;
    }
    return result;
  }
  return add();
};
console.log(summation(5));
