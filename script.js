/* ==========================================================================
   FUNGSI SCRIPT.JS (REVISI FINAL: ANIMASI MULTI-STAGE SPIN & PEAK GLOW)
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
let isSpinning = false;

function spinWheel() {
    if (isSpinning) return; 
    isSpinning = true;

    const wheel = document.getElementById('wheel');
    const wheelBox = document.getElementById('wheel-container');
    
    // FASE 1: Lepas dari background & beri cahaya dasar
    wheelBox.classList.add('wheel-pop');

    const randomSpin = Math.floor(Math.random() * 360) + 1800; 
    currentRotation += randomSpin;
    
    // Mulai putaran roda
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    // FASE 2 KE 3: Detik ke-4 (Roda melambat -> Kilau Maksimal & Ledakan Pelangi)
    setTimeout(() => {
        wheelBox.classList.add('glow-peak');
        explodeGifts(wheelBox);
    }, 4000);

    // FASE RESOLUSI: Detik ke-4.5 (Kembali tertanam -> Muncul Alert)
    setTimeout(() => {
        wheelBox.classList.remove('wheel-pop', 'glow-peak');
        
        // Memunculkan alert hadiah asli tepat setelah roda kembali tenang
        alert("🎁 YEY KAMU DAPAT HADIAH MISTERIUS! 🎁\n\nHubungi Davin segera untuk mengklaim hadiah kamu sayang! WKWKWK 🥰");
        isSpinning = false; 
    }, 4500); 
}

// Fungsi pembantu untuk membuat ledakan kado dengan efek trail pelangi pelan
function explodeGifts(parentContainer) {
    for (let i = 0; i < 15; i++) {
        const gift = document.createElement('div');
        gift.className = 'gift-particle';
        gift.innerHTML = '🎁';
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 120;
        
        gift.style.setProperty('--gtx', `${Math.cos(angle) * distance}px`);
        gift.style.setProperty('--gty', `${Math.sin(angle) * distance}px`);
        
        parentContainer.appendChild(gift);
        setTimeout(() => gift.remove(), 1200);
    }
}
