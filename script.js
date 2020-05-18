const parkPic = document.querySelector(".park-img");
const aboutSection = document.querySelector(".about");
const mainSection = document.querySelector(".main");
console.log(scrollY);
document.addEventListener('scroll', function(){
    if(scrollY> mainSection.offsetHeight / 3){
        parkPic.classList.add('pic-animation');
    }
    else{
        parkPic.classList.remove('pic-animation');
    }
})
