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
        // Countdown is over
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


const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const navBar = document.getElementById('nav-part');

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
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
    } else {
        page1.style.background = 'black';
        page1.style.color = 'white';
        page1.style.transition = '2s';

        page2.style.background = 'black';
        page2.style.color = 'white';
        page2.style.transition = '2s';

        page3.style.background = 'black';
        page3.style.color = 'white';
        page3.style.transition = '2s';

        page4.style.background = 'black';
        page4.style.color = 'white';
        page4.style.transition = '2s';

        foot.style.background = 'black';
        foot.style.color = 'white';
        foot.style.transition = '2s';

        evntslider.style.background = 'black';
        evntslider.style.color = 'white';
        evntslider.style.transition = '2s';

        page5.style.background = 'black';
        page5.style.color = 'white';
        page5.style.transition = '2s';
        navBar.className = "nav-part3";
    }
});

swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()