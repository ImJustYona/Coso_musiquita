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
    {
        titulo:"Al Eyez On Me",
        artista:"2Pac",
        fuente:"music/2Pac - All Eyez On Me.mp3"
    },
    {
        titulo:"Show",
        artista:"Ado",
        fuente:"music/Ado show.mp3"
    },
    {
        titulo:"En La Fila",
        artista:"Asspera",
        fuente:"music/ASSPERA - EN LA FILA (2014).mp3"
    },
    {
        titulo:"All Girls Are The Same",
        artista:"Juice Wrld",
        fuente:"music/All Girls Are The Same - juice wrld.mp3"
    },
    {
        titulo:"Gimme Chocolatte!!",
        artista:"Babymetal",
        fuente:"music/BABYMETAL - Gimme chocolate!! (ギミチョコ)  (Lyrics KanRomEngEsp).mp3"
    },
    {
        titulo:"Alejate de mi",
        artista:"La Cumana",
        fuente:"music/Aléjate de Mi.mp3"
    },
    {
        titulo:"Hard Dreams",
        artista:"Gesaffelstein",
        fuente:"music/Gesaffelstein - Hard Dreams.mp3"
    },
    {
        titulo:"Stars",
        artista:"Marshmello",
        fuente:"music/Marshmello - Stars (Official Music Video) - Marshmello.mp3"
    },
    {
        titulo:"Molinos de viento",
        artista:"Mago de Oz",
        fuente:"music/molinos de viento (Mago de Oz).mp3"
    },
    {
        titulo:"Te vas",
        artista:"Ozuna",
        fuente:"music/Ozuna - Te Vas [LyricsLetra].mp3"
    },
    {
        titulo:"Extravaganza",
        artista:"Jules Gaia",
        fuente:"music/Extravaganza - Jules Gaia.mp3"
    },
    {
        titulo:"Before I Forget",
        artista:"Slipknot",
        fuente:"music/Before I Forget.mp3"
    },
    {
        titulo:"Florencia",
        artista:"Chocolate",
        fuente:"music/Chocolate - Florencia (Video Oficial).mp3"
    },
    {
        titulo:"Gasolina",
        artista:"Daddy Jankee",
        fuente:"music/Daddy Yankee - Gasolina.mp3"
    },
    {
        titulo:"Around The World",
        artista:"Daft Punk",
        fuente:"music/Daft Punk - Around the World (Official Audio) - Daft Punk.mp3"
    },
    {
        titulo:"Venom",
        artista:"Eminem",
        fuente:"music/Eminem - Venom(Official Audio).mp3"
    },
    {
        titulo:"El Cinturón Gris",
        artista:"El Cuarteto De Nos",
        fuente:"music/El Cuarteto De Nos  El Cinturón Gris (En Vivo).mp3"
    },
    {
        titulo:"Insomnia",
        artista:"Eve",
        fuente:"music/Eve  -インソムニアInsomnia Lyrics [KANROMENG].mp3"
    },
    {
        titulo:"Coraline",
        artista:"Maneskin",
        fuente:"music/Måneskin - CORALINE (LyricsTesto).mp3"
    },
    {
        titulo:"Lone Digger",
        artista:"Caravan Palace",
        fuente:"music/Caravan Palace - Lone Digger (Official MV) - CaravanPalace.mp3"
    },
    {
        titulo:"Pain Pain Go Away",
        artista:"Tooboe",
        fuente:"music/痛いの痛いの飛んでいけ  TOOBOE.mp3"
    },
    {
        titulo:"Rape Me",
        artista:"Nirvana",
        fuente:"music/Nirvana- Rape Me (Audio).mp3"
    },
    {
        titulo:"Mi mundo, Tú",
        artista:"Karibe con K",
        fuente:"music/Mi Mundo, Tú.mp3"
    },
    {
        titulo:"El Señor De La Noche",
        artista:"Don Omar",
        fuente:"music/El Señor de la Noche.mp3",
    },
    {
        titulo:"La Poneta",
        artista:"Asspera",
        fuente:"music/ASSPERA - LA PONETA (2014).mp3"
    },
    {
        titulo:"Sing Me To Sleep",
        artista:"Alan Walker",
        fuente:"music/Alan Walker - Sing Me To Sleep - Alan Walker.mp3"
    },
    {
        titulo:"Welcome To The Jungle",
        artista:"Guns n' Roses",
        fuente:"music/Guns'n Roses - Welcome to the Jungle ( Studio Version ) High Quality..mp3"
    },
    {
        titulo:"Fast",
        artista:"Juice Wrld",
        fuente:"music/Juice WRLD - Fast (Official Audio).mp3"
    },
    {
        titulo:"Like We Wrote",
        artista:"Lithe",
        fuente:"music/Like We Wrote.mp3"
    },
    {
        titulo:"Uno x Uno",
        artista:"La Caratula",
        fuente:"music/La Caratula - Uno X Uno (Letra  Video).mp3"
    },
    {
        titulo:"Ain't Got No Haters",
        artista:"Ice Cube",
        fuente:"music/Ice Cube - Ain't Got No Haters [Audio].mp3"
    },
    {
        titulo:"Is This Love",
        artista:"Bob Marley",
        fuente:"music/Is This Love - Bob Marley.mp3"
    },
    {
        titulo:"Lucerito",
        artista:"Monterrojo",
        fuente:"music/Lucerito - monterrojo.mp3"
    },
    {
        titulo:"Brokopoly",
        artista:"Lyre Le Temps",
        fuente:"music/Lyre Le Temps - Brokopoly Official Video - LyreLeTemps.mp3",
    },
    {
        titulo:"Hoy Toca Ser Feliz",
        artista:"Mago de Oz",
        fuente:"music/Mägo de Oz  Hoy Toca Ser Feliz.mp3"
    },
    {
        titulo:"Lonely Night",
        artista:"Porno Graffitti",
        fuente:"music/Porno Graffitti - lonely night.mp3"
    },
    {
        titulo:"Darte Un Beso",
        artista:"Prince Royce",
        fuente:"music/Prince Royce - Darte un Beso (LetraLyrics).mp3"
    },
    {
        titulo:"Rainstorm",
        artista:"Kormac",
        fuente:"music/Rainstorm - Kormac.mp3"
    },
    {
        titulo:"Necio",
        artista:"Romeo Santos",
        fuente:"music/Romeo Santos - Necio (Letra).mp3"
    },
    {
        titulo:"I Keep Hearing Bingo",
        artista:"Scooter",
        fuente:"music/Scooter - I Keep Hearing Bingo.mp3"
    },
    {
        titulo:"One",
        artista:"Metallica",
        fuente:"music/One (Remastered).mp3"
    },
    {
        titulo:"Rastafari Is",
        artista:"Peter Tosh",
        fuente:"music/Peter Tosh - Rastafari Is - DeGigantischeSok.mp3"
    },
    {
        titulo:"Good Cop Bad Cop",
        artista:"Ice Cube",
        fuente:"music/Ice Cube - Good Cop Bad Cop [Audio].mp3"
    },
    {
        titulo:"In Bloom",
        artista:"Nirvana",
        fuente:"music/In Bloom - Nirvana.mp3",
    },
    {
        titulo:"Sweet Child O' Mine",
        artista:"Guns n' Roses",
        fuente:"music/Guns N' Roses - Sweet Child O' Mine.mp3"
    },
    {
        titulo:"Habla Tu Espejo",
        artista:"El Cuarteto de Nos",
        fuente:"music/Habla tu espejo.mp3"
    },
    {
        titulo:"Tengo Un Amor",
        artista:"Toby Love",
        fuente:"music/Toby Love - Tengo Un Amor (Video Version).mp3"
    },
    {
        titulo:"Heathens",
        artista:"Twenty One Pilots",
        fuente:"music/Twenty One Pilots - Heathens (Audio) - Camousabe.mp3"
    },
    {
        titulo:"Tutto Nero",
        artista:"Lucy",
        fuente:"music/Tutto nero.mp3"
    },
    {
        titulo:"The Man Who Sold The World",
        artista:"Nirvana",
        fuente:"music/The Man Who Sold The World - Nirvana.mp3"
    },
    {
        titulo:"The Logical Song",
        artista:"Scooter",
        fuente:"music/The Logical Song.mp3"
    },
    {
        titulo:"Welcome To Jamrock",
        artista:"Damian Marley",
        fuente:"music/Welcome To Jamrock - Damian Marley.mp3"
    },
    {
        titulo:"Yo No Voy A Morir",
        artista:"Buitres",
        fuente:"music/Yo No Voy a Morir.mp3"
    },
    {
        titulo:"El Intruso",
        artista:"Zacarías Ferreira",
        fuente:"music/Zacarías Ferreira - El intruso (Álbum El Amor).mp3",
    },
    {
        titulo:"Ride",
        artista:"Twenty One Pilots",
        fuente:"music/Twenty One Pilots   Ride Audio - Alex rod.mp3"
    },
    {
        titulo:"Three Little Birds",
        artista:"Bob Marley",
        fuente:"music/Three Little Birds (1977) - Bob Marley & The Wailers - Bob Marley.mp3"
    },
    {
        titulo:"Toxicity",
        artista:"System Of A Down",
        fuente:"music/System of a Down - Toxicity (Remastered 2021).mp3"
    },
    {
        titulo:"Snuff",
        artista:"Slipknot",
        fuente:"music/Snuff (2012 Remaster).mp3"
    },
    {
        titulo:"Purple Lambourghini",
        artista:"Skrillex",
        fuente:"music/Skrillex & Rick Ross - Purple Lamborghini Lyrics - Descent Obsidian.mp3"
    },
    {
        titulo:"The Unforgiven",
        artista:"Metallica",
        fuente:"music/The Unforgiven (Remastered).mp3"
    },
    {
        titulo:"Lejos",
        artista:"Toby Love",
        fuente:"music/Toby Love - Lejos.mp3"
    },
    {
        titulo:"Soy El Mismo",
        artista:"Prince Royce",
        fuente:"music/Prince Royce - Soy el Mismo (audio).mp3"
    },
    {
        titulo:"Shake Down",
        artista:"Jules Gaia",
        fuente:"music/Shake Down - Jules Gaia.mp3"
    },
    {
        titulo:"Lets Do It Again",
        artista:"Scooter",
        fuente:"music/Scooter - Lets Do It Again (Official Lyric Video).mp3",
    },
    {
        titulo:"Paola",
        artista:"Monterrojo",
        fuente:"music/Monterrojo - Paola (Audio Oficial).mp3"
    },
    {
        titulo:"Melissa",
        artista:"Porno Graffitti",
        fuente:"music/Melissa - porno graffitti.mp3"
    },
    {
        titulo:"Master Of Puppets",
        artista:"Metallica",
        fuente:"music/Master of Puppets (Remastered).mp3"
    },
    {
        titulo:"Me Gustas Tú",
        artista:"Manu Chao",
        fuente:"music/Manu Chao - Me Gustas Tu (Official Audio) - Manu Chao.mp3"
    },
    {
        titulo:"Alone",
        artista:"Marshmello",
        fuente:"music/Marshmello - Alone (Official Music Video) - Marshmello.mp3"
    },
    {
        titulo:"Zitti E Buoni",
        artista:"Maneskin",
        fuente:"music/Maneskin - Zitti e buoni - HQ.mp3"
    },
    {
        titulo:"Hold The Night",
        artista:"Lyre Le Temps",
        fuente:"music/Lyre Le Temps - Hold The Night - LyreLeTemps.mp3"
    },
    {
        titulo:"Bobo",
        artista:"J Balvin",
        fuente:"music/J Balvin - Bobo (Audio).mp3"
    },
    {
        titulo:"Recuerdame",
        artista:"La Caratula",
        fuente:"music/La Caratula - Recuerdame ( Video Oficial).mp3"
    },
    {
        titulo:"If i could",
        artista:"Lithe",
        fuente:"music/Lithe - If I Could (Audio).mp3",
    },
    {
        titulo:"Borro Cassette",
        artista:"Maluma",
        fuente:"music/Maluma - Borro Cassette.mp3"
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
    indicecancionactual = (indicecancionactual - 1 + canciones.length) % canciones.length;
    actualizarcancion();
    reproducircancion();
});
actualizarcancion();