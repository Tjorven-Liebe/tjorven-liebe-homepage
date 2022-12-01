class Theme {
    name
    color

    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}

let list = [
    new Theme("Deep ocean", "#0F111A"),
    new Theme("Arc dark", "#2f343f"),
    new Theme("One light", "#F4F4F4"),
    new Theme("Github Dark", "#24292e"),
    new Theme("Light Owl", "#f0f0f0"),
    new Theme("Night Owl", "#011627"),
    new Theme("Night Owl", "#011627"),
    new Theme("Night Owl", "#011627")
]

let themeList = document.getElementById("theme-list")

list.forEach(item => {
    // let li = document.createElement("li")


    let a = document.createElement("a")
    // li.innerHTML = a.innerHTML + item.color
    a.setAttribute("class", "theme-item")
    a.setAttribute("style", "background: " + item.color)
    a.setAttribute( "data-toggle", "tooltip")
    a.setAttribute("data-placement", "left")
    a.setAttribute("title", item.name)
    a.setAttribute("href", "#")
    a.setAttribute("onclick", "changeTheme(\"" + item.name + "\")")
    themeList.appendChild(a)
})

function load() {
    let item = localStorage.getItem("theme") || "arc_dark";
    changeTheme(item)
}

function changeTheme(name) {
    localStorage.removeItem("theme")
    list.forEach(item => {
        document.body.classList.remove(item.name.toLowerCase().replace(" ", "_"));
    })
    document.body.classList.add(name.toLowerCase().replace(" ", "_"));
    localStorage.setItem("theme", name.toLocaleString().replace(" ", "_"))
}
themeList.classList.add("hidden");
let toggled = false;
let onTab = false;
let themeButton = document.getElementById("theme-button");
themeButton.addEventListener("mouseover", function () {
    themeList.classList.remove("hidden");
    toggled = true;
});

themeList.addEventListener("mouseover", function () {
    if (toggled) {
        onTab = true;
        themeList.classList.remove("hidden")
    }
})

themeList.addEventListener("mouseleave", function () {
    if (toggled) {
        onTab = false;
        themeList.classList.add("hidden")
    }
})

themeButton.addEventListener("mouseleave", function () {
    themeList.classList.add("hidden")
})