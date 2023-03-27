"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const cubone = await getCharacter("data/cubone.json");
  console.log(cubone);
  showPokemon(cubone);
  const blaziken = await getCharacter(
    "https://raw.githubusercontent.com/tora0001/pokemon-data/main/data/pokemon.json"
  );
  console.log(blaziken);
  showPokemon(blaziken);
}

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showPokemon(character) {
  const html =
    /*html*/
    `
        <article class="grid-item">
            <img src="${character.image}">
            <h2>${character.name}</h2>
        </article>
        `;

  document.querySelector("#character").insertAdjacentHTML("beforeend", html);
  document
    .querySelector("#character article:last-child")
    .addEventListener("click", characterClicked);

  function characterClicked() {
    showCharacterModal(character);
  }
}

function showCharacterModal(character) {
  console.log(character);
  const dialog = document.querySelector("#dialog-character");
  // Image
  document.querySelector("#dialog-image").src = character.image;

  // Cacth Phrase and Name
  document.querySelector("#dialog-name").textContent = character.name;
  // Info
  dialog.querySelector("#dialog-nickname").textContent = character.description;
  dialog.querySelector("#dialog-occupation").textContent = character.ability;
  dialog.querySelector("#dialog-age").textContent = character.footprint;
  dialog.querySelector("#dialog-dexindex").textContent = character.dexindex;
  dialog.querySelector("#dialog-type").textContent = character.type;
  dialog.querySelector("#dialog-subtype").textContent = character.subtype;
  dialog.querySelector("#dialog-weaknesses").textContent = character.weaknesses;
  dialog.querySelector("#dialog-gender").textContent = character.gender;
  dialog.querySelector("#dialog-episodes").textContent = character.weight;
  dialog.querySelector("#dialog-appearances").textContent = character.height;
  dialog.querySelector("#dialog-generation").textContent = character.generation;
  dialog.querySelector("#dialog-spilVersion").textContent =
    character.spilversion;
  dialog.querySelector("#dialog-canEvolve").textContent = character.canEvolve;
  dialog.querySelector("#dialog-statsHP").textContent = character.statsHP;
  dialog.querySelector("#dialog-statsAttack").textContent =
    character.statsAttack;
  dialog.querySelector("#dialog-statsDefense").textContent =
    character.statsDefence;
  dialog.querySelector("#dialog-statsSpecialAttack").textContent =
    character.statsSpecialAttack;
  dialog.querySelector("#dialog-statsSpecialDefense").textContent =
    character.statsSpecialDefence;
  dialog.querySelector("#dialog-statsSpeed").textContent = character.statsSpeed;

  // Show Dialog
  document.querySelector("#dialog-character").showModal();
}
