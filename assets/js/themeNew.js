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
    new Theme("One light", "#F4F4F4")
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

function changeTheme(name) {
    list.forEach(item => {
        document.body.classList.remove(item.name.toLowerCase().replace(" ", "_"));
    })
    document.body.classList.add(name.toLowerCase().replace(" ", "_"));
}