const createGalleryForm = document.getElementById("create-gallery-form");
createGalleryForm.style.display= "none";
createGalleryForm.innerHTML = `
    <label>Name</label>
    <input id="create-gallery-name" type="text" placeholder="name">
    <label>Owner</label>
    <input id="create-gallery-owner" type="text" placeholder="owner">
    <label>Location</label>
    <input id="create-gallery-location" type="text" placeholder="location">
    <label>Size</label>
    <input id="create-gallery-size" type="number" placeholder="size in square feet">
    
    <button id="create-gallery-button" onclick="createGallery()" >Create Gallery</button>
`;


document.getElementById("expand-gallery-form-button").addEventListener("click", () => {
    if(createGalleryForm.style.display === ""){
        createGalleryForm.style.display = "none";

    }else{
        createGalleryForm.style.display = "";
    }
});

function createGallery(){

    const name = document.getElementById("create-gallery-name").value;
    const owner = document.getElementById("create-gallery-owner").value;
    const location = document.getElementById("create-gallery-location").value;
    const size = document.getElementById("create-gallery-size").value;

    const newGallery = {name: name, owner: owner, location: location, squareFeet: Number(size)}

    fetch(baseURL + "/galleries", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(newGallery)
    })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw "error";
            }
        })
        .then(addGallery)
        .catch(error => console.log("Catch Error", error));


}