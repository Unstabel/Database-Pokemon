"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const cubone = await getCharacter("data/cubone.json");
  console.log(cubone);

  showPokemon(cubone);
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
  document.querySelector(
    "#dialog-quote"
  ).textContent = `"${character.catchPhrase}"`;

  // Info
  dialog.querySelector("#dialog-nickname").textContent = character.description;
  dialog.querySelector("#dialog-occupation").textContent = character.ability;
  dialog.querySelector("#dialog-age").textContent = character.footprint;
  dialog.querySelector("#dialog-gender").textContent = character.dexindex;
  dialog.querySelector("#dialog-haircolor").textContent = character.type;
  dialog.querySelector("#dialog-religion").textContent = character.subtype;
  dialog.querySelector("#dialog-grade").textContent = character.weaknesses;
  dialog.querySelector("#dialog-voicedby").textContent = character.gender;
  dialog.querySelector("#dialog-episodes").textContent = character.weight;
  dialog.querySelector("#dialog-appearances").textContent = character.height;
  dialog.querySelector("#dialog-firstappearance").textContent =
    //   character.generation;
    // dialog.querySelector("#dialog-haircolor").textContent = character.spilversion;
    // dialog.querySelector("#dialog-haircolor").textContent = character.canEvolve;
    // dialog.querySelector("#dialog-haircolor").textContent = character.statsHP;
    // dialog.querySelector("#dialog-haircolor").textContent = character.statsAttack;
    // dialog.querySelector("#dialog-haircolor").textContent =
    //   character.statsdefense;
    // dialog.querySelector("#dialog-haircolor").textContent =
    //   character.statsSpecialAttack;
    // dialog.querySelector("#dialog-haircolor").textContent =
    //   character.statsSpecialDefense;
    // dialog.querySelector("#dialog-haircolor").textContent = character.statsSpeed;

    // Show Dialog
    document.querySelector("#dialog-character").showModal();
}

// function showPokemon(pokemon) {
//   const pokemonHTML = /*html*/ `
//         <li><img src=${pokemon.image}></li>
//         <li>Footprint: <img src=${pokemon.footprint}></li>
//         <li>Name: ${pokemon.name}</li>
//         <li>Description: ${pokemon.description}</li>
//         <li>Ability: ${pokemon.ability}</li>
//         <li>Pokédex index: #000${pokemon.dexindex}</li>
//         <li>Type: ${pokemon.type}</li>
//         <li>Subtype: ${pokemon.subtype}</li>
//         <li>Weaknesses: ${pokemon.weaknesses}</li>
//         <li>Gender: ${pokemon.gender}</li>
//         <li>Weight: ${pokemon.weight} g</li>
//         <li>Height: ${pokemon.height} cm</li>
//         <li>Generation: ${pokemon.generation}</li>
//         <li>Game version: ${pokemon.spilversion}</li>
//         <li>Able to evolve: ${pokemon.canEvolve}</li>
//         <li>HP: ${pokemon.statsHP}</li>
//         <li>Attack: ${pokemon.statsAttack}</li>
//         <li>Special attack: ${pokemon.statsSpecialAttack}</li>
//         <li>Special defence: ${pokemon.statsSpecialDefence}</li>
//         <li>Speed: ${pokemon.statsSpeed}</li> `;

//   document
//     .querySelector("#cubone-button")
//     .addEventListener("click", characterClicked);

//   function characterClicked() {
//     console.log("yes");
//     document
//       .querySelector("#pokemonFacts")
//       .insertAdjacentHTML("beforeend", pokemonHTML);
//     document.querySelector("#dialog").showModal();
//   }
// }
