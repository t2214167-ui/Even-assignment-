// the reverse String function
function reverseString(str) {
  return str.split("").reverse().join("");
}
// test cases
console.log(reverseString("umbrella"));  // expected output :"allerbmu"
console.log(reverseString("world")); // expected output : "dlrow"
console.log(reverseString("school")); // expected output :"loohcs"
console.log(reverseString("678999")) ; // expected output :"999876"
console.log(reverseString("")) ; // expected output : ""
