//NAV-BAR BORDER BOTTOM
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

//GOOGLE MAPS
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

//CURTAIN
document.addEventListener("DOMContentLoaded", function() {
    const toggleTitles = document.querySelectorAll(".toggle-title");

    toggleTitles.forEach(title => {
        title.addEventListener("click", function() {
            const content = this.nextElementSibling;
            content.classList.toggle("active");
        });
    });
});



function toggleRotation() {
    const icon = document.querySelector('.bx');
    icon.classList.toggle('rotated');
}


