const lista = document.querySelector('#pokelista');
let enlace = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`;

const fetchPokemon = async () => {
    try {
        await verSpinner();
        const response = await fetch(enlace);
        const data = await response.json();
        await new Promise(resolve => setTimeout(resolve, 2000));
        data.results.forEach(pokemon => {
            mostrarNombres(pokemon);
        });
        ocultarSpinner();
        if(data.next!==null){
            enlace=data.next;
        }else{
            const btn=document.querySelector("#more");
            btn.setAttribute("disabled", "disabled");
        }
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
    }
}

const verSpinner = async () => {
    document.querySelector(".loader").style.display="block";
    document.getElementById('overlay').style.display = 'block';
}
const ocultarSpinner = async () => {
    document.querySelector(".loader").style.display="none";
    document.getElementById('overlay').style.display = 'none';
}

const mostrarNombres = async (pokemon) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-danger";
    btn.innerText = "Mostrar Mas";
    
    let datosPokemon = null;

    btn.onclick = async function() {
        try {
            if(btn.innerText === "Mostrar Mas") {
                await verSpinner();
            }
            if (!datosPokemon) {
                const traerPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}/`);
                const data = await traerPoke.json();
                datosPokemon = data;
                mostrarMas(btn, datosPokemon);
            } else {
                mostrarMas(btn, datosPokemon);
            }

            ocultarSpinner();
        } catch (error) {
            console.error('Error al obtener los datos adicionales del Pokémon:', error);
        }
    };

    const contenido = `${pokemon.name}`;
    const primerDiv = document.createElement("div");
    primerDiv.className = "col-lg-3 col-md-4 col-sm-6 col-8 text-center mx-auto";
    const segundoDiv = document.createElement("div");
    segundoDiv.className = "card";
    const tercerDiv = document.createElement("div");
    tercerDiv.className = "card-body";
    const newParrafo = document.createElement("p");

    lista.append(primerDiv);
    primerDiv.append(segundoDiv);
    segundoDiv.append(tercerDiv);
    tercerDiv.append(newParrafo, btn);
    newParrafo.textContent = contenido;
};

function mostrarMas(btn, data) {
    if (btn.innerText === "Mostrar Mas") {
        btn.innerText = "Mostrar Menos";
        const contieneInfo = document.createElement("div");
        contieneInfo.className = "info-adicional";
        const id = data.id;
        const nombre = data.name;
        const tipos = data.types.map(numTipo => numTipo.type.name.style).join(', ');
        const habilidad = data.abilities.map(numHabil => numHabil.ability.name).join(', ');
        const movimientos = data.moves.slice(0,4).map(numMov => numMov.move.name).join(', ');
        //creamos el elemento donde se verá la imagen
        const imagen = document.createElement("img");
        imagen.style.width="100px";
        imagen.style.height="100px";
        //pedimos la imagen a la pokeapi y la insertamos
        const pideFoto = data.sprites.front_default;
        imagen.src=`${pideFoto}`;
        //contenido de la info adicional
        const info = `<p>ID: ${id} <br> Nombre: ${nombre} <br>Tipos: ${tipos} <br> Habilidades: ${habilidad} <br> Movimientos: ${movimientos}</p>`;
        
        contieneInfo.innerHTML = info;
        contieneInfo.appendChild(imagen);
        const liPokemon = btn.parentNode;
        liPokemon.insertBefore(contieneInfo, btn); 
    } else {
        btn.innerText = "Mostrar Mas";
        const infoAdicional = btn.parentNode.querySelector('.info-adicional');
        if (infoAdicional) {
            infoAdicional.remove();
        }
    }
}

fetchPokemon();
document.querySelector("#more").addEventListener("click",fetchPokemon);
