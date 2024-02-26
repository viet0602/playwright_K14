let a =1;
let b = 2;

// ++a: Prefix ++ -> increase 1 step
//b++: Postfix ++ -> increase 1 step after operation

let c = ++a +b++;
console.log(a, b, c);
// a =2, b = 3, c =4
// prefix > right operation > assign ressult into left operand > postfix
