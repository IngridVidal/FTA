// app.js
import { renderPage } from './router.js';

function initApp() {
    // Beim ersten Laden der Seite die aktuelle Seite rendern
    renderPage();

    // EventListener für Hash-Änderungen hinzufügen
    window.addEventListener('hashchange', renderPage);
}

// Die App initialisieren, sobald das DOM geladen ist
document.addEventListener('DOMContentLoaded', initApp);
