window.addEventListener("load", function () {
    // loadAnimation()
    document.body.classList.remove("hid");
    // setTimeout(() => {
    //     endAnimation()
    // }, 3000)
})

document.addEventListener("DOMContentLoaded", function () {
    // loadTheme()
    showCookieMessage()
})

function showCookieMessage() {
    let cookie = localStorage.getItem("cookieMessage") || false
    let cookies = document.getElementById("cookies")
    if (cookie === false) {
        cookies.classList.add("show");
    }
}

function acceptCookies() {
    localStorage.setItem("cookieMessage", true)
    document.getElementById("cookies").classList.remove("show")
}

function declineCookies() {
    localStorage.setItem("cookieMessage", false)
    document.getElementById("cookies").classList.remove("show")
}