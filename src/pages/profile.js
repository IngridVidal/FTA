// profile.js
export function renderProfile(root) {
    const profileElement = document.createElement('div');
    profileElement.innerHTML = `
      <h1>Mein Profil</h1>
      <p>Verwalte deine Profildaten und Einstellungen.</p>
    `;
    root.appendChild(profileElement);
}
