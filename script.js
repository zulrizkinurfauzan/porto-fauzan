// Inisialisasi Animasi Scroll (AOS)
AOS.init({
    duration: 1000, 
    once: true 
});

// Fungsi Buka Modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

// Fungsi Tutup Modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Tutup modal saat klik area gelap
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
        setTimeout(() => {
            event.target.style.display = 'none';
        }, 300);
    }
}