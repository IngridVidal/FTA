// calendar.js
export function renderCalendar(root) {
    const calendarElement = document.createElement('div');
    calendarElement.innerHTML = `
      <h1>Kalender</h1>
      <p>Verfolge deine Workouts im Kalender.</p>
    `;
    root.appendChild(calendarElement);
}
