const detailsSectionRef = document.querySelector("#details");

const pokemon = {
    name: "Ponyta",
    type: "Fire", 
    weaknesses: ["Water", "Ground", "Rock"]
};
const myParty = [
    { name: "Ponyta", type: "Fire" },  
    { name: "Chimchar", type: "Fire"},
    { name: "Meowth", type: "Normal"},
    { name: "Houndoom", type: "Fire/Dark"},
]

console.log("My Starter pokemon", pokemon);
console.log("My Pokemon's type", pokemon ==[4]);

console .log("First pokemon in party", myParty[0]);
console.log("Second pokemon in party", myParty[myParty.lngth -1]);

for(let i = 0; i < myParty.length; i++){   
    const currentPokemon = myParty[i];
    detailsSectionRef.innerHTML += "<div>";
    detailsSectionRef.innerHTML += "<h4>" + currentPokemon.name + "</h4>";
    detailsSectionRef.innerHTML += "<p>Type(s): " + currentPokemon.type + "</p>";
    detailsSectionRef.innerHTML += "</div>";
}