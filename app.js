"use strict";

const cubone = {
        name: "Cubone",
        description: "This Pokémon wears the skull of its deceased mother. Sometimes Cubone's dreams make it cry, but each tear Cubone sheds makes it stronger.",
        ability: "Rock head, Lightning Rod",
        image: "https://img.pokemondb.net/artwork/large/cubone.jpg",
        footprint: "https://archives.bulbagarden.net/media/upload/9/9c/F0104.png",
        dexindex: 104,
        type: "Ground",
        subtype: null,
        weaknesses: "Water, Grass, Ice",
        gender: "Male or Female",
        weight: 6500,
        height: 40,
        generation: 1,
        spilversion: "Red/Blue/Yellow/FireRed/LeafGreen/Gold/Silver/Ruby/Sapphire/Emerald/Diamond/Pearl/Platinum/Heartgold/Soulsilver/Black/White",
        canEvolve: true,
        statsHP: 5,
        statsAttack: 5,
        statsDefence: 9.5,
        statsSpecialAttack: 4.5,
        statsSpecialDefence: 5,
        statsSpeed: 3.5,
      };

      function showPokemon(pokemon) {
        const pokemonHTML = /*html*/ `
        <li><img src=${pokemon.image}></li>
        <li>Footprint: <img src=${pokemon.footprint}></li>
        <li>Name: ${pokemon.name}</li> 
        <li>Description: ${pokemon.description}</li>
        <li>Ability: ${pokemon.ability}</li>
        <li>Pokédex index: #000${pokemon.dexindex}</li>
        <li>Type: ${pokemon.type}</li>
        <li>Subtype: ${pokemon.subtype}</li>
        <li>Weaknesses: ${pokemon.weaknesses}</li>
        <li>Gender: ${pokemon.gender}</li>
        <li>Weight: ${pokemon.weight} g</li>
        <li>Height: ${pokemon.height} cm</li>
        <li>Generation: ${pokemon.generation}</li>
        <li>Game version: ${pokemon.spilversion}</li>
        <li>Able to evolve: ${pokemon.canEvolve}</li>
        <li>HP: ${pokemon.statsHP}</li>
        <li>Attack: ${pokemon.statsAttack}</li>
        <li>Special attack: ${pokemon.statsSpecialAttack}</li>
        <li>Special defence: ${pokemon.statsSpecialDefence}</li>
        <li>Speed: ${pokemon.statsSpeed}</li> `;
        document.querySelector("#pokemonFacts").insertAdjacentHTML("beforeend", pokemonHTML);
      }

showPokemon(cubone);
