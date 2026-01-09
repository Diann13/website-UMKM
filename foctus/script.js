// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Reveal on scroll
document.querySelectorAll(".reveal").forEach(el => {
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      el.classList.add("active");
    }
  }, { threshold: 0.1 }).observe(el);
});

// WhatsApp form
function sendWA(e) {
  e.preventDefault();

  const msg = `Halo Foctus, saya ingin Memesan jasa foto dengan detail sebagai berikut:,
Nama: ${waName.value}
Email: ${waEmail.value}     
Paket: ${waRequest.value}
Tanggal: ${waDate.value}
Pesan: ${waMsg.value}`;

  window.open(
    `https://wa.me/6281703428151?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
}
