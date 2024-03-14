"use strict";

// Function to return random number up to 255
function randomNum() {
  return Math.floor(Math.random() * 256);
}

// sketch grid 16x16 divs
const GRID_WIDTH = 800;
const sketchContainer = document.querySelector(".sketchContainer");
let squaresPerSide = 16;

// Create grid with mono colors
function createGridMono(squaresPerSide) {
  for (let i = 0; i < squaresPerSide ** 2; i++) {
    const sketchDiv = document.createElement("div");
    sketchDiv.classList.add("sketchDiv");
    sketchDiv.style.height = `${GRID_WIDTH / squaresPerSide}px`;
    sketchDiv.style.width = `${GRID_WIDTH / squaresPerSide}px`;
    sketchDiv.addEventListener("mouseover", () => {
      sketchDiv.classList.add("colorChange");
    });
    sketchContainer.appendChild(sketchDiv);
  }
}

// Create grid with random colors
function createGridRandom(squaresPerSide) {
  for (let i = 0; i < squaresPerSide ** 2; i++) {
    const sketchDiv = document.createElement("div");
    sketchDiv.classList.add("sketchDiv");
    sketchDiv.style.height = `${GRID_WIDTH / squaresPerSide}px`;
    sketchDiv.style.width = `${GRID_WIDTH / squaresPerSide}px`;
    sketchDiv.addEventListener("mouseover", () => {
      sketchDiv.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    });
    sketchContainer.appendChild(sketchDiv);
  }
}

function getSquaresPerSide() {
  let squaresPerSide = prompt("Enter squares per Side (up to 100)");
  while (squaresPerSide > 100 || squaresPerSide == 0 || squaresPerSide == "") {
    squaresPerSide = prompt("Enter squares per Side (up to 100)");
  }
  return squaresPerSide;
}

function clearGrid() {
  const sketchDivs = document.querySelectorAll(".sketchDiv");
  sketchDivs.forEach((div) => {
    div.remove();
  });
}

// Button create Grid with mono colors
const btnMono = document.querySelector(".btnMono");
btnMono.addEventListener("click", () => {
  clearGrid();
  let squaresPerSide = getSquaresPerSide();
  createGridMono(squaresPerSide);
});

// Btton create Grid with random colors
const btnRandom = document.querySelector(".btnRandom");
btnRandom.addEventListener("click", () => {
  clearGrid();
  let squaresPerSide = getSquaresPerSide();
  createGridRandom(squaresPerSide);
});

createGridMono(squaresPerSide);
