const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

const countdownDate = new Date('2024-10-07T00:00:00');

// Get the countdown elements
const daysElement = document.querySelector('.days');
const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');

// Function to update the countdown
function updateCountdown() {
    const now = new Date();
    const timeLeft = countdownDate.getTime() - now.getTime();

    if (timeLeft < 0) {
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysElement.textContent = String(days).padStart(2, '0');
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');
    }
}



// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initialize the countdown
updateCountdown();

// Define variables
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');
const evntslider = document.getElementById('evntslider');
const foot = document.getElementById('foot');
const toggle = document.getElementById('toggleDark');
const navBar = document.getElementById('nav-part');
const boxM = document.getElementById('Maths');
const boxI = document.getElementById('it');
const boxS = document.getElementById('Science');
const footer = document.getElementById('foot');

// Set dark theme by default
document.body.classList.add('dark-theme');
setDarkTheme();

// Add event listener to toggle button
toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.contains('bi-moon')) {
        setLightTheme();
    } else {
        setDarkTheme();
    }
});

// Function to set light theme
function setLightTheme() {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    page1.style.background = 'white';
    page1.style.color = 'black';
    page1.style.transition = '2s';

    page2.style.background = 'white';
    page2.style.color = 'black';
    page2.style.transition = '2s';

    page3.style.background = 'white';
    page3.style.color = 'black';
    page3.style.transition = '2s';

    page4.style.background = 'white';
    page4.style.color = 'black';
    page4.style.transition = '2s';

    evntslider.style.background = 'white';
    evntslider.style.color = 'black';
    evntslider.style.transition = '2s';

    foot.style.background = 'white';
    foot.style.color = 'black';
    foot.style.transition = '2s';

    page5.style.background = 'white';
    page5.style.color = 'black';
    page5.style.transition = '2s';
    navBar.className = "nav-part2";

    footer.className = "foot1";
    boxM.style.background = 'white';
    boxM.style.color = 'black';
    boxI.style.background = 'white';
    boxI.style.color = 'black';
    boxS.style.background = 'white';
    boxS.style.color = 'black';
}

// Function to set dark theme
function setDarkTheme() {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    page1.style.background = '#333';
    page1.style.color = '#fff';
    page1.style.transition = '2s';

    page2.style.background = '#333';
    page2.style.color = '#fff';
    page2.style.transition = '2s';

    page3.style.background = '#333';
    page3.style.color = '#fff';
    page3.style.transition = '2s';

    page4.style.background = '#333';
    page4.style.color = '#fff';
    page4.style.transition = '2s';

    evntslider.style.background = '#333';
    evntslider.style.color = '#fff';
    evntslider.style.transition = '2s';

    foot.style.background = '#333';
    foot.style.color = '#fff';
    foot.style.transition = '2s';

    page5.style.background = '#333';
    page5.style.color = '#fff';
    page5.style.transition = '2s';
    navBar.className = "nav-part";

    footer.className = "foot";
    boxM.style.background = '#333';
    boxM.style.color = '#fff';
    boxM.style.border = '#fff';
    boxI.style.background = '#333';
    boxI.style.color = '#fff';
    boxI.style.border = '#fff';
    boxS.style.background = '#333';
    boxS.style.color = '#fff';
    boxS.style.border = '#fff';
}

// Add the button to the page
const themeToggle = document.createElement('button');
themeToggle.id = 'toggleDark';
themeToggle.className = 'bi bi-moon';
themeToggle.style.position = 'fixed';
themeToggle.style.top = '10px';
themeToggle.style.right = '10px';
themeToggle.style.background = 'transparent';
themeToggle.style.border = 'none';
themeToggle.style.fontSize = '24px';
themeToggle.style.cursor = 'pointer';

document.body.appendChild(themeToggle);

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()