fetch("https://pokeapi.co/api/v2/pokemon")
    .then(response => response.json())
    .then(result => {
        const pokemon = result.results;
        console.log(pokemon)
        pokemon.map(pokemon => createPokemonCard(pokemon));
    });

function createPokemonCard(pokemon) {
    const div = document.getElementById("div");
    const p = document.createElement("p");
    const img = document.createElement("img");
    p.innerText = pokemon.name;
    img.srcset='https://pokeres.bastionbot.org/images/pokemon/'+pokemon.id+'.png';
    div.appendChild(p);
    div.appendChild(img);
}