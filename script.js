const parkPic = document.querySelector(".park-img");
const mainSection = document.querySelector(".main");
const aboutSection = document.querySelector(".about");
const learnMoreBtn = document.querySelector(".learn-more")

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    const preloaderText = document.querySelector('.preloader__text')
    preloader.classList.add('preloader--up');
    preloaderText.classList.add('preloader__text--up');
})

document.addEventListener('scroll', function () {
    if (scrollY > mainSection.offsetHeight / 3 && scrollY < mainSection.offsetHeight + aboutSection.offsetHeight) {
        parkPic.classList.add('pic-animation');
    } else {
        parkPic.classList.remove('pic-animation');
    }
})