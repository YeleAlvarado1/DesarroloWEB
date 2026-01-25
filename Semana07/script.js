// Arreglo de servicios
const productos = [
    {
        nombre: "Aires Acondicionados",
        precio: 25,
        descripcion: "Instalación, limpieza y mantenimiento.",
        imagen: "./Img/Mnatenimiento.png"
    },
    {
        nombre: "Línea Blanca",
        precio: 30,
        descripcion: "Reparación de lavadoras.",
        imagen: "Img/Lavadora.png"
    },
    {
        nombre: "Soporte Técnico",
        precio: 35,
        descripcion: "Diagnóstico y reparacion de neveras y atención especializada.",
        imagen: "img/Nevera.png"
    }
];

const lista = document.getElementById("listaProductos");
const boton = document.getElementById("btnAgregar");

// Función para renderizar productos
function renderizarProductos() {
    lista.innerHTML = "";

    productos.forEach(producto => {
        const li = document.createElement("li");
        li.classList.add("tarjeta");

        const img = document.createElement("img");
        img.src = producto.imagen;
        img.alt = producto.nombre;

        const contenido = document.createElement("div");
        contenido.classList.add("contenido");

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `Precio: $${producto.precio}`;

        const descripcion = document.createElement("p");
        descripcion.textContent = producto.descripcion;

        contenido.appendChild(titulo);
        contenido.appendChild(precio);
        contenido.appendChild(descripcion);

        li.appendChild(img);
        li.appendChild(contenido);

        lista.appendChild(li);
    });
}

// Render inicial
renderizarProductos();

// Botón agregar (dinámico)
boton.addEventListener("click", () => {
    productos.push({
        nombre: "Mantenimiento Preventivo",
        precio: 40,
        descripcion: "Revisión completa del sistema.",
        imagen: "img/aire.jpg"
    });

    renderizarProductos();
});
