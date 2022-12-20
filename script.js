const toggleButton = document.getElementsByClassName('toggleButton')[0]
const indexLink = document.getElementsByClassName('indexLink')[0]

toggleButton.addEventListener('click', ()=>{
    indexLink.classList.toggle('active')
})

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked=true;
    counter++;
    if (counter > 4){
        counter = 1;
    }
}, 5000);