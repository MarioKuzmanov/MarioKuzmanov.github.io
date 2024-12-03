function onClick() {

    document.getElementById("contact_me").onclick = function () {
        location.href = "contact_me/contact_me.html";
    }

    document.getElementById("work_education").onclick = function () {
        location.href = "work_education/work_education.html";
    }

    document.getElementById("projects").onclick = function () {
        location.href = "https://www.youtube.com/";
    }

    document.getElementById("skills").onclick = function () {
        location.href = "skills/skills.html";
    }
}

function onLoad() {
    document.getElementById("contact_me").addEventListener("click", onClick);
    document.getElementById("work_education").addEventListener("click", onClick);
    document.getElementById("projects").addEventListener("click", onClick);
    document.getElementById("skills").addEventListener("click", onClick);
}


window.addEventListener("load", onLoad)