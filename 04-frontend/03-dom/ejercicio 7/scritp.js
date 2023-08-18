
const characterList = document.getElementById("characterList");

    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => {
        data.results.forEach(character => {
          const characterCard = document.createElement("div");
          characterCard.classList.add("character-card");

          const characterImage = document.createElement("img");
          characterImage.classList.add("character-image");
          characterImage.src = character.image;

          const characterName = document.createElement("h2");
          characterName.textContent = character.name;


          const characterspecies = document.createElement("h3");
          characterspecies.textContent = character.species;

          characterCard.appendChild(characterspecies);
          characterCard.appendChild(characterImage);
          characterCard.appendChild(characterName);
          characterList.appendChild(characterCard);
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
