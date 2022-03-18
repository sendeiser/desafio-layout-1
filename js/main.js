( ()=> {
    const imagenes = [...document.querySelectorAll('.elem-asside')];
    const galery = document.querySelector('.contenedor_img img');
  
    imagenes.map((elem)=>{
      console.log(getComputedStyle(elem).backgroundImage);
      
    })
    const ultima= getComputedStyle(imagenes[0]).backgroundImage;
    galery.src="."+ultima.substr(26,15);
    
    console.log(ultima.substr(50,15));
}
)()