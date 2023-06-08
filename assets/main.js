const button = document.querySelector('button')
const linksList = document.querySelector('ul')
function handleShowLinks() {
    console.log('oi')
    linksList.classList.toggle('open')
    
    if(linksList.className == 'open') {
        button.textContent = 'Mostrar Menos'
    } else {
        button.textContent = 'Mostrar Mais'
    }
}