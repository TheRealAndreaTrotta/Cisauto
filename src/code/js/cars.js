document.addEventListener('DOMContentLoaded', function() {
    // Seleziona tutti gli annunci auto
    var annunci = document.querySelectorAll('.auto-annuncio');

    // Aggiungi un gestore di eventi click a ciascun annuncio
    annunci.forEach(function(annuncio) {
        annuncio.addEventListener('click', function() {
            // Nascondi tutti i dettagli attualmente visibili
            var dettagliAttivi = document.querySelectorAll('.dettagli.visible');
            dettagliAttivi.forEach(function(dettaglio) {
                dettaglio.classList.remove('visible');
            });

            // Seleziona il dettaglio relativo all'annuncio cliccato
            var autoId = this.dataset.id;
            var dettaglioCorrente = document.querySelector(`.dettagli[data-id="${autoId}"]`);

            // Se il dettaglio cliccato è già visibile, nascondilo
            if (dettaglioCorrente.classList.contains('visible')) {
                dettaglioCorrente.classList.remove('visible');
            } else {
                // Nascondi eventuali altri dettagli attivi
                var altriDettagli = document.querySelectorAll('.dettagli.visible');
                altriDettagli.forEach(function(dettaglio) {
                    dettaglio.classList.remove('visible');
                });

                // Mostra il dettaglio dell'annuncio cliccato
                dettaglioCorrente.classList.add('visible');
            }
        });
    });
});
