class Language {

    language_name
    country_code

}

let request = new XMLHttpRequest();
request.open("GET","/assets/language/german.json", false);
request.send(null);
let array = []
JSON.parse(request.responseText, (key, value) => {
    array[key] = value
});

document.getElementsByName("ab").forEach(element => {
    console.log(element.id)
})