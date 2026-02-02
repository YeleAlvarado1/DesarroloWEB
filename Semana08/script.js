function mostrarAlerta() {
  alert("Bienvenido al sistema de climatización");
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let mensaje = document.getElementById("mensaje").value;

  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Todos los campos son obligatorios");
  } else {
    alert("Formulario enviado correctamente");
  }
});
