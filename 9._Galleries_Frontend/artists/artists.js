const artistWrapper = document.getElementById("artists-wrapper");
document.getElementById("create-artists-button").addEventListener("click", createArtist)

getArtists()

function getArtists() {
    fetch("http://localhost:8080/artists")
        .then(response => response.json())
        .then(artists => {
            console.log(artists);
            artistWrapper.innerHTML = ``;
            artists.map(createArtistCard);

        });
}

function createArtist() {
    const name = document.getElementById("create-artist-name").value;
    const age = Number(document.getElementById("create-artist-age").value);
    const image = document.getElementById("create-artist-image").value;
    const gender = document.getElementById("create-artist-gender").value;



    const newArtist = {name: name, age: age, image: image, gender: gender}
    console.log(newArtist);

    fetch("http://localhost:8080/artists", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(newArtist)
    })
        .then(response => {
            if (response.status === 200) {
                createArtistCard(newArtist)
            }else{
                console.log("ERROR");
            }
        }).catch(error => console.log("Catch Error", error));
}

function createArtistCard(artist) {
    const cardInfo = document.createElement("div");
    const cardImage = document.createElement("div");
    cardInfo.className = "cardinfo";
    cardImage.className = "cardimage";
    cardInfo.innerHTML = `
        <p>name:    ${escapeHTML(artist.name)}</p>
        <p>age:     ${escapeHTML(artist.age.toString())}</p>
        <p>gender:  ${escapeHTML(artist.gender.toLowerCase())}</p>
    `;


    if(artist.image.length > 0) {
        cardImage.innerHTML = `
        <img src="${escapeHTML(artist.image)}">
    `;
    }else {
        cardImage.innerHTML = `
        <img src="../resources/Placeholder-Portrait.jpg">
    `;
    }

    const card = document.createElement("div");
    card.className = "card";
    card.appendChild(cardInfo);
    card.appendChild(cardImage);
    artistWrapper.appendChild(card);
}