const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];
const input = document.getElementById("filtro");
const boton = document.getElementById("filtrar");
const resultado = document.getElementById("resultado");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
    const texto = input.value.trim().toLowerCase();
    resultado.innerHTML = "";
    mensaje.textContent = "";

    if (texto === "") {
        mensaje.textContent = "Por favor, escribí algo para filtrar.";
        return;
    }

    const filtradas = palabras.filter(palabra => palabra.toLowerCase().includes(texto));

    if (filtradas.length > 0) {
        filtradas.forEach(palabra => {
            const li = document.createElement("li");
            li.textContent = palabra;
            resultado.appendChild(li);
        });
    } else {
        mensaje.textContent = "No se encontraron coincidencias.";
    }
});