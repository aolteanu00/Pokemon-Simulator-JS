var moves = 0;
var pokemon = JSON.parse(document.getElementById('allPokemonJson').name);
//console.log(pokemon);


var pokemonButton = document.getElementById("pokemonButton");
pokemonButton.addEventListener("click", loadPokemon);
console.log(pokemonButton)

var pokemonDropdown = document.getElementById("pokemonDropdown");
console.log(pokemonDropdown.value);

// var moveButton = document.getElementById("moveButton");
// moveButton.addEventListener("click", loadMove);

// var finishPokemon = document.getElementById("finishPokemon");
// finishPokemon.addEventListener("click", finishPokemon);

var loadPokemon = function(e) {
    var image = document.getElementById("pdisplay");
    image.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png";
}

var loadPokemon = function(e){
  console.log(e);
}

var loadMove = function(e) {
    if (moves < 4) {
        moves++;
    }
}
