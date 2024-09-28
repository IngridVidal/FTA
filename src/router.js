// router.js
import { renderPlans } from './pages/plans.js';
import { renderCalendar } from './pages/calendar.js';
import { renderProfile } from './pages/profile.js';
import { renderStats } from './pages/stats.js';

export function renderPage() {
    const root = document.getElementById('app');
    const route = window.location.hash || '#calendar'; // Fallback zu #/calendar, wenn kein Hash vorhanden

    root.innerHTML = ''; // Vorherigen Inhalt leeren

    switch (route) {
        case '#plans':
            renderPlans(root);
            break;
        case '#calendar':
            renderCalendar(root);
            break;
        case '#stats':
            renderStats(root);
            break;
        case '#profile':
            renderProfile(root);
            break;
        default:
            renderPlans(root); // Fallback auf "Meine Pläne"
    }
}

