// stats.js
export function renderStats(root) {
    const statsElement = document.createElement('div');
    statsElement.innerHTML = `
      <h1>Statistiken</h1>
      <p>Hier findest du deine Workout-Statistiken.</p>
    `;
    root.appendChild(statsElement);
}
