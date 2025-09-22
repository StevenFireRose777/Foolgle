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