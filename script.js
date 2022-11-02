const toggleButton = document.getElementsByClassName('toggleButton')[0]
const indexLink = document.getElementsByClassName('indexLink')[0]

toggleButton.addEventListener('click', ()=>{
    indexLink.classList.toggle('active')
})