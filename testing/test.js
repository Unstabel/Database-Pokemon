"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const students = await getStudent("data/students.json");
  console.log(students);
}

// function addStudent(student) {
//   const list = document.querySelector("#student");
//   list.insertAdjacentHTML(
//     "beforeend",
//     `<li>${student.firstName} ${student.lastName}</li>`
//   );
// }

async function getStudent(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
