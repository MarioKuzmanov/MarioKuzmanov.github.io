function onLoad() {
    document.getElementById("go_back").addEventListener("click", function () {
        document.getElementById("go_back").onclick = function () {
            location.href = "../index.html";
        }
    })
    document.getElementById("skills").addEventListener("click", function () {
        document.getElementById("skills").onclick = function () {
            location.href = "../skills/skills.html";
        }
    })

}

window.addEventListener("load", onLoad);