let contactos = [
    {
        nombre: 'Juan',
        apellido: 'Perez',
    },
];

/**
 * agregarContacto()
 * esta función se va a llamar cuando el usuario envía el formulario con el nuevo contacto para agregar.
 */
const unordenedList=document.querySelector("#lista-contactos");
function agregarContacto(nombre, apellido) {
    
}

/**
 * mostrarListado()
 * esta función se encarga de mostrar en el DOM la lista de todos los contactos guardados en la variable global contactos.
 */
function mostrarListado() {
    // const newLi=document.createElement("li");
    // unordenedList.append(newLi);
    // newLi.textContent=`${nombre} ${apellido}`; despues voy a usar forEach o un for común
}

function handlerFormulario(e) {
    e.preventDefault();
    const inputNombre = e.target.querySelector('#input-nombre');
    const inputApellido = e.target.querySelector('#input-apellido');

    const nombre = inputNombre.value;
    const apellido = inputApellido.value;

    inputNombre.value = "";
    inputApellido.value = "";

    agregarContacto(nombre, apellido);
}

document.querySelector('form').addEventListener('submit', handlerFormulario);