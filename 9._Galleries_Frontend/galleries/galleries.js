const tableBody = document.getElementById("table-body");



fetch(baseURL + "/galleries")
    .then(response => response.json())
    .then(galleries => {
        console.log(galleries);
        galleries.map(addGallery);
    })

function addGallery(gallery) {
    const tRow = document.createElement("tr");
    const nameTd = document.createElement("td");
    const ownerTd = document.createElement("td");
    const locationTd = document.createElement("td");
    const sizeTd = document.createElement("td");
    const deleteTd = document.createElement("td");

    const anchorTag = document.createElement("a");
    anchorTag.href = `./gallery.html?id=${gallery.id}`
    anchorTag.innerText = gallery.name;
    nameTd.appendChild(anchorTag);
    ownerTd.innerText = gallery.owner;
    locationTd.innerText = gallery.location;
    sizeTd.innerText = gallery.squareFeet;

    tRow.appendChild(nameTd);
    tRow.appendChild(ownerTd);
    tRow.appendChild(locationTd);
    tRow.appendChild(sizeTd);
    tableBody.appendChild(tRow);

    const updateButton = document.createElement("button");
    updateButton.innerText = "Update";

    function updateListener(){
        updateGallery(tRow,nameTd,ownerTd,locationTd,sizeTd,updateButton,gallery);
        updateButton.removeEventListener("click", updateListener);
    }

    updateButton.addEventListener("click", updateListener);


    tRow.appendChild(updateButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.class = "delete-gallery";
    deleteButton.addEventListener("click", () => {
        fetch(baseURL + "/galleries/" + gallery.id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(response => {
                if (response.status === 200) {
                    tableBody.parentNode.deleteRow(tRow.rowIndex);
                } else {
                    console.log("ERROR");
                }
            })
    })

    tRow.appendChild(deleteButton);
}
