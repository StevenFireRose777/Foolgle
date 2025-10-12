const randomLink = document.getElementById("randomLink");
const image = randomLink.querySelector("img");
const stores = [
  "https://www.apple.com",
  "https://www.target.com",
  "https://www.walmart.com",
  "https://www.bestbuy.com",
  "https://www.costco.com/",
  "https://www.homedepot.com",
  "https://www.lowes.com",
  "https://www.nike.com",
  "https://www.adidas.com",
  "https://www.gamestop.com",
  "https://www.sephora.com",
  "https://www.ulta.com",
  "https://www.macys.com",
  "https://www.nordstrom.com",
  "https://www.staples.com",
  "https://www.petco.com",
  "https://www.petsmart.com",
  "https://www.toysrus.com",
  "https://www.barnesandnoble.com",
  "https://www.dickssportinggoods.com",
];

// function randomStore(){
//     const randomIndex = Math.floor(Math.random() * stores.length);window.open(words[randomIndex], 'blank_');
// }

image.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * stores.length);
  const randomURL = stores[randomIndex];

  // window.location.href = randomURL;
  window.open(randomURL, "_blank");
});
