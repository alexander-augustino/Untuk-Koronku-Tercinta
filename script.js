// --- LOGIKA HALAMAN 1: SURAT ---
function openLetter() {
    const letterBox = document.getElementById('letter-box');
    const revealBtn = document.getElementById('reveal-btn');
    
    letterBox.classList.add('open');
    revealBtn.style.display = 'none'; 
    
    setTimeout(() => {
        const popImages = document.querySelectorAll('.pop-img');
        popImages.forEach(img => {
            img.classList.add('show');
        });
    }, 700);
}

// --- LOGIKA HALAMAN 2: LEDAKAN & PESAN ---
function explodeLove() {
    const loveBtn = document.getElementById('love-btn');
    const shadow = document.getElementById('love-shadow');
    const circlePhotos = document.getElementById('circle-photos');
    const midMsg = document.getElementById('mid-message');
    const container = document.querySelector('.love-container');

    // Partikel lebih banyak & sebaran lebih luas
    for (let i = 0; i < 35; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.innerHTML = Math.random() > 0.5 ? '❤️' : '💖';
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 180; 
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        particle.style.left = '50%';
        particle.style.top = '50%';
        
        container.appendChild(particle);
        setTimeout(() => particle.remove(), 900);
    }

    loveBtn.style.transform = 'scale(0)';
    loveBtn.style.opacity = '0';
    setTimeout(() => loveBtn.style.display = 'none', 300);

    setTimeout(() => {
        shadow.style.opacity = '0.7'; // Bekas ledakan lebih jelas
        circlePhotos.classList.add('show-photos');
        midMsg.classList.add('show-msg');
    }, 400);
}

// --- LOGIKA HALAMAN 3: SPIN WHEEL ---
let hasSpun = false;
function spinWheel() {
    if (hasSpun) return; 
    hasSpun = true;

    const wheel = document.getElementById('wheel');
    const targetAngle = (5 * 360) + (360 - 25.7); 
    wheel.style.transform = `rotate(${targetAngle}deg)`;

    setTimeout(() => {
        alert("🎁 YEY KAMU DAPAT HADIAH MISTERIUS! 🎁\n\nHubungi Davin segera untuk mengklaim hadiah kamu sayang! WKWKWK 🥰");
    }, 4700);
}
