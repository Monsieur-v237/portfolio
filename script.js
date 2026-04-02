// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission par défaut

    // Récupération des valeurs du formulaire
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    // Création des données à envoyer
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('_replyto', email); // Pour que Formspree réponde à l'email de l'utilisateur
    formData.append('message', message);

    // Envoi via Formspree (remplacez YOUR_FORM_ID par votre ID Formspree)
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Nachricht erfolgreich gesendet!');
            // Réinitialiser le formulaire
            document.getElementById('contact-form').reset();
        } else {
            alert('Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.');
        }
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.');
    });
});