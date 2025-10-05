

document.querySelector(".changer").addEventListener("click", function () { // checks if user click on image
  const img = document.getElementById("switchable-img");
  if (img.src.endsWith("sunny.jpg")) {
    img.src = "./images/FullMoon2010.jpg"; // sun image becomes moon image
    img.alt = "image of the moon";
    document.body.style.backgroundColor = "rgb(37,37,38)"; // becomes 'dark' mode
    
  setTopButtonsColor("dark"); // changes font color 
  setFooterBackground("dark");
  setSurpriseButtonBackgroundColor("dark");
    savedMode = "dark";
    localStorage.setItem("mode", savedMode); // saves state 
  } else {
    img.src = "./images/sunny.jpg"; // if moon is clicked
    img.alt = "image of sun";
    document.body.style.backgroundColor = "peachpuff";
    // update top button colors for light mode
  setTopButtonsColor("light");
  setFooterBackground("light");
  setSurpriseButtonBackgroundColor("light");
    savedMode = "light";
    localStorage.setItem("mode", savedMode);
  }
});

let savedMode = localStorage.getItem("mode"); // gets current mode

if (!savedMode) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    savedMode = "dark";
  } else {
    savedMode = "light";
  }
} // checks user's peference whether they using dark or light mode

// function that sets the font color for .top-buttons class
function setTopButtonsColor(mode) {
  const buttons = document.querySelectorAll(".top-buttons, footer, #txt");
  if (!buttons) return; // if there is no buttons
  buttons.forEach((btn) => {
    if (mode === "dark") {
      btn.style.color = "white"; // 'light' mode font color
    } else {
      btn.style.color = "black"; // 'dark' mode font color
    }
  });
}

function setSurpriseButtonBackgroundColor(mode) {
  const surpriseButton = document.querySelector(".surprise-button");
  if (surpriseButton) {
    surpriseButton.style.backgroundColor = mode === "dark" ? "#000" : "grey";
  }
}


function setFooterBackground(mode){
  const footer = document.querySelector("footer");
  if(footer){
    footer.style.backgroundColor = mode === 'dark' ? "rgb(25, 25, 25)" : "rgb(240, 201, 166)";
  }
}

if (savedMode === "dark") {
  document.body.style.backgroundColor = "rgb(37,37,38)";
  setTopButtonsColor("dark");
  setFooterBackground("dark");
  setSurpriseButtonBackgroundColor("dark");
} else {
  document.body.style.backgroundColor = "peachpuff";
  setTopButtonsColor("light");
  setFooterBackground("light");
  setSurpriseButtonBackgroundColor("light");
}

const img = document.getElementById("switchable-img");
if(savedMode === "dark"){
  img.src = "./images/FullMoon2010.jpg";
  img.alt = "image of the moon";
}else{
  img.src = "./images/sunny.jpg";
  img.alt = "image of sun";
}

