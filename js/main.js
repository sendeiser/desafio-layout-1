( ()=> {
    const imagenes = [...document.querySelectorAll('.elem-asside')];
    const galery = document.querySelector('.contenedor_img .img');
  
    function cambio() {
      galery.style.backgroundImage=getComputedStyle(this).backgroundImage;
    }
    imagenes.forEach(img => img.addEventListener('click', cambio));

   /*  const ultima= getComputedStyle(imagenes[0]).backgroundImage;
    galery.src="."+ultima.substr(49,15);
    
    console.log(ultima.substr(50,15)); */
}
)()