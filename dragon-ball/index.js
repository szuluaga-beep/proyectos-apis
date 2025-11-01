window.onload = async function () {
    const container = document.getElementById("dragon-ball-container");
    const { items } = await fetchDragonBallData();

    items.forEach((character) => {
        const characterDiv = document.createElement("div");
        characterDiv.classList.add("character");

        const characterName = document.createElement("h2");
        characterName.classList.add("character-name");
        characterName.textContent = character.name;

        const characterImage = document.createElement("img");
        characterImage.src = character.image;
        characterImage.alt = character.name;
        characterImage.classList.add("character-image");

        const powerLevel = document.createElement("p");
        powerLevel.classList.add("character-powerlevel");
        powerLevel.textContent = `Nivel de Poder: ${character.ki}`;
        characterDiv.appendChild(powerLevel);

        characterDiv.appendChild(characterName);
        characterDiv.appendChild(characterImage);
        container.appendChild(characterDiv);
    });
};

const fetchDragonBallData = async () => {
  try {
    const url = "https://dragonball-api.com/api/characters";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Dragon Ball data:", error);
  }
};
