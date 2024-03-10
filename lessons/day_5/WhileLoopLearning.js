// While somethings are true, do logic inside
// khi biết số vòng lặp thì dùng for loop
// khi không biết số vòng lặp thì dùng while loop

let step = 0;
for (; step < 5;) {
    console.log(step);
    step++;
}
// 1. There is a need to use the init express outside of the loop
// 2. For loop - loop steps are fixed. While loop - loop steps are not fixed/dynamic
console.log(step);