function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // console.log(typeof n1);
    return result;
    // if (resultConversion === 'as-number') {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
}
var combineAges = combine(30, 26, 'as-number');
var combineStringAges = combine('30', '26', 'as-number');
var combineNames = combine('Tung ', 'Anh', 'as-text');
console.log(combineAges);
console.log(combineStringAges);
console.log(combineNames);
