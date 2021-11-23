const paintingsWrapper = document.getElementById("paintings-wrapper");

document.getElementById("create-painting-button").addEventListener("click", createPainting)



fetch(baseURL + "/paintings")
    .then(response => response.json())
    .then(paintings => {
        paintings.map(createPaintingCard)
    })

function createPaintingCard(painting){
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    paintingsWrapper.appendChild(cardDiv);

    constructPaintingCard(cardDiv,painting)

}

function constructPaintingCard(cardDiv, painting){
    cardDiv.innerHTML = "";

    const cardInfo = document.createElement("div");
    const cardImage = document.createElement("div");
    cardInfo.className = "card-info";
    cardImage.className = "card-image";

    cardInfo.innerHTML = `
        <p>title:    ${escapeHTML(painting.title)}</p>
        <p>artist:     ${escapeHTML(painting.artist)}</p>
        <p>price:  ${escapeHTML(painting.price.toString())}</p>
    `;

    cardImage.innerHTML = `
        <img src="${escapeHTML(painting.image)}">
    `

    cardDiv.appendChild(cardInfo);
    cardDiv.appendChild(cardImage);

}

function createPainting(){
    console.log("fsdghj")
}