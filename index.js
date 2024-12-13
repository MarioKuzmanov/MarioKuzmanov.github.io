function onClick() {

    document.getElementById("contact_me").onclick = function () {
        location.href = "contact_me/contact_me.html";
    }

    document.getElementById("education_work").onclick = function () {
        location.href = "education_work/education_work.html";
    }

    document.getElementById("projects").onclick = function () {
        location.href = "projects/projects.html";
    }

    document.getElementById("skills").onclick = function () {
        location.href = "skills/skills.html";
    }
}

function onLoad() {
    document.getElementById("contact_me").addEventListener("click", onClick);
    document.getElementById("education_work").addEventListener("click", onClick);
    document.getElementById("projects").addEventListener("click", onClick);
    document.getElementById("skills").addEventListener("click", onClick);
}


window.addEventListener("load", onLoad)