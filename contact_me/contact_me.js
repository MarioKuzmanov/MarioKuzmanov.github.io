function onLoad() {
    document.getElementById("go_back").addEventListener("click", function () {
        document.getElementById("go_back").onclick = function () {
            location.href = "../index.html";
        }
    })
    document.getElementById("education_work").addEventListener("click", function () {
        document.getElementById("education_work").onclick = function () {
            location.href = "../education_work/education_work.html"
        }
    })
}

window.addEventListener("load", onLoad)