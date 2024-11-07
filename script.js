let anadirNombre = document.querySelector(".anadirNombre");
let anadirEmail = document.querySelector(".anadirEmail");
let email = document.querySelector(".email");
let anadirCiudad = document.querySelector(".anadirCiudad");
let anadirAeropuerto = document.querySelector(".anadirAeropuerto");

anadirNombre.addEventListener("click", function (event) {
  event.preventDefault();
  let nombre = document.getElementById("nombre");
  let name = prompt("Cual es tu nombre?");
  if (name) {
    let option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    nombre.appendChild(option);
  }
});

anadirEmail.addEventListener("click", function (event) {
  event.preventDefault();
  let email = document.getElementById("email");
  let correo = prompt("Cual es tu email?");
  if (correo) {
    let option = document.createElement("option");
    option.value = correo;
    option.textContent = correo;
    email.appendChild(option);
  }
});

anadirCiudad.addEventListener("click", function (event) {
  event.preventDefault();
  let ciudad = document.getElementById("ciudad");
  let city = prompt("Cual es tu ciudad?");
  if (city) {
    let option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    ciudad.appendChild(option);
  }
});

anadirAeropuerto.addEventListener("click", function (event) {
  event.preventDefault();
  let aeropuerto = document.getElementById("aeropuerto");
  let airport = prompt("Cual es tu aeropuerto más cercano?");
  if (airport) {
    let option = document.createElement("option");
    option.value = airport;
    option.textContent = airport;
    aeropuerto.appendChild(option);
  }
});
