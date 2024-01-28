function formatGrade (grade) {
    let gradeText = '';

if (grade < 3) {
    gradeText = 'Fail';
    grade = 2;
} else if (grade < 3.5) {
    gradeText = 'Poor';
} else if (grade < 4.5) {
    gradeText = 'Good';
} else if (grade < 5.5) {
    gradeText = 'Very good';
} else {
    gradeText = 'Excellent';
}
let gradeValue = grade < 3 ? '2' : grade.toFixed(2);
console.log(`${gradeText} (${gradeValue})`);
}
formatGrade (2.99);