const menuOpen = document.querySelector(".open-btn")
const menuClose = document.querySelector(".close-btn")
const mobileNav = document.querySelector(".mobile-nav")
const navigation = document.querySelector("nav")

menuOpen.addEventListener("click", () => {
    console.log('ducker')
     menuToggle()
})

menuClose.addEventListener("click", () => {
    menuUnToggle()
})

function menuToggle() {
    mobileNav.style.transform = "translate(0%)"
    navigation.style.overflow = "visible"
    mobileNav.style.opacity = "100%"
}

function menuUnToggle() {
    mobileNav.style.transform = "translate(150%)"
    navigation.style.overflow = "hidden"
    mobileNav.style.opacity = "0%"
}
