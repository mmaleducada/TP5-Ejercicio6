
let minutos = 0;
let segundos = 0;
let intervalo;


const minutosInput = document.getElementById('minutos');
const segundosInput = document.getElementById('segundos');
const iniciarBoton = document.getElementById('iniciar');
const pausarBoton = document.getElementById('pausar');
const resetearBoton = document.getElementById('resetear');
const minutosRestantes = document.getElementById('minutos-restantes');
const segundosRestantes = document.getElementById('segundos-restantes');


function iniciarTemporizador() {

    minutos = parseInt(minutosInput.value);
    segundos = parseInt(segundosInput.value);


    if (isNaN(minutos) || isNaN(segundos) || minutos < 0 || minutos > 59 || segundos < 0 || segundos > 59) {
        return;
    }


    let tiempoTotal = minutos * 60 + segundos;


    actualizarTemporizador(tiempoTotal);


    intervalo = setInterval(() => {
        tiempoTotal--;
        if (tiempoTotal < 0) {
            
            detenerTemporizador();
            alert('Tiempo terminado');
        } else {
            actualizarTemporizador(tiempoTotal);
        }
    }, 1000);


    iniciarBoton.disabled = true;
    pausarBoton.disabled = false;
    resetearBoton.disabled = false;
}

function detenerTemporizador() {

    clearInterval(intervalo);

    iniciarBoton.disabled = false;
    pausarBoton.disabled = true;
    resetearBoton.disabled = true;
}

function pausarTemporizador() {

    clearInterval(intervalo);

    iniciarBoton.disabled = false;
    pausarBoton.disabled = true;
    resetearBoton.disabled = false;
}

function resetearTemporizador() {
    detenerTemporizador();

    minutosInput.value = '';
    segundosInput.value = '';


    minutosRestantes.textContent = '00';
    segundosRestantes.textContent = '00';
}

function actualizarTemporizador(tiempoTotal) {

    let minutosRestantes = Math.floor(tiempoTotal / 60);
    let segundosRestantes = tiempoTotal % 60;


    if (minutosRestantes < 10) {
        minutosRestantes = '0' + minutosRestantes;
    }

    if (segundosRestantes < 10) {
        segundosRestantes = '0' + segundosRestantes;
    }


    document.getElementById('minutos-restantes').textContent = minutosRestantes;
    document.getElementById('segundos-restantes').textContent = segundosRestantes;
}


iniciarBoton.addEventListener('click', iniciarTemporizador);
pausarBoton.addEventListener('click', pausarTemporizador);
resetearBoton.addEventListener('click', resetearTemporizador);

