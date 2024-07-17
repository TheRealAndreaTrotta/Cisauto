const annunci = [
    {
        immagini: [
            "../../../img/index/cars/PorcheCayenne.webp",
            "../../../img/index/cars/VolvoD4.webp",
            "../../../img/index/cars/ARStelvioNera.webp"
        ],
        currentIndex: 0
    }
    // Aggiungi qui altri annunci se necessario
];

function selezionaImmagine(index, annuncioIndex, fullscreen = false) {
    annunci[annuncioIndex].currentIndex = index;
    const mainImage = document.querySelector(`.auto-scheda[data-index='${annuncioIndex}'] .auto-immagine-principale img`);
    const fullscreenImage = document.getElementById("fullscreenImage");

    mainImage.src = annunci[annuncioIndex].immagini[annunci[annuncioIndex].currentIndex];
    if (fullscreen) {
        fullscreenImage.src = annunci[annuncioIndex].immagini[annunci[annuncioIndex].currentIndex];
    }
    evidenziaMiniatura(annuncioIndex, fullscreen);
    aggiornaIndicatore(annuncioIndex, fullscreen);
}

function cambiaImmagine(direction, fullscreen = false) {
    const annuncioIndex = fullscreen ? fullscreenAnnuncioIndex : currentAnnuncioIndex;
    annunci[annuncioIndex].currentIndex += direction;
    if (annunci[annuncioIndex].currentIndex < 0) {
        annunci[annuncioIndex].currentIndex = annunci[annuncioIndex].immagini.length - 1;
    } else if (annunci[annuncioIndex].currentIndex >= annunci[annuncioIndex].immagini.length) {
        annunci[annuncioIndex].currentIndex = 0;
    }
    selezionaImmagine(annunci[annuncioIndex].currentIndex, annuncioIndex, fullscreen);
}

let currentAnnuncioIndex = 0;
let fullscreenAnnuncioIndex = 0;

function apriSchermoIntero(annuncioIndex) {
    currentAnnuncioIndex = annuncioIndex;
    fullscreenAnnuncioIndex = annuncioIndex;
    const fullscreenElement = document.getElementById("fullscreen");
    const fullscreenImage = document.getElementById("fullscreenImage");
    fullscreenImage.src = annunci[annuncioIndex].immagini[annunci[annuncioIndex].currentIndex];
    fullscreenElement.classList.remove("hidden");
    evidenziaMiniatura(annuncioIndex, true);
    aggiornaIndicatore(annuncioIndex, true);
}

function chiudiSchermoIntero() {
    const fullscreenElement = document.getElementById("fullscreen");
    fullscreenElement.classList.add("hidden");
}

function evidenziaMiniatura(annuncioIndex, fullscreen = false) {
    const miniature = fullscreen
        ? document.querySelectorAll("#fullscreenMiniature .auto-thumbnail")
        : document.querySelectorAll(`.auto-scheda[data-index='${annuncioIndex}'] .auto-miniature .auto-thumbnail`);
    
    miniature.forEach((thumbnail, index) => {
        if (index === annunci[annuncioIndex].currentIndex) {
            thumbnail.classList.add("active");
            if (!fullscreen) {
                thumbnail.scrollIntoView({ behavior: 'smooth', inline: 'center' });
            }
        } else {
            thumbnail.classList.remove("active");
        }
    });
}

function aggiornaIndicatore(annuncioIndex, fullscreen = false) {
    const indicatore = fullscreen
        ? document.getElementById("fullscreenIndicatore")
        : document.querySelector(`.auto-scheda[data-index='${annuncioIndex}'] .auto-indicatore`);
    indicatore.textContent = `${annunci[annuncioIndex].currentIndex + 1}/${annunci[annuncioIndex].immagini.length}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const schede = document.querySelectorAll(".auto-scheda");
    schede.forEach((scheda, index) => {
        scheda.querySelector(".auto-immagine-principale").addEventListener("click", () => apriSchermoIntero(index));
        scheda.querySelectorAll(".auto-thumbnail").forEach((thumbnail, imgIndex) => {
            thumbnail.addEventListener("click", () => selezionaImmagine(imgIndex, index));
        });
        scheda.querySelector(".auto-freccia.sinistra").addEventListener("click", () => cambiaImmagine(-1));
        scheda.querySelector(".auto-freccia.destra").addEventListener("click", () => cambiaImmagine(1));
    });

    document.getElementById("fullscreenClose").addEventListener("click", chiudiSchermoIntero);
    document.getElementById("fullscreenFrecceSinistra").addEventListener("click", () => cambiaImmagine(-1, true));
    document.getElementById("fullscreenFrecceDestra").addEventListener("click", () => cambiaImmagine(1, true));
    document.getElementById("fullscreenMiniature").addEventListener("click", (e) => {
        if (e.target.classList.contains("auto-thumbnail")) {
            const index = Array.from(document.querySelectorAll("#fullscreenMiniature .auto-thumbnail")).indexOf(e.target);
            selezionaImmagine(index, fullscreenAnnuncioIndex, true);
        }
    });
});
