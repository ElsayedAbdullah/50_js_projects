const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

let load = 0;

const blurring = function () {
  load++;

  if (load > 99) {
    clearInterval(interval);
  }

  loadText.textContent = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};

const interval = setInterval(blurring, 20);

// Javascript - map a range of numbers to another range of numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
