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
