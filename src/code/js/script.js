//NAV-BAR BORDER BOTTOM
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section'); 
    const navbarLinks = document.querySelectorAll('.navbar a'); 

    function updateNavbar() {
        let scrollPosition = window.scrollY;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                let sectionId = section.getAttribute('id');
                navbarLinks.forEach(link => {
                    if (link.getAttribute('href').substring(1) === sectionId) {
                        navbarLinks.forEach(navLink => navLink.classList.remove('active'));
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    updateNavbar();

    window.addEventListener('scroll', updateNavbar);
});


// CURTAIN EFFECT
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

// APPARITION EFFECT
document.addEventListener('DOMContentLoaded', function() {
    const contactSection = document.querySelector('.contact');
    let contactActivated = false; 

    function checkScrollContact() {
        const contactPosition = contactSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (contactPosition < windowHeight * 0.55 && !contactActivated) {
            contactSection.querySelector('.contact-right').classList.add('active');
            contactActivated = true; // Segna come attivato
        }
    }

    window.addEventListener('scroll', checkScrollContact);
    window.addEventListener('resize', checkScrollContact);

    checkScrollContact();
});

document.addEventListener('DOMContentLoaded', function() {
    const newsletterSection = document.querySelector('.newsletter');
    let newsletterActivated = false; 

    function checkScrollNewsletter() {
        const newsletterPosition = newsletterSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (newsletterPosition < windowHeight * 0.90 && !newsletterActivated) {
            newsletterSection.classList.add('active');
            newsletterActivated = true;
        }
    }

    window.addEventListener('scroll', checkScrollNewsletter);
    window.addEventListener('resize', checkScrollNewsletter);

    checkScrollNewsletter();
});


// CIRCLE CURSOR
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

circles.forEach(function(circle) {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener("mousemove", function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function(circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[(index + 1) % circles.length];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();

const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

