// window.addEventListener("load", start);

// function start() {
//   console.log("start");
//   document.querySelector("h2").classList.add("build");
// }

const text = "Multimediedesign Studerende              ";
// const speed = 90; // millisekunder mellem hvert bogstav
// let index = 0;

// function typeWriter() {
//   if (index < text.length) {
//     document.getElementById("typewriter").textContent += text.charAt(index);
//     index++;
//     setTimeout(typeWriter, speed);
//   }
// }

// document.addEventListener("DOMContentLoaded", typeWriter);

const speed = 110;
let index = 0;

function typeWriter() {
  console.log("typewriter works");
  if (index < text.length) {
    document.getElementById("text").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);
