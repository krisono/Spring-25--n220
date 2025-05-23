const h1Ref = document.getElementById("title");

console.log("h1Ref:", h1Ref);

const letterGradeRefs = document.getElementsByClassName("letter-grade");

console.log("letterGradeRefs:", letterGradeRefs);

const pRef = document.querySelector("p");

console.log("pRef:", pRef);

const h1AltRef = document.querySelectorAll("#title");

console.log("h1AltRef:", h1AltRef);

const liRefs = document.querySelector("li");

console.log("liRefs:", liRefs);

const ulRef = document.querySelector("ul");

console.log("ul textContent", ulRef.textContent);

console.log("ul innerText", ulRef.innerText);

console.log("ul innerHTML", ulRef.innerHTML);


ulRef.innerHTML = "<li class='letter-grade'>C</li>";
ulRef.innerHTML += "<li class='letter-grade'>D</li>";
ulRef.innerHTML += "<li class='letter-grade' style='display:none'>E</li>";
ulRef.innerHTML += "<li class='letter-grade'>F</li>";

h1Ref.style.backgroundColor = "red";
h1Ref.style.color = "white";

pRef.style.backgroundColor = "#00ff0050";
pRef.style.color = "rgba(255, 50, 0, 1)";
pRef.style.height = "100px";
pRef.style.width = "400px";

//document.querySelector("li").style.display = "none";
//document.querySelector("li").style.display = "block";

h1Ref.style.display = "none";

h1Ref.style.display = "block";

const ulLiRefs = ulRef.querySelectorAll("li");

console.log("ulLiRefs:", ulLiRefs);

const googleLinkRef = document.querySelector("a.google");

googleLinkRef.href = "http://www.google.com";
googleLinkRef.target = "_balnk";

const inputRef = document.querySelector("input");

inputRef.setAttribute("placeholder", "jello with a fruit on teacher");

pRef.dataset.age = "89";

console.log(pRef);

console.log(pRef.dataset);

pRef.classList.add("blue");

pRef.classList.remove("blue");

console.log(pRef.classList.contains("blue"));

const newLi = document.createElement("li");
newLi.innerText = "G";
newLi.classList.add("letter-grade");

ulRef.appendChild(newLi);