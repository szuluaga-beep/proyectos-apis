window.onload = async function () {
  const container = document.getElementById("simpson-container");

  const { results } = await fetchSimpsonsData();

  results.forEach((character) => {
    const characterDiv = document.createElement("div");
    characterDiv.classList.add("character");

    const characterName = document.createElement("h2");
    characterName.classList.add("character-name");
    characterName.textContent = character.name;

    const birthdate = document.createElement("p");
    birthdate.classList.add("character-birthdate");
    birthdate.textContent = `Fecha de Nacimiento: ${character.birthdate}`;
    characterDiv.appendChild(birthdate);

    const gender = document.createElement("p");
    gender.classList.add("character-gender");
    gender.textContent = `Género: ${character.gender}`;
    
    const characterImage = document.createElement("img");
    characterImage.src = `https://cdn.thesimpsonsapi.com/500${character.portrait_path}`;
    characterImage.alt = character.name;
    characterImage.classList.add("character-image");
    
    characterDiv.appendChild(characterName);
    characterDiv.appendChild(characterImage);
    characterDiv.appendChild(birthdate);
    characterDiv.appendChild(gender);
    container.appendChild(characterDiv);
});
};

const fetchSimpsonsData = async () => {
  try {
    const url = "https://thesimpsonsapi.com/api/characters";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Simpsons data:", error);
  }
};
