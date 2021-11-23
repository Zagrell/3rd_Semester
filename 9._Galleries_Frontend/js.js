const artistWrapper = document.getElementById("artists-wrapper");

fetch("http://localhost:8080/artists")
.then(response => response.json())
.then(artists => {
        console.log(artists);
        artists.map((artist) => {
            const element = document.createElement("p");
            element.innerText = "name: " + artist.name + "\nage: " + artist.age + "\ngender: " + artist.gender.toLowerCase();
            artistWrapper.appendChild(element);
        });

    });


