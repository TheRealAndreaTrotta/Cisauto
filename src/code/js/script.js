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




window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;

    let parallax1 = document.getElementById('parallax-1');
    let parallax2 = document.getElementById('parallax-2');
    let parallax3 = document.getElementById('parallax-3');
    
    // Applicare velocità diverse per ciascun elemento parallax
    parallax1.style.backgroundPositionY = scrollPosition * 0.4 + 'px';
    parallax2.style.backgroundPositionY = scrollPosition * 0.3 + 'px';
    parallax3.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});
