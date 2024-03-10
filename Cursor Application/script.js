/*let crsr = document.querySelector(".cursor");
let body = document.querySelector("body");
let widthStatus = document.querySelector("#size");
let isSelected;

crsr.addEventListener("mousedown", () => {
  if (isSelected) {
    isSelected = false;
    select();
  } else {
    isSelected = true;
    select();
  }
});

body.addEventListener("mousemove", (e) => {
  if (isSelected) {
    crsr.style.left = e.x + "px";
    crsr.style.top = e.y + "px";
  }
});

function select() {
  if (isSelected) {
    crsr.style.border = "2px solid red";
    body.style.cursor = "all-scroll";
  } else {
    crsr.style.border = "none";
    body.style.cursor = "default";
  }
}

function increase() {
  if (isSelected) {
    currentWidth = parseFloat(crsr.style.width) || 2;
    console.log(currentWidth);
    crsr.style.width = currentWidth + 0.5 + "rem";
    widthStatus.innerHTML = currentWidth;
  }
}

function decrease() {
  if (isSelected) {
    currentWidth = parseFloat(crsr.style.width) || 2;
    crsr.style.width = currentWidth - 0.5 + "rem";
    widthStatus.innerHTML = currentWidth;
  }
}

/* -- Canvas -- */

var canvas = document.querySelector("#canvas");
var target;
let isSelected = true;

canvas.addEventListener("click", (e) => {
  if (e.target.id != "canvas") {
    console.log(e.target.id);
    target = document.querySelector(`#${e.target.id}`).style.border =
      "2px solid red";
    isSelected = true;
    canvas.addEventListener("mousemove", (ef) => {
      if (isSelected) {
        document.querySelector(`#${e.target.id}`).style.left = ef.x + "px";
        document.querySelector(`#${e.target.id}`).style.top = ef.y + "px";
      } else {
        console.log("false");
      }
    });
  } else {
    console.log("Canvas is Selected");
    isSelected = false;
  }
});

canvas.addEventListener("mouseup", (e) => {
  isSelected = false;
  console.log(isSelected);
});
