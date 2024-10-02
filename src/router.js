// router.js
import { renderPlans } from './pages/plans.js';
import { renderCalendar } from './pages/calendar.js';
import { renderProfile } from './pages/profile.js';
import { renderStats } from './pages/stats.js';

export function renderPage() {
    const root = document.getElementById('app');
    const pageHeader = document.getElementById('pageheader');
    const route = window.location.hash || '#calendar'; // Fallback zu #/calendar, wenn kein Hash vorhanden

    // Aktivierten Navigationsbutton hervorheben
    const navLink = document.querySelectorAll('.nav-link');
    navLink.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === route) {
            link.classList.add('active');
        }
    });

    root.innerHTML = ''; // Vorherigen Inhalt leeren

    switch (route) {
        case '#plans':
            pageHeader.innerHTML = '<h1>Meine Pläne</h1>'
            renderPlans(root);
            break;
        case '#calendar':
            pageHeader.innerHTML = '<h1>Kalender</h1>'
            renderCalendar(root);
            break;
        case '#stats':
            pageHeader.innerHTML = '<h1>Statistiken</h1>'
            renderStats(root);
            break;
        case '#profile':
            pageHeader.innerHTML = '<h1>Profil</h1>'
            renderProfile(root);
            break;
        default:
            renderPlans(root); // Fallback auf "Meine Pläne"
    }
}

