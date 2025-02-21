const scores = [
    95,
    72,
    88,
    45,
    60,
    79,
    82,
    91,
    50,
    38,
];

const ul = document.getElementById("ListOfScores");
const averagescoreElement = document.getElementById("Average-Score");

let total = 0;

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
    let li = document.createElement("li");  
    ul.appendChild(li);
    li.textContent = scores[i];
    total += scores[i];

}

const averagescore = total / scores.length;
averagescoreElement.textContent = averagescore.toFixed(1);
console.log("averagescore", averagescore);
