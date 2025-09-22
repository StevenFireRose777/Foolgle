document.querySelector('.changer').addEventListener('click', function() {
	const img = document.getElementById('switchable-img');
	if (img.src.includes('sunny.jpg')) {
		img.src = './images/FullMoon2010.jpg';
		img.alt = 'image of moon';
        document.body.style.backgroundColor = 'grey';
	} else {
		img.src = './images/sunny.jpg';
		img.alt = 'image of sun';
        document.body.style.backgroundColor = 'peachpuff'
	}
});

let savedMode = localStorage.getItem('mode');

if(!savedMode){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches_){
        savedMode = 'dark';
    }
    else{
        savedMode = 'light';
    }
}

if(savedMode === 'dark'){
    document.body.style.backgroundColor = 'grey';
}
else{
    document.body.style.backgroundColor = 'peachpuff'
}




// Gets ID attribute from HTML doc
let textInput = document.getElementById('search-query');
 
let searchBtn = document.querySelector('.search-button');
let luckyBTN = document.querySelector('.lucky-button');
// GETS CLASS attribute^
const words = ['cheeseburger', 'Wendys', 'Burger King', 'UC Davis', 'Computer Science', 'AI', 'happy puppies', 'cows', 'bears', 'cookies near me'];

function doSearch(){
    if(!textInput) return; // end function if no inputs
    const query = textInput.value.trim(); // takes out whitespace
    if(!query) return; // ignore empty queries
    const encoded = encodeURIComponent(query); // makes URL-friendly text basically to follow chars like (?, &)
    const url = `https://www.google.com/search?q=${encoded}&safe=active`; // the url itself 
    window.open(url, '_blank'); // changes window
}

function doRandomSearch(){
    // If there is words in the search bar, do a normal search
    if(textInput && textInput.value.trim()){
        doSearch();
        return;
    }

    // Otherwise get a random word from the list and search it
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    const encoded = encodeURIComponent(randomWord);
    const url = `https://www.google.com/search?q=${encoded}&safe=active`;
    window.open(url, '_blank');
}

if(searchBtn){
    searchBtn.addEventListener('click', doSearch); // if user click button
}

if(luckyBTN){
    luckyBTN.addEventListener('click', doRandomSearch);
}

if(textInput){
    // IF user press 'Enter' key on their keyboard!
    textInput.addEventListener('keydown', (e) => {
        if(e.key === 'Enter'){ 
            doSearch();
        }
    });
}