let HTML = document.querySelector("#HTML")
let CSS = document.querySelector("#CSS")
let divSite = document.querySelector("#divSite")


document.addEventListener('DOMContentLoaded', function () {
    reqbackup();
});

function reqbackup() {
   let HTMLBackup = localStorage.getItem('htmlBackup')
   let CSSBackup = localStorage.getItem('cssBackup')
   HTML.value = HTMLBackup
   CSS.value = CSSBackup
}

setInterval(() => {
    let CSSAdd = CSS.value
    let write_css = "<style>"+CSSAdd+"</style>"
    let HTMLAdd = HTML.value
    divSite.innerHTML = (write_css + HTMLAdd)
    localStorage.setItem('htmlBackup', HTMLAdd);
    localStorage.setItem('cssBackup', CSSAdd);
}, 200);