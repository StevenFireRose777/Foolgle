let timerID;
let lock = false;
const GIFS = ['morshu.gif', 'lizard.gif']

function makeInvisable() {
  document.getElementById("lizard-dance").style.opacity = 0;
  lock = false;
}


document
  .querySelector(".surprise-button")
  .addEventListener("click", function () {
    if (!lock) {
      if (timerID) {
        clearTimeout(timerID);
      }
      // console.log("clicked!");
      document.getElementById("lizard-dance").style.opacity = 1;
      timerID = setTimeout(makeInvisable, 10000); // 10 seconds
      lock = true;
    }
  });
