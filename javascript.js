const formulario = document.getElementById("myForm")

formulario.addEventListener("submit", (evento) =>
    {
        evento.preventDefault()
        const nombre = document.getElementById("nombre").value
        const apellido = document.getElementById("apellido").value
        const email = document.getElementById("email").value
        const fono = document.getElementById("fono").value
        alert("¡"+nombre + "! hemos reservado tu entrada y ha sido enviada al mail " + email + " ¡Te esperamos en el festival 🤗")
    })