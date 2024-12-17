function onLoad() {
    let x = document.getElementsByClassName("btn")
    x[0].addEventListener("click", function () {
        location.href = "../index.html";
    });
    x[1].addEventListener("click", function () {
        location.href = "../projects/projects.html";
    });
}

window.addEventListener("load", onLoad);