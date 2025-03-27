const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
];

let currentIndex = 0;
let isSlide1Active = true;

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");

slide1.src = images[currentIndex];
slide2.src = images[(currentIndex + 1) % images.length]; 

function updateSlide() {
    const currentSlide = isSlide1Active ? slide1 : slide2;
    const nextSlide = isSlide1Active ? slide2 : slide1;
    
    currentIndex = (currentIndex + 1) % images.length;
    nextSlide.src = images[(currentIndex + 1) % images.length];
    
    nextSlide.classList.add("active");
    currentSlide.classList.remove("active");
    
    isSlide1Active = !isSlide1Active;
}

setInterval(updateSlide, 3000);


const startDate = new Date("2023-11-04T00:00:00"); 
const timeElapsedElement = document.getElementById("timeElapsed");

function getTimeSince() {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

   
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    return `
        <div class="calendar">
            <div class="calendar-item"><span>${years}</span> Ano</div>
            <div class="calendar-item"><span>${months}</span> Meses</div>
            <div class="calendar-item"><span>${days}</span> Dias</div>
            <div class="calendar-item"><span>${hours}</span> Horas</div>
            <div class="calendar-item"><span>${minutes}</span> Min</div>
            <div class="calendar-item"><span>${seconds}</span> Seg</div>
        </div>
    `;
}

function updateTimeElapsed() {
    timeElapsedElement.innerHTML = getTimeSince();
}

setInterval(updateTimeElapsed, 1000);

const heartsContainer = document.querySelector(".hearts-container");

for (let i = 0; i < 250; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "🤍";
    heart.style.left = `${Math.random() * 200}vw`;
    heart.style.animationDuration = `${3 + Math.random() * 15}s`;
    heartsContainer.appendChild(heart);
}

setTimeout(() => {
    function createGlitter() {
        const glitter = document.createElement('div');
        glitter.classList.add('glitter');
        document.body.appendChild(glitter);

        glitter.style.left = Math.random() * window.innerWidth + 'px';
        glitter.style.top = -10 + 'px';
        glitter.style.animationDuration = (Math.random() * 3 + 2) + 's';

        setTimeout(() => {
            glitter.remove();
        }, 5000);
    }
    setInterval(createGlitter, 5);
}, 48000);