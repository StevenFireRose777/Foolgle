let timerID;
let lock = false;
const GIFS = ['GIFS/morshu.gif', 'GIFS/lizard.gif', 'GIFS/CS-MAJOR.gif'];
GIFS.forEach(src => {const img = new Image(); img.src = src; });
// Preloads image as soon this script is ran!

function getRandomGIF(){
  return GIFS[Math.floor(Math.random() * 3)];
}


function makeInvisable() {
  document.getElementById("lizard-dance").style.opacity = 0;
  lock = false;
}




function addGIF(GIF){
  const setGif = document.getElementById('lizard-dance');
  setGif.src = GIF;
} 

document
  .querySelector(".surprise-button")
  .addEventListener("click", function () {
    if (!lock) {
      if (timerID) {
        clearTimeout(timerID);
      }
      addGIF(getRandomGIF());
      // console.log("clicked!");

      document.getElementById("lizard-dance").style.opacity = 1;
      timerID = setTimeout(makeInvisable, 10000); // 10 seconds
      lock = true;
    }
  });
