let HTML = document.querySelector("#HTML")
let CSS = document.querySelector("#CSS")
let divSite = document.querySelector("#divSite")


setInterval(() => {
    let CSSAdd = "<style>"+ CSS.value+"</style>"
    let HTMLAdd = HTML.value
    divSite.innerHTML = (CSSAdd + HTMLAdd)
}, 200);