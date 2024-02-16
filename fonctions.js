function ouvrir_onglet(lien_onglet)
{
    window.location.href = lien_onglet;
}

document.addEventListener("DOMContentLoaded", function () {
    var items = document.querySelectorAll('.item');

    // Ajouter un gestionnaire d'événements de clic à chaque élément de la liste
    items.forEach(function (item, index) {
        item.addEventListener('click', function () {
            // Vérifier si l'élément cliqué est impair
            if (index % 2 === 0) {
                // Si l'élément est impair, obtenir l'élément suivant (élément pair)
                var nextItem = items[index + 1];
                // Afficher ou masquer l'élément suivant en alternance
                nextItem.classList.toggle('hidden');
            }
        });
    });
});
