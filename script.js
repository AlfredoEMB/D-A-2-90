const boton = document.getElementById('btn-color');
const bodyElement = document.body;

boton.addEventListener('click', () => {
    bodyElement.classList.toggle('modo-claro');
});

