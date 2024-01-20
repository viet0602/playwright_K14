let weight = 70;
let height = 1.8;
let bmi = weight / (height * 2);
if (bmi < 18.5) {
    console.log("You are underweight.");
} else if (bmi <= 24.9) {
    console.log("You are normal.");
} else if (bmi <= 29.9) {
    console.log("You are overweight.");
} else {
    console.log("You are obesity.");
}
