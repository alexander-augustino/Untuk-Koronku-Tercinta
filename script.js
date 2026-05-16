/* ==========================================================================
   FUNGSI SCRIPT.JS (REVISI FINAL: ALERT HADIAH ASLI)
   ========================================================================== */

function openLetter() {
    const letterBox = document.getElementById('letter-box');
    const revealBtn = document.getElementById('reveal-btn');
    letterBox.classList.add('open');
    revealBtn.style.display = 'none'; 
    setTimeout(() => {
        document.querySelectorAll('.pop-img').forEach((img, index) => {
            setTimeout(() => {
                img.classList.add('show');
            }, index * 200);
        });
    }, 700);
}

function explodeLove() {
    const loveBtn = document.getElementById('love-btn');
    const circlePhotos = document.getElementById('circle-photos');
    const midMsg = document.getElementById('mid-message');
    const container = document.querySelector('.love-container');

    // Ledakan partikel hati
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.innerHTML = '❤️';
        const angle = Math.random() * Math.PI * 2;
        const distance = 120 + Math.random() * 180;
        particle.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
        particle.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
        container.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }

    loveBtn.style.opacity = '0';
    loveBtn.style.transform = 'scale(0)';
    setTimeout(() => {
        loveBtn.style.display = 'none';
        midMsg.classList.add('show-msg');
        circlePhotos.classList.add('show-form');
    }, 400);
}

let currentRotation = 0;
let isSpinning = false; // Mencegah spam klik saat roda berputar

function spinWheel() {
    if (isSpinning) return; // Jika sedang berputar, tombol tidak bisa diklik lagi
    isSpinning = true;

    const wheel = document.getElementById('wheel');
    const randomSpin = Math.floor(Math.random() * 360) + 1800; // Minimal 5 putaran penuh
    currentRotation += randomSpin;
    
    // Mulai animasi putar
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    // MENAMPILKAN ALERT HADIAH ASLI DAVIN TEPAT SAAT RODA BERHENTI (4.5 detik)
    setTimeout(() => {
        // Teks pesan asli yang kamu minta
        alert("🎁 YEY KAMU DAPAT HADIAH MISTERIUS! 🎁\n\nHubungi Davin segera untuk mengklaim hadiah kamu sayang! WKWKWK 🥰");
        isSpinning = false; // Reset status agar bisa di-spin lagi
    }, 4500); // 4500ms = 4.5 detik sesuai durasi transisi di CSS
}
