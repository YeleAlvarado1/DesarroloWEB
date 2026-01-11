const inputUrl = document.getElementById("urlImagen");
const btnAgregar = document.getElementById("btnAgregar");
const btnEliminar = document.getElementById("btnEliminar");
const galeria = document.getElementById("galeria");

let imagenSeleccionada = null;

// Agregar imagen
function agregarImagen() {
    const url = inputUrl.value.trim();
    if (url === "") return;

    const img = document.createElement("img");
    img.src = url;

    img.addEventListener("click", () => {
        seleccionarImagen(img);
    });

    galeria.appendChild(img);
    inputUrl.value = "";
}

// Seleccionar imagen
function seleccionarImagen(imagen) {
    const imagenes = document.querySelectorAll("#galeria img");
    imagenes.forEach(img => img.classList.remove("seleccionada"));

    imagen.classList.add("seleccionada");
    imagenSeleccionada = imagen;
}

// Eliminar imagen seleccionada
function eliminarImagen() {
    if (imagenSeleccionada) {
        imagenSeleccionada.remove();
        imagenSeleccionada = null;
    }
}

// Eventos
btnAgregar.addEventListener("click", agregarImagen);
btnEliminar.addEventListener("click", eliminarImagen);

inputUrl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        agregarImagen();
    }
});
