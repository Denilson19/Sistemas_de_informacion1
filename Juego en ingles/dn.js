// Definir un array con las preguntas y sus respuestas
var preguntas = [
    {
        pregunta: "¿Cuál es la capital de España?",
        respuestas: {
            a: "Madrid",
            b: "Barcelona",
            c: "Valencia",
            d: "Sevilla"
        },
        respuestaCorrecta: "a"
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        respuestas: {
            a: "Amazonas",
            b: "Nilo",
            c: "Yangtze",
            d: "Misisipi"
        },
        respuestaCorrecta: "b"
    },
    // Agregar más preguntas
];

var puntaje = 0;
var preguntaActual = 0;
var cantidadPreguntas = preguntas.length;

// Función para mostrar la pregunta actual
function mostrarPregunta() {
    var pregunta = preguntas[preguntaActual];
    var preguntaHTML = '<p>' + pregunta.pregunta + '</p>';
    var opcionesHTML = '';
    for (letra in pregunta.respuestas) {
        opcionesHTML += '<input type="radio" name="pregunta' + preguntaActual + '" value="' + letra + '">' + pregunta.respuestas[letra] + '<br>';
    }
    document.getElementById('preguntas').innerHTML = preguntaHTML + opcionesHTML;
}

// Función para comprobar la respuesta seleccionada y actualizar el puntaje
function comprobarRespuesta() {
    var respuestaSeleccionada = document.querySelector('input[name="pregunta' + preguntaActual + '"]:checked').value;
    if (respuestaSeleccionada === preguntas[preguntaActual].respuestaCorrecta) {
        puntaje++;
    }
    preguntaActual++;
    if (preguntaActual < cantidadPreguntas) {
        mostrarPregunta();
    } else {
        var puntajeHTML = '<p>Tu puntaje final es: ' + puntaje + ' de ' + cantidadPreguntas + '</p>';
        document.getElementById('preguntas').innerHTML = puntajeHTML;
        document.getElementById('puntaje').innerHTML = '';
    }
}

// Mostrar la primera pregunta al cargar la página
mostrarPregunta();
