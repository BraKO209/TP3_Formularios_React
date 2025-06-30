const lista = document.getElementById("lista-tareas");

fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => {
        const completadas = data.filter(tarea => tarea.completed);
        completadas.forEach(tarea => {
            const li = document.createElement("li");
            li.textContent = tarea.title;
            lista.appendChild(li);
        });
    })
    .catch(error => console.error("Error al obtener las tareas:", error));
