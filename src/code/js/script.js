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
document.addEventListener('DOMContentLoaded', function() {
  const heroHeader = document.querySelector('.hero-header');
  const heroContent = document.querySelector('.hero-content');
  const contactSection = document.querySelector('.contact');
  const contactRight = contactSection.querySelector('.contact-right');
  const newsletterSection = document.querySelector('.newsletter');
  
  function checkVisibility(element, fraction, className) {
      const rect = element.getBoundingClientRect();
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

      if (rect.top < viewHeight * fraction && rect.bottom > 0) {
          element.classList.add(className);
      } else {
          element.classList.remove(className);
      }
  }

  function onScroll() {
      checkVisibility(heroHeader, 0.75, 'visible');
      checkVisibility(heroContent, 0.75, 'visible');
      checkVisibility(contactRight, 0.55, 'active');
      checkVisibility(newsletterSection, 0.90, 'active');
  }

  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onScroll);
  onScroll(); // Verifica la visibilità al caricamento della pagina
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
  var heroHeaders = document.querySelectorAll('.hero-header');
  var heroContents = document.querySelectorAll('.hero-content');

  function checkVisibility() {
      var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

      heroHeaders.forEach(function(header) {
          var rectHeader = header.getBoundingClientRect();

          if (rectHeader.top < viewHeight * 0.75 && rectHeader.bottom > 0) {
              header.classList.add('visible');
          } else {
              header.classList.remove('visible');
          }
      });

      heroContents.forEach(function(content) {
          var rectContent = content.getBoundingClientRect();

          if (rectContent.top < viewHeight * 0.75 && rectContent.bottom > 0) {
              content.classList.add('visible');
          } else {
              content.classList.remove('visible');
          }
      });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
  checkVisibility(); // Verifica la visibilità al caricamento della pagina
});


document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.image');

  function checkVisibility() {
      images.forEach(image => {
          const rect = image.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          // Verifica se l'immagine è visibile per almeno il 50% della viewport
          if (rect.top < windowHeight * 0.40 && rect.bottom > 0) {
              image.style.clipPath = 'inset(0 0 0 0)';
          } else {
              image.style.clipPath = 'inset(100% 0 0 0)';
          }
      });
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
  
