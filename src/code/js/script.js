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

// ZOOM-OUT
document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset;
    var zoomElement = document.getElementById('zoom-image'); // Cambia l'ID se usi un video
  
    // Calcola la scala in base alla posizione di scorrimento
    var scale = 1 - scrollPosition / (window.innerHeight * 2); // Modifica il fattore per regolare l'effetto di zoom
  
    // Limita la scala minima (opzionale)
    if (scale < 0.5) {
      scale = 0.5; // Impedisce di ridurre troppo l'elemento
    }
  
    // Applica la trasformazione di scala all'elemento
    zoomElement.style.transform = 'scale(' + scale + ')';
  });
  

// PARALLAX
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


// HERO APPEAR
document.addEventListener('DOMContentLoaded', function() {
  var heroContent = document.querySelector('.hero-content');

  function checkVisibility() {
      var rect = heroContent.getBoundingClientRect();
      var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

      // Verifica se il testo è visibile per almeno il 75% 
      if (rect.top < viewHeight * 0.75 && rect.bottom > 0) {
          heroContent.classList.add('visible');
      }
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
  checkVisibility(); // Verifica la visibilità al caricamento della pagina
});










// INFO-ARROW
function showArrow(element) {
    var arrow = element.querySelector('.arrow');
    arrow.classList.add('active');
  }
  
  function hideArrow(element) {
    var arrow = element.querySelector('.arrow');
    arrow.classList.remove('active');
  }
  
