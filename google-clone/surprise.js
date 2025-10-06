

function makeInvisable(){
  document.getElementById("lizard-dance").style.opacity = 0;
}

let timerID;

document.querySelector(".surprise-button")
  .addEventListener("click", function () {

    if(timerID){
      clearTimeout(timerID);
    }
    // console.log("clicked!");
    document.getElementById("lizard-dance").style.opacity = 1;
    timerID = setTimeout(makeInvisable, 10000); // 10 seconds

  });
