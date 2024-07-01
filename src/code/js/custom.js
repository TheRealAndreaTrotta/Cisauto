// Funzione per gestire l'effetto di cambio colore del background
function applyColorTransitionToHome() {
    var homeSection = document.getElementById('home');
  
    if (homeSection) {
      // Cambio del colore di sfondo solo per la sezione home nella pagina index.html
      function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
  
      function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
  
      document.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY || window.pageYOffset;
        var homeRect = homeSection.getBoundingClientRect();
  
        // Verifica se la sezione home è visibile nella finestra visibile
        if (homeRect.top < window.innerHeight && homeRect.bottom > 0) {
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
        }
      });
    }
  }

  
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
