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

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.innerHTML = '❤️';
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 150;
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
