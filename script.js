// preloader

var loader = document.getElementById('preloader');

window.addEventListener('load', ()=>{
    loader.style.display = 'none';
});

// hamburger menu 

const toggleButton = document.getElementsByClassName('toggleButton')[0]
const indexLink = document.getElementsByClassName('indexLink')[0]

toggleButton.addEventListener('click', ()=>{
    indexLink.classList.toggle('active')
})

// image slider for blog

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked=true;
    counter++;
    if (counter > 4){
        counter = 1;
    }
}, 5000);