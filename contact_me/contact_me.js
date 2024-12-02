function onLoad() {
    document.getElementById("go_back").addEventListener("click", function () {
        document.getElementById("go_back").onclick = function () {
            location.href = "../index.html";
        }
    })
    document.getElementById("work_education").addEventListener("click", function () {
        document.getElementById("work_education").onclick = function () {
            location.href = "../work_education/work_education.html"
        }
    })
}

window.addEventListener("load", onLoad)