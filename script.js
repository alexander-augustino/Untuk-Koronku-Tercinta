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
        const distance = 100 + Math.random() * 180;
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
function spinWheel() {
    const wheel = document.getElementById('wheel');
    const randomSpin = Math.floor(Math.random() * 360) + 1800; 
    currentRotation += randomSpin;
    wheel.style.transform = `rotate(${currentRotation}deg)`;
}
