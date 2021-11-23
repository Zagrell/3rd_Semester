let characters;
let filteredCharacters;
const searchField = document.getElementById("search");

document.getElementById("status").addEventListener("change", () => {
    const option = document.getElementById("status");
    const selected = option.options[option.selectedIndex].value;

    div.innerHTML = '';
    if(selected !== "all") {
        filteredCharacters = characters.filter(char => char.status === selected);
        filteredCharacters.map(createCharacterCard);
    }else{
        characters.map(createCharacterCard);
    }
})

function handleSearh(event){
    div.innerHTML = '';
    console.log()
    if(document.getElementById("search").value !== ""){
        characters.filter(char => char.name("/" + event.target.value + "/i"))
            .map(createCharacterCard);
    }else {
        characters.map(createCharacterCard);
    }
}

fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(result => {
        characters = result.results;
        filteredCharacters = characters;
        const option = document.getElementById("status");
        characters.map(createCharacterCard);
    });

const div = document.getElementById("char-gallery");

function createCharacterCard(character) {
    const cardElement = document.createElement("div");
    cardElement.innerHTML = `
        <p>${escapeHTML(character.name)}</p>
        <img src=${escapeHTML(character.image)}>`;
    div.appendChild(cardElement);
}