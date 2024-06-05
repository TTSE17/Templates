
document.addEventListener("click", function (event) {
    let clickover = event.target;
    let _opened = document.querySelector(".navbar-collapse").classList.contains("show");
    if (_opened === true && !(clickover.classList.contains("navbar-toggler"))) {
        document.querySelector(".navbar-toggler").click();
    }
})

let links = document.querySelectorAll(".navbar ul li a");
links.forEach((link) => {
    link.addEventListener("click", () => {
        links.forEach((link) => { link.classList.remove("active"); })
        link.classList.add("active");
    })
})