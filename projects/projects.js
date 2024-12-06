function onLoad() {
    document.getElementById("go_back").addEventListener("click", function () {
        document.getElementById("go_back").onclick = function () {
            location.href = "../index.html";
        }
    })

}

window.addEventListener("load", onLoad);