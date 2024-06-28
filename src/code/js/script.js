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


// CHANGE COLOR BG
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  
  document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset;
    var homeSection = document.getElementById('home');
    var homeHeight = homeSection.offsetHeight;
  
    // Inizio della transizione a metà sezione
    var startTransitionPoint = homeHeight / 2;
  
    // Frazione della sezione home da metà in poi in cui avviene la transizione del colore di sfondo
    var fraction = (scrollPosition - startTransitionPoint) / (homeHeight / 2);
    fraction = Math.min(Math.max(fraction, 0), 1); // Assicura che la frazione sia tra 0 e 1
  
    // Colori di partenza e arrivo per il body
    var startColor = { r: 0, g: 0, b: 0 }; // black
    var endColor = { r: 255, g: 255, b: 255 };  // white
  
    // Calcola i nuovi valori RGB
    var newR = Math.round(startColor.r + (endColor.r - startColor.r) * fraction);
    var newG = Math.round(startColor.g + (endColor.g - startColor.g) * fraction);
    var newB = Math.round(startColor.b + (endColor.b - startColor.b) * fraction);
  
    // Converti in formato hex e applica il nuovo colore di sfondo
    var newColor = rgbToHex(newR, newG, newB);
    document.body.style.backgroundColor = newColor;
  });
  
  
// CHANGE COLOR TEXT
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset;
    var homeSection = document.getElementById('home');
    var homeHeight = homeSection.offsetHeight;

    // Inizio della transizione a metà sezione
    var startTransitionPoint = homeHeight / 2;

    // Frazione della sezione home da metà in poi in cui avviene la transizione del colore di sfondo
    var fraction = (scrollPosition - startTransitionPoint) / (homeHeight / 2);
    fraction = Math.min(Math.max(fraction, 0), 1); // Assicura che la frazione sia tra 0 e 1

    // Colori di partenza e arrivo per il body
    var startColor = { r: 0, g: 0, b: 0 }; // black
    var endColor = { r: 255, g: 255, b: 255 };  // white

    // Calcola i nuovi valori RGB
    var newR = Math.round(startColor.r + (endColor.r - startColor.r) * fraction);
    var newG = Math.round(startColor.g + (endColor.g - startColor.g) * fraction);
    var newB = Math.round(startColor.b + (endColor.b - startColor.b) * fraction);

    // Converti in formato hex e applica il nuovo colore di sfondo
    var newColor = rgbToHex(newR, newG, newB);
    document.body.style.backgroundColor = newColor;

    // Cambia il colore del testo
    var textColor = 'rgb(' + (255 - newR) + ',' + (255 - newG) + ',' + (255 - newB) + ')';
    var textElements = document.querySelectorAll('#text, .content h1, .content p');
    textElements.forEach(function(element) {
      element.style.color = textColor;
    });
  });

  document.addEventListener('scroll', function() {
    var textElement = document.getElementById('text');
    var scrollPosition = window.scrollY || window.pageYOffset;

    // Punto in cui il testo dovrebbe iniziare ad apparire
    var startAppearingPoint = 100;

    // Altezza del viewport in cui il colore dovrebbe completare la transizione
    var endAppearingPoint = 300;

    // Verifica se il testo è già stato visualizzato
    var textVisible = textElement.classList.contains('visible');

    // Se il testo non è ancora visibile e si scorre in basso
    if (!textVisible && scrollPosition > startAppearingPoint) {
      textElement.classList.add('visible');
    }
  });






// script.js

function showArrow(element) {
    var arrow = element.querySelector('.arrow');
    arrow.classList.add('active');
  }
  
  function hideArrow(element) {
    var arrow = element.querySelector('.arrow');
    arrow.classList.remove('active');
  }
  
  