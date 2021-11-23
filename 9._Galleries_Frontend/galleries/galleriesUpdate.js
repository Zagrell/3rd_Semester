function updateGallery(tRow, nameTd, ownerTd, locationTd, sizeTd, updateButton, gallery) {

    const inputName = document.createElement("input");
    inputName.value = gallery.name;
    inputName.placeholder = "name";
    const inputOwner = document.createElement("input");
    inputOwner.value = gallery.owner;
    inputOwner.placeholder = "owner";
    const inputLocation = document.createElement("input");
    inputLocation.value = gallery.location;
    inputLocation.placeholder = "location"
    const inputSize = document.createElement("input");
    inputSize.type = "number";
    inputSize.value = gallery.squareFeet;
    inputSize.placeholder = "size in sqr feet";

    nameTd.innerHTML = "";
    nameTd.appendChild(inputName);
    ownerTd.innerHTML = "";
    ownerTd.appendChild(inputOwner);
    locationTd.innerHTML = "";
    locationTd.appendChild(inputLocation);
    sizeTd.innerHTML = "";
    sizeTd.appendChild(inputSize);

    updateButton.addEventListener("click", submitUpdate);

    function submitUpdate() {
        const galleryToUpdate = {
            name: inputName.value,
            owner: inputOwner.value,
            location: inputLocation.value,
            squareFeet: Number(inputSize.value)
        }

        fetch(baseURL + "/galleries/" + gallery.id, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(galleryToUpdate)
        })
            .then(response => {
                if (response.status === 200) {
                    return response.text();
                } else {
                    throw "error";
                }
            })
            .then(text => {
                if (text === "Gallery updated") {
                    nameTd.innerText = galleryToUpdate.name;
                    ownerTd.innerText = galleryToUpdate.owner;
                    locationTd.innerText = galleryToUpdate.location;
                    sizeTd.innerText = galleryToUpdate.squareFeet;
                    updateButton.removeEventListener("click", submitUpdate);
                    updateButton.addEventListener("click", updateListener);

                    function updateListener() {
                        updateGallery(tRow, nameTd, ownerTd, locationTd, sizeTd, updateButton, gallery);
                        updateButton.removeEventListener("click", updateListener);
                    }

                } else {
                    throw text;
                }
            })
            .catch(error => console.log("Catch Error", error));
    }

}