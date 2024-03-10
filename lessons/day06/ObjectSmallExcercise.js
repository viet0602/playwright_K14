/**
 * Student: {name: String, grades: Array[Number]}
 * Given 3 students -> find the best one
 * The best one is the one who has highest score
 * In case more than 1 person have same score -> print them all out
 */

let ti ={
    name : "ti",
    grades: [9,4,6,8]
};

let teo = JSON.parse(JSON.stringify(ti));
teo.name = "teo";
teo.grades = [7,9,9, 8];

let tun = JSON.parse(JSON.stringify(ti));
tun.name = "tun";
tun.grades = [7,6,9, 5];

const students = [ti, teo, tun];
const bestStudent = findBestStudent(students);
console.log(bestStudent);

function findBestStudent(students) {
    let currentHighestScore = 0;
    let bestStudents = undefined;
    for (let student of students) {
        const averageScore = calculateAverageScore(student);
        if (averageScore >= currentHighestScore) {
            currentHighestScore = averageScore;
            bestStudents = student;
        }
    }
    return bestStudents;
}
function calculateAverageScore(student) {
    const studentGrades = student.grades;
    let totalGrade = 0;
    let scoreLength = studentGrades.length;
    for ( const grade of studentGrades) {
        totalGrade += grade;
    }
    return Math.floor(totalGrade / scoreLength);
}