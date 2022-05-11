//variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrioBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


cargarEventListeners();

function cargarEventListeners() {
    //cuando agregan un curso presionando 'agregar al carrito'
    listaCursos.addEventListener('click', agregarCurso);

    // elimina productos del carrito 
    carrito.addEventListener ('click', eliminarProducto);

    // vaciar carrito
    vaciarCarrioBtn.addEventListener('click', ()=>{
        articulosCarrito = []; //reseteamos el array

        limpiarHTML(); //limpia el html
    });
};

// Funciones
function agregarCurso(e) {
    e.preventDefault();


    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado)
    }
    alert(`Se agrego ${e.target.parentElement.parentElement.querySelector('h4').textContent} al carrito`);
}

//elimina un productor del carrito
function eliminarProducto(e) {
    console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        //elimina el curso del array
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);

        console.log (articulosCarrito);

        carritoHTML(); //itero sobre el carrito y muestro el html
    }
}

// lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso) {
    console.log(curso);

    // crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if (existe) {
        //actualizamos la cantidad 
        const cursos = articulosCarrito.map( curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; //retorna el objeto actualizado
            } else{
                return curso; //retorna el objeto que no son duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else{
        //agrega elementos al arrays de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }


    console.log(articulosCarrito);

    carritoHTML();
}


// mustra el carrito de compras en el HTML
function carritoHTML() {
    //limpiar el html 
    limpiarHTML();

    //recorre el carrito y genera el html
    articulosCarrito.forEach(curso => {
        const { imagen, titulo, precio, cantidad, id }= curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}">X</a>
            </td>
            
        `;
        //agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}

//eliminar los cursos del tbody
function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
