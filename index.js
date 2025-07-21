const artista = document.querySelector('.reproductor_musica p');
const titulo = document.querySelector('.reproductor_musica h2');

const progreso = document.getElementById('progreso');
const cancion = document.getElementById('cancion');

const iconocontrol = document.getElementById('icono-control');
const reproducirpausa = document.querySelector('.controles button.reproducir-pausa');
const botonatras = document.querySelector('.controles button.atras');
const botonsiguiente = document.querySelector('.controles button.siguiente');

const canciones = [
    {
        titulo:"Cadillac Solitario",
        artista:"Buitres",
        fuente:"music/Buitres - Cadillac Solitario.mp3"
    },
    {
        titulo:"Sígueme y Te Sigo",
        artista:"Daddy Yankee",
        fuente:"music/Daddy Yankee - Sígueme y Te Sigo.mp3"
    },
    {
        titulo:"Gossip",
        artista:"Maneskin",
        fuente:"music/Maneskin - Gossip.mp3"
    },
    {
        titulo:"Paradise City",
        artista:"Guns N' Roses",
        fuente:"music/Paradise City - Guns N' Roses.mp3"
    },
    {
        titulo:"Stressed Out",
        artista:"Twenty one pilots",
        fuente:"music/Twenty one pilots - Stressed Out.mp3"
    },
];

let indicecancionactual = 0;

function actualizarcancion(){
    titulo.textContent = canciones[indicecancionactual].titulo;
    artista.textContent = canciones[indicecancionactual].artista;
    cancion.src =canciones[indicecancionactual].fuente;
    cancion.addEventListener('loadeddata', function(){});
}

reproducirpausa.addEventListener('click', reproducirpausar);

function reproducirpausar(){
    if (cancion.paused){
        reproducircancion();
    } else {
        pausarcancion();
    }
}

cancion.addEventListener('loadedmetadata', function(){
    progreso.max = cancion.duration;
    progreso.value = cancion.currentTime;
});

function reproducircancion(){
    cancion.play();
    iconocontrol.classList.add('bi-pause-fill');
    iconocontrol.classList.remove('bi-play-fill');
}

function pausarcancion(){
    cancion.pause();
    iconocontrol.classList.remove('bi-pause-fill');
    iconocontrol.classList.add('bi-play-fill');
}

cancion.addEventListener('timeupdate', function(){
    if(!cancion.paused){
        progreso.value = cancion.currentTime;
    }
});

progreso.addEventListener('input', function(){
    cancion.currentTime = progreso.value;
});

progreso.addEventListener('change', function(){
    reproducircancion();
});

botonsiguiente.addEventListener('click', function(){
    indicecancionactual = (indicecancionactual + 1) % canciones.length;
    actualizarcancion();
    reproducircancion();

    
});

botonatras.addEventListener('click', function(){
    indicecancionactual = (indicecancionactual - 1 + canciones.lenght) % canciones.length;
    actualizarcancion();
    reproducircancion();
});
actualizarcancion();