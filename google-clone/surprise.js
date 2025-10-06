

function makeInvisable(){
  document.getElementById("lizard-dance").style.opacity = 0;
}

document.querySelector(".surprise-button")
  .addEventListener("click", function () {
    // console.log("clicked!");
    document.getElementById("lizard-dance").style.opacity = 1;
    setTimeout(makeInvisable, 10000); // 10 seconds

  });
