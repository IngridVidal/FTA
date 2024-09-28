// plans.js
export function renderPlans(root) {
  const plansElement = document.createElement('div');
  plansElement.innerHTML = `
    <h1 class="page-header">Meine Pläne</h1>
    <p>Hier kannst du deine Trainingspläne verwalten.</p>
  `;
  root.appendChild(plansElement);
}
