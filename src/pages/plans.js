// src/pages/plans.js
import { getPlans, addPlan } from '../db.js';

export async function renderPlans(root) {
    root.innerHTML = ''
    const plans = await getPlans();
    root.innerHTML = `
      <div id="plansList" class="main-window">
        ${plans.length > 0 ? 
          plans.map(plan => `
            <div class="card" data-plan="${plan}">
              <h2>${plan.name}</h2>
              <p>Bauch / Beine / Po</p>
            </div>`).join('')

          : '<p>Noch keine Pläne erstellt.</p>'}
      </div>
      <div class="button-div">
        <button id="addPlanBtn">Neuen Plan erstellen</button>
      </div>
    `;

    // EventListener für den "Neuen Plan erstellen"-Button
    document.getElementById('addPlanBtn').addEventListener('click', async () => {
          renderCreatePlan(root);  // Weiter zur Auswahl der Trainingstage
        }
    );

    // Öffnen der Trainingspläne beim anklicken
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', (event) => {
        const plan = event.target.getAttribute('data-plan');
        renderEditPlan(root, planName, days);  // Nach Auswahl der Tage weiter zu den Einheiten
      });
    });
}

// Seite für das Erstellen eines Plans
function renderCreatePlan(root) {
  const pageHeader = document.getElementById('pageheader');
  pageHeader.innerHTML = '<h1>Plan erstellen</h1>'

  root.innerHTML = `
    <div class="main-window">
      <input type="text" id="name" name="name" value="Plan 1">
      <p class="decent-text-color">Wie viele Tage willst du trainieren?</p>
      <div class="days-selector">
        ${[1, 2, 3, 4, 5, 6, 7].map(day => `
          <button class="day-btn" data-days="${day}">${day}</button>
        `).join('')}
      </div>
      <div class="units-list" id="id-unitls-list"></div>
    </div>
  `;

  // Event-Listener für die Buttons, um die Anzahl der Tage auszuwählen
  document.querySelectorAll('.day-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      // Entferne die Klasse 'active' von allen Buttons
      document.querySelectorAll('.day-btn').forEach(btn => {
        btn.classList.remove('active');
      });

      // Füge die Klasse 'active' dem geklickten Button hinzu
      event.target.classList.add('active');

      // Erstelle die Karten mit den Einheiten
      const days = event.target.getAttribute('data-days');
      const unitsList = document.getElementById('id-unitls-list');
      unitsList.innerHTML = `
      ${Array.from({ length: days }, (_, i) => `
          <div class="card unit-card" data-unit="${i + 1}">
            <h2>Einheit ${i + 1}</h2>
            <p class="decent-text-color">Klicke, um Übungen hinzuzufügen</p>
          </div>
        `).join('')}
      `
    });
  });

  // EventListener für die Einheiten-Karten
  document.querySelectorAll('.unit-card').forEach(card => {
    card.addEventListener('click', (event) => {
      const unit = event.target.closest('.unit-card').getAttribute('data-unit');
      renderExercises(root, planName, unit);  // Zur Übungsseite für diese Einheit
    });
  });
}

// Einheiten für den Plan anzeigen
function renderUnits(root, planName, days) {
  root.innerHTML = `
    <div class="main-window">
      <h1>Einheiten für ${planName}</h1>
      <p>Wähle eine Einheit aus:</p>
      <div class="units-list">
        ${Array.from({ length: days }, (_, i) => `
          <div class="card unit-card" data-unit="${i + 1}">
            <h2>Tag ${i + 1}</h2>
            <p>Klicke, um Übungen hinzuzufügen</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // EventListener für die Einheiten-Karten
  document.querySelectorAll('.unit-card').forEach(card => {
    card.addEventListener('click', (event) => {
      const unit = event.target.closest('.unit-card').getAttribute('data-unit');
      renderExercises(root, planName, unit);  // Zur Übungsseite für diese Einheit
    });
  });
}

// Übungen für eine bestimmte Einheit anzeigen
function renderExercises(root, planName, unit) {
  root.innerHTML = `
    <div class="main-window">
      <h1>Übungen für Tag ${unit}</h1>
      <p>Füge Übungen hinzu:</p>
      <div id="exercises-list"></div>
      <div class="button-div">
        <button id="addExerciseBtn">Neue Übung erstellen</button>
      </div>
    </div>
  `;

  // EventListener für das Hinzufügen von Übungen
  document.getElementById('addExerciseBtn').addEventListener('click', () => {
    const exerciseName = prompt('Name der neuen Übung:');
    if (exerciseName) {
      addExerciseToUnit(planName, unit, exerciseName);  // Übung hinzufügen
      renderExercises(root, planName, unit);  // Seite neu rendern, um die neue Übung anzuzeigen
    }
  });
}

// Dummy-Funktion, um eine Übung hinzuzufügen (IndexedDB Logik kann später integriert werden)
function addExerciseToUnit(planName, unit, exerciseName) {
  // Hier würdest du die Übung in der Datenbank speichern
  console.log(`Übung "${exerciseName}" zu Tag ${unit} des Plans "${planName}" hinzugefügt.`);
}

function debugglog() {
  console.log('Du bist doof')
}