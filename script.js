const parkPic = document.querySelector(".park-img");
const mainSection = document.querySelector(".main");
const aboutSection = document.querySelector(".about");
const learnMoreBtn = document.querySelector(".learn-more")


document.addEventListener('scroll', function () {
    if (scrollY > mainSection.offsetHeight / 3 && scrollY < mainSection.offsetHeight + aboutSection.offsetHeight) {
        parkPic.classList.add('pic-animation');
    } else {
        parkPic.classList.remove('pic-animation');
    }
})