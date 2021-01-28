document.addEventListener = ('DOMContentLoaded',function(){
    scrollNav();
    navegacionFija();
});
function navegacionFija(){
    const barra = document.querySelector('.header')
    //Registar el Intersection observer
    const observer  = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo')
        }else{
            barra.classList.add('fijo')
        }
    })

    //Elemento a observar
    observer.observe(document.querySelector('.video'));
}

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacion-principal a')

    enlaces.forEach(function(enlace){
        enlace.addEventListener('click',function(e){
            e.preventDefault();
            const seccion  = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
}
document.addEventListener('DOMContentLoaded',function(){
    crearGaleria();
})

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')
    for(let i = 1; i<=12; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;

        //añadir la funcion  de mostrar Imagen
        imagen.onclick = mostrarImagen;
        imagen.dataset.imagenId = i; 

        const lista = document.createElement('LI');
        lista.appendChild(imagen);
        galeria.appendChild(lista);

        
    }
}
function mostrarImagen(e){
    
 const id =  parseInt(e.target.dataset.imagenId);

 //generar la imagen 

 const imagen = document.createElement('IMG');
 imagen.src = `build/img/grande/${id}.webp`

 const overlay = document.createElement('DIV');
 overlay.appendChild(imagen);
 overlay.classList.add('overlay');

 //boton cerrar imagen
 const cerrarImagen = document.createElement('P')
 cerrarImagen.textContent = 'X';
 cerrarImagen.classList.add('cerrar');
 overlay.appendChild(cerrarImagen);

 //click en cuaquier lado se cierra
 overlay.onclick = function(){
     overlay.remove();
     body.classList.remove('fijar');
 }
 //cuando se presiona x se cierra la imagen

 cerrarImagen.onclick = function (){
 overlay.remove();
 body.classList.remove('fijar');
 
}


 //Mostrar en el HTML
 const body = document.querySelector('body')
 body.appendChild(overlay);
 body.classList.add('fijar');
}