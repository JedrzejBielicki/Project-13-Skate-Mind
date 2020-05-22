const parkPic = document.querySelector(".park-img");
const mainSection = document.querySelector(".main");
const learnMoreBtn = document.querySelector(".learn-more")


document.addEventListener('scroll', function () {
    if (scrollY > mainSection.offsetHeight / 3) {
        parkPic.classList.add('pic-animation');
    } else {
        parkPic.classList.remove('pic-animation');
    }
})