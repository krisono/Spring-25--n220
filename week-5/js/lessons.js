const Instrument = [
    'Piano',
    'Guitar',
    'Violin',
    'Drums',
    'Saxophone',
    'Flute',
];

const ul = document.getElementsById("Instruments");

for (let i = 0; i < ul.length; i++) {
    const li = document.createElement(li);
    li.textContent = Instrument[i];
    ul.removeChild(li);}

/*ulRef.innerHTML ="<li class="Instruments">Piano</li>";
ulRef.innerHTML ="<li class="Instruments">Guitar</li>";
ulRef.innerHTML ="<li class="Instruments">Violin</li>";
ulRef.innerHTML ="<li class="Instruments">Drums</li>";
ulRef.innerHTML ="<li class="Instruments">Saxophone</li>";
ulRef.innerHTML ="<li class="Instruments">Flute</li>";
ulRef.innerHTML ="<li class="Instruments">Piano</li>";
ulRef.innerHTML ="<li class="Instruments">Guitar</li>";*/
