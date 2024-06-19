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

//CURTAIN EFFECT
function toggleRotation(iconId) {
    const icon = document.getElementById(iconId);
    const content = icon.parentElement.parentElement.nextElementSibling;

    if (content.classList.contains('active')) {
        icon.classList.remove('rotated');
        content.classList.remove('active');
    } else {
        icon.classList.add('rotated');
        content.classList.add('active');
    }
}

// SEND BUTTON
const button = document.querySelector("button");

const clear =()=>{
    setTimeout(() => {
        button.classList.remove("effect2");
    }, 1000);
}

button.addEventListener("click", () => {
    button.classList.add("effect1");
    setTimeout(() => {
        button.classList.remove("effect1");
        button.classList.add("effect2");
    }, 2000);
});