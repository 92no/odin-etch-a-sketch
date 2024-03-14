"use strict";

// sketch grid 16x16 divs
const GRID_WIDTH = 800;
const sketchContainer = document.querySelector(".sketchContainer");

function createGrid(squaresPerSide) {
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

function changeGrid() {
  let squaresPerSide = prompt("Enter squares per Side (up to 100)");
  while (squaresPerSide > 100) {
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

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  clearGrid();
  let squaresPerSide = changeGrid();
  createGrid(squaresPerSide);
});

createGrid(16);
