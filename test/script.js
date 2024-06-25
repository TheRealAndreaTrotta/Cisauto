function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  
  document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset;
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;
  
    // Frazione della pagina in cui avviene la transizione
    var fraction = scrollPosition / (documentHeight - windowHeight);
  
    // Colori di partenza e arrivo
    var startColor = { r: 255, g: 255, b: 255 }; // Bianco
    var endColor = { r: 173, g: 216, b: 230 };  // LightBlue
  
    // Calcola i nuovi valori RGB
    var newR = Math.round(startColor.r + (endColor.r - startColor.r) * fraction);
    var newG = Math.round(startColor.g + (endColor.g - startColor.g) * fraction);
    var newB = Math.round(startColor.b + (endColor.b - startColor.b) * fraction);
  
    // Converti in formato hex e applica il nuovo colore di sfondo
    var newColor = rgbToHex(newR, newG, newB);
    document.body.style.backgroundColor = newColor;
  });
  