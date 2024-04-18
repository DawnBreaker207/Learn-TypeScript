function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  //This function not return a value
  console.log(`Result:` + num);
}
printResult(add(5, 12));

// Function Type

// Callback function
function addAndHandle(
  n1: number,
  n2: number,
  //Callback function
  cb: (num: number) => void
) {
  const result = n1 + n2;
  cb(result);
}

// =========================================================
// let combineValues: Function; //Type provided by TS
let combineValues: (a: number, b: number) => number; //Function Type
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});
// let someValue: undefined; //Valid type in TS
