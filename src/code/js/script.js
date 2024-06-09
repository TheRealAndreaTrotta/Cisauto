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

//ROTADE ICON
function toggleRotation() {
    const icon = document.querySelector('.bx');
    icon.classList.toggle('rotated');
}

//CURTAIN EFFECT
function toggleContent(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector('.rotate');

    if (content.classList.contains('active')) {
        // Start closing transition
        content.classList.remove('active');
        arrow.classList.remove('open');
    } else {
        // Start opening transition
        content.style.transition = 'max-height 0.5s ease'; // Set fast transition
        content.classList.add('active');
        arrow.classList.add('open');

        setTimeout(() => {
            content.style.transition = 'max-height 5s ease'; // Revert to slow transition
        }, 500); // Duration of fast opening transition
    }
}


