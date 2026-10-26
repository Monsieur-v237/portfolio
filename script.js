// Helles/dunkles Design: Systemeinstellung als Standard, Wahl per Button wird gespeichert
const root = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

function isDark() {
    return root.dataset.theme ? root.dataset.theme === 'dark' : systemDark.matches;
}

function updateThemeButton() {
    if (!themeToggle) return;
    const dark = isDark();
    themeToggle.querySelector('i').className = dark ? 'fas fa-sun' : 'fas fa-moon';
    themeToggle.setAttribute('aria-label', dark ? 'Helles Design aktivieren' : 'Dunkles Design aktivieren');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const next = isDark() ? 'light' : 'dark';
        root.dataset.theme = next;
        try { localStorage.setItem('theme', next); } catch (e) {}
        updateThemeButton();
    });
    systemDark.addEventListener('change', updateThemeButton);
    updateThemeButton();
}

// Mobiles Menü: Button blendet die Navigation unter 768 px ein und aus
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

function setMenu(open) {
    navMenu.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
}

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        setMenu(navToggle.getAttribute('aria-expanded') !== 'true');
    });

    // Nach Klick auf einen Menüpunkt oder mit Escape wieder schließen
    navMenu.addEventListener('click', (event) => {
        if (event.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navMenu.classList.contains('open')) {
            setMenu(false);
            navToggle.focus();
        }
    });
}
