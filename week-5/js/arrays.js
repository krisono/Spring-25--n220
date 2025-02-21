console.log("Lets talk arrays.");

const zodiacSigns = [
    'libra',
    'Aries', 
    'Taurus', 
    'Gemini', 
    'Cancer', 
    'Leo', 
    'Virgo', 
    'Scorpio', 
    'Capricorn', 
    'Pisces',
    'sag',
    'aquarious'
];

console.log("zodiacSigns", zodiacSigns);

console.table(zodiacSigns);

console.log("2nd zodiac:", zodiacSigns[1]);

console.log("# of zodiacs:", zodiacSigns.length);

const zodiacSignUlRef = document.getElementById("zodiac-signs");

for (let i = 0; i<zodiacSigns.length; i++) {
    zodiacSignUlRef.innerHTML += "<li>"+ zodiacSigns[i] + "</li>";
    console.log("For loop:", zodiacSigns[i]);
}

let whileI = 0;
while (whileI < zodiacSigns.length) {
    console.log("While loop:", zodiacSigns[whileI]);
    whileI++;
}

let whileDoI = 0
do {
    whileDoI++;
} while (whileDoI < zodiacSigns.length);

const gradeStatsSectionRef = document.querySelector("#grade-stats");

const grades = [94, 2, 68, 72, 84, 64, 34, 76, 77];

let sumOfGrades = 0;
for (let i = 0; i < grades.length; i++)  {
    const grade = grades[i];
    sumOfGrades += grade;
}

gradeStatsSectionRef.innerHTML +=
"<h4>Avg: " + (sumOfGrades / grades.length).toFixed(1) + "</h4>";