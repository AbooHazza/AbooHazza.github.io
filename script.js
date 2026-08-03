async function loadSection(sectionName, btnElement) {
  const content = document.getElementById('content-area');
  if (!content) return;
  // update active nav button
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');

  try {
    const res = await fetch(`sections/${sectionName}.html`, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const html = await res.text();
    content.innerHTML = html;
  } catch (err) {
    content.innerHTML = `<div class="sec-header"><span class="sec-title">Error</span></div><p style="color:var(--text2)">Could not load section '${sectionName}': ${err.message}</p>`;
    console.error(err);
  }
}

function updateClock() {
  const el = document.getElementById('clock');
  if (!el) return;
  const t = new Date().toLocaleTimeString('en-GB', { hour:'2-digit', minute:'2-digit', second:'2-digit', timeZone:'Asia/Riyadh' });
  el.textContent = 'Riyadh ' + t;
}

document.addEventListener('DOMContentLoaded', () => {
  // load default section (about)
  const defaultBtn = document.querySelector('.nav-btn[data-section="about"]') || document.querySelector('.nav-btn');
  if (defaultBtn) {
    loadSection(defaultBtn.getAttribute('data-section'), defaultBtn);
  }

  updateClock();
  setInterval(updateClock, 1000);

  // allow navigation with keyboard (1-6)
  document.addEventListener('keydown', (e) => {
    if (e.key >= '1' && e.key <= '6') {
      const idx = parseInt(e.key, 10) - 1;
      const btns = Array.from(document.querySelectorAll('.nav-btn'));
      if (btns[idx]) btns[idx].click();
    }
  });
});
