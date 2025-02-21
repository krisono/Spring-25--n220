const instruments = [
    'Piano',
    'Guitar',
    'Violin',
    'Drums',
    'Saxophone',
    'Flute',
];

const ul = document.getElementById("Instruments");

for (let i = 0; i < instruments.length; i++) 
    {
    const li = document.createElement("li");
    li.textContent = instruments[i];
    ul.appendChild(li);
}


/*ulRef.innerHTML ="<li class="Instruments">Piano</li>";
ulRef.innerHTML ="<li class="Instruments">Guitar</li>";
ulRef.innerHTML ="<li class="Instruments">Violin</li>";
ulRef.innerHTML ="<li class="Instruments">Drums</li>";
ulRef.innerHTML ="<li class="Instruments">Saxophone</li>";
ulRef.innerHTML ="<li class="Instruments">Flute</li>";
ulRef.innerHTML ="<li class="Instruments">Piano</li>";
ulRef.innerHTML ="<li class="Instruments">Guitar</li>";*/