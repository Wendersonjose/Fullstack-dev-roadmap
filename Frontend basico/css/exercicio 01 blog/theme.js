(function () {
  const body = document.body;
  const btn = document.getElementById('theme-toggle');

  // Lê preferência salva
  const saved = localStorage.getItem('theme');

  if (saved === 'dark') {
    body.classList.add('dark');
    btn.setAttribute('aria-pressed', 'true');
  } else if (saved === 'light') {
    body.classList.remove('dark');
    btn.setAttribute('aria-pressed', 'false');
  } else {
    // Sem preferência salva: segue o sistema
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      body.classList.add('dark');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.setAttribute('aria-pressed', 'false');
    }
  }

  // Toggle
  btn.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark');
    btn.setAttribute('aria-pressed', String(isDark));
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Atualiza se o sistema mudar (apenas quando não houver preferência salva)
  if (!saved && window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const useDark = e.matches;
      body.classList.toggle('dark', useDark);
      btn.setAttribute('aria-pressed', String(useDark));
    });
  }
})();
