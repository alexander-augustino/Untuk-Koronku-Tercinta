function openLetter() {
    const letterBox = document.getElementById('letter-box');
    const revealBtn = document.getElementById('reveal-btn');
    letterBox.classList.add('open');
    revealBtn.style.display = 'none'; 
    setTimeout(() => {
        document.querySelectorAll('.pop-img').forEach(img => img.classList.add('show'));
    }, 700);
}

function explodeLove() {
    const loveBtn = document.getElementById('love-btn');
    const circlePhotos = document.getElementById('circle-photos');
    const midMsg = document.getElementById('mid-message');
    const container = document.querySelector('.love-container');

    // Partikel menyebar
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.innerHTML = '❤️';
        const angle = Math.random() * Math.PI * 2;
        const distance = 150 + Math.random() * 200; 
        particle.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
        particle.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
        container.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }

    // Tombol pudar
    loveBtn.style.transform = 'scale(0) rotate(20deg)';
    loveBtn.style.opacity = '0';
    
    setTimeout(() => {
        loveBtn.style.display = 'none';
        // Teks muncul tepat di posisi tombol tadi
        midMsg.classList.add('show-msg');
        // Foto terpencar membentuk pola hati
        circlePhotos.classList.add('show-form');
    }, 400);
}

let hasSpun = false;
function spinWheel() {
    if (hasSpun) return; 
    hasSpun = true;
    const wheel = document.getElementById('wheel');
    const targetAngle = (5 * 360) + (360 - 25.7); 
    wheel.style.transform = `rotate(${targetAngle}deg)`;
    setTimeout(() => {
        alert("🎁 YEY KAMU DAPAT HADIAH MISTERIUS! 🎁\n\nHubungi Davin segera untuk mengklaim hadiah kamu sayang!");
    }, 4700);
}
