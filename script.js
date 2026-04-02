// Gestion du formulaire de contact
(function() {
    // Initialiser EmailJS avec votre clé publique
    emailjs.init('YOUR_PUBLIC_KEY'); // Remplacez par votre clé publique EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission par défaut

    // Récupération des valeurs du formulaire
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    // Paramètres pour EmailJS
    const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Vades Djoko', // Nom du destinataire
        message: message,
    };

    // Envoi via EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams) // Remplacez par vos IDs EmailJS
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Nachricht erfolgreich gesendet!');
            // Réinitialiser le formulaire
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.');
        });
});