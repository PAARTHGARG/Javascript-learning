let score = true;
console.log(typeof score)
console.log(typeof (score))
 
let valueInNumber= Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)
/* value before vs value after conversion
  "33" => 33 

"33abc" => NaN
true => 1; false => 0
*/
let isLoggedIn=1
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)
/* 1->True 0->False
"" -> False "Paarth" -> True */