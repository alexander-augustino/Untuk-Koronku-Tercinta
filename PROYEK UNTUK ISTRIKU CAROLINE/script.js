// --- LOGIKA HALAMAN 1: SURAT GLASSMORPHISM ---
function openLetter() {
    const letterBox = document.getElementById('letter-box');
    letterBox.classList.add('open');
    
    // Munculkan 3 foto pop-out bergantian setelah surat terbuka sempurna
    setTimeout(() => {
        const popImages = document.querySelectorAll('.pop-img');
        popImages.forEach(img => {
            img.classList.add('show');
        });
    }, 700);
}

// --- LOGIKA HALAMAN 2: LEDAKAN PARTIKEL & FOTO MELINGKAR ---
function explodeLove() {
    const loveBtn = document.getElementById('love-btn');
    const shadow = document.getElementById('love-shadow');
    const circlePhotos = document.getElementById('circle-photos');
    const container = document.querySelector('.love-container');

    // Animasi ledakan hati kecil berhamburan ke luar
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.innerHTML = Math.random() > 0.5 ? '❤️' : '💖';
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 140;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        particle.style.left = '50%';
        particle.style.top = '50%';
        
        container.appendChild(particle);
        setTimeout(() => particle.remove(), 800);
    }

    // Sembunyikan tombol hati utamanya
    loveBtn.style.transform = 'scale(0)';
    loveBtn.style.opacity = '0';
    setTimeout(() => loveBtn.style.display = 'none', 300);

    // Aktifkan efek sisa pudar ledakan & keluarkan 5 foto melingkar
    setTimeout(() => {
        shadow.style.opacity = '1';
        circlePhotos.classList.add('show-photos');
    }, 400);
}

// --- LOGIKA HALAMAN 3: SPIN WHEEL SECURE LOCK ---
let hasSpun = false;

function spinWheel() {
    if (hasSpun) return; 
    hasSpun = true;

    const wheel = document.getElementById('wheel');
    
    // Kunci putaran di juring misterius utama (sec:0)
    const targetAngle = (5 * 360) + (360 - 25.7); 
    wheel.style.transform = `rotate(${targetAngle}deg)`;

    // Alert popup setelah putaran roda berhenti total
    setTimeout(() => {
        alert("🎁 YEY KAMU DAPAT HADIAH MISTERIUS! 🎁\n\nHubungi Davin segera untuk mengklaim hadiah kamu sayang! WKWKWK 🥰");
    }, 4700);
}