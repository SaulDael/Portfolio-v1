const hamburgue1 = document.querySelector('.hamburgue');
const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLigth = document.querySelector('.agregar-imagen');
const contendedorLigth = document.querySelector('.image-ligth');


imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'));
    })
});

contendedorLigth.addEventListener('click', (e) => {
    if(e.target != imagenesLigth){
        contendedorLigth.classList.toggle('show')
        imagenesLigth.classList.toggle('showImage')
        hamburgue1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen) => {
    imagenesLigth.src = imagen;
    contendedorLigth.classList.toggle('show');
    imagenesLigth.classList.toggle('showImage');
    hamburgue1.style.opacity = '0'
}
