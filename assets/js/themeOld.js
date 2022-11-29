class ThemeHandler {

    theme = ""

    constructor() {
        this.theme = window.localStorage.getItem("theme")
        if (this.theme == null)
            this.theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }

    change() {
        this.load()
        if (this.theme === "dark") {
            document.body.classList.toggle("light")
            window.localStorage.setItem("theme", "light")
            this.theme = "light"
            // cookie.set("theme", "light")
        } else {
            document.body.classList.toggle("dark")
            window.localStorage.setItem("theme", "dark")
            this.theme = "dark";
            // cookie.set("theme", "dark")
        }
    }

    load() {
        document.body.classList.toggle(this.theme)
    }
}

let themeHandler = new ThemeHandler();

function loadTheme() {
    themeHandler.load()
    let themeSwitcher = document.getElementById("theme-switcher")
    if (themeHandler.theme === "light")
        themeSwitcher.checked = true
    themeSwitcher.onclick = function () {
        themeHandler.change()
    }
}