"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const harry = await getCharacter(
    "https://raw.githubusercontent.com/cederdorff/dat-js/main/data/harry.json"
  );
  console.log(harry);

  showCharacter(harry);
}

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showCharacter(character) {
  const myHTML = /*html*/ `
      <article>
        <h2>${character.name}</h2>
        <img src="${character.image}" alt="" />
      </article>
      `;
  document.querySelector("body").insertAdjacentHTML("beforebegin", myHTML);
}
