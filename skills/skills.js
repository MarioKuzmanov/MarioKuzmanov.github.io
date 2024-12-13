function onLoad() {
    let x = document.getElementsByClassName("btn");


    x[0].addEventListener("click", function () {
        location.href = "../index.html";
    });

    x[1].addEventListener("click", function () {
        location.href = "../contact_me/contact_me.html";
    });

}

window.addEventListener("load", onLoad);
