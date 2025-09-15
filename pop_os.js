(function () {
document.getElementById("searchLink").addEventListener("click", function(e) {
  e.preventDefault();
  let searchBar = document.getElementById("searchBar");
  searchBar.style.display = (searchBar.style.display === "block") ? "none" : "block";
});
document.getElementById("cartLink").addEventListener("click", function(e) {
  e.preventDefault();
  let cartBox = document.getElementById("cartBox");
  cartBox.style.display = (cartBox.style.display === "block") ? "none" : "block";
});
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.style.display === 'flex';
      nav.style.display = open ? 'none' : 'flex';

      if (!open) {
        nav.style.flexWrap = 'wrap';
        nav.style.gap = '18px';
      }
    });
  }
  const carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    const track = carousel.querySelector('[data-track]');
    const slides = Array.from(track.children);
    const prev = carousel.querySelector('.prev');
    const next = carousel.querySelector('.next');
    let index = 0;

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    function go(dir) {
      index = (index + dir + slides.length) % slides.length;
      update();
    }

    prev?.addEventListener('click', () => go(-1));
    next?.addEventListener('click', () => go(1));
    setInterval(() => go(1), 6000);
  }
  function setupModalTriggers() {
    document.querySelectorAll('[data-open-modal]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = btn.getAttribute('data-open-modal');
        const dlg = target ? document.querySelector(target) : null;
        if (dlg && typeof dlg.showModal === 'function') dlg.showModal();
      });
    });

    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const dlg = btn.closest('dialog');
        dlg?.close();
      });
    });
  }

  setupModalTriggers();
  document.querySelectorAll('dialog').forEach(dlg => {
    dlg.addEventListener('click', (e) => {
      const rect = dlg.getBoundingClientRect();
      const inDialog =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (!inDialog) dlg.close();
}); 
});
})();