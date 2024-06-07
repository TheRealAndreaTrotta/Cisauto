document.addEventListener('DOMContentLoaded', function() {
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Rimuovi la classe 'active' da tutti i link
            navbarLinks.forEach(navLink => navLink.classList.remove('active'));
            // Aggiungi la classe 'active' al link cliccato
            this.classList.add('active');
        });
    });
});

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}