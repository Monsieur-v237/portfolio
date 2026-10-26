// Mobiles Menü: Button blendet die Navigation unter 768 px ein und aus
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

function setMenu(open) {
    navMenu.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
}

navToggle.addEventListener('click', () => {
    setMenu(navToggle.getAttribute('aria-expanded') !== 'true');
});

// Nach Klick auf einen Menüpunkt oder mit Escape wieder schließen
navMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
});

// CV-Buttons erst zeigen, wenn die PDF im Repo liegt (vermeidet tote Links)
const cvLinks = document.querySelectorAll('[data-cv]');
if (cvLinks.length) {
    fetch(cvLinks[0].getAttribute('href'), { method: 'HEAD' })
        .then((response) => {
            if (response.ok) cvLinks.forEach((link) => { link.hidden = false; });
        })
        .catch(() => {});
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navMenu.classList.contains('open')) {
        setMenu(false);
        navToggle.focus();
    }
});
