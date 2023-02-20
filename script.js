// Script for navigation bar
const hamBurger = document.querySelector('.ham')
const navLink = document.querySelector('.navbar'),
closeBtn = document.querySelector('.clo')

if (hamBurger) {
    hamBurger.addEventListener('click', () => {
        navLink.style.right = 0 + `px`
    })
}
if(closeBtn) {
    closeBtn.addEventListener('click', () => {
        navLink.style.right = -300 + `px`
    })
}


//single product
const mainImg = document.getElementById('main-img')
const smallImg = document.getElementsByClassName('small-img')

smallImg[0].addEventListener('click', () => {
    mainImg.src = smallImg[0].src;
})
smallImg[1].addEventListener('click', () => {
    mainImg.src = smallImg[1].src;
})
smallImg[2].addEventListener('click', () => {
    mainImg.src = smallImg[2].src;
})
smallImg[3].addEventListener('click', () => {
    mainImg.src = smallImg[3].src;
})
smallImg[4].addEventListener('click', () => {
    mainImg.src = smallImg[4].src;
})