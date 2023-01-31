let settingsBox = document.querySelector(".settings-box");
let toggleSettings = document.querySelector(".toggle-settings");
toggleSettings.addEventListener("click", () => {
    settingsBox.classList.toggle("open");
    toggleSettings.children[0].classList.toggle("fa-spin")
})

function active(elements, targetElement) {
    elements.forEach((element) => {
        element.classList.remove("active");
    })
    targetElement.classList.add("active");
}

let arrColor = Array.from(document.querySelectorAll(".colors-list li"));
arrColor.forEach(li => {
    li.addEventListener("click", function () {
        active(arrColor, li);
        document.documentElement.style.setProperty('--main-color', li.getAttribute("data-color"))
        // (li.dataset.color);
        window.localStorage.setItem("color", li.dataset.color);
    })
})
if (window.localStorage.getItem("color")) {
    document.documentElement.style.setProperty('--main-color', window.localStorage.getItem("color"))
    arrColor.forEach(li => {
        li.classList.remove("active");
        if (li.dataset.color == window.localStorage.getItem("color")) {
            li.classList.add("active");
        }
    })
}

let backgroundInterval;
let landingPage = document.querySelector(".landing-page");
function randomizeImg() {
    clearInterval(backgroundInterval);
    let c = 1;
    backgroundInterval = setInterval(() => {
        // c = Math.ceil(Math.random() * 5);
        window.localStorage.setItem("NumImage", c);
        landingPage.style.cssText = ` background-image: url("imgs/0${c++}.jpg");`
        if (c == 6)
            c = 1;
    }, 3500)
}
randomizeImg();
if (window.localStorage.getItem("NumImage")) {
    landingPage.style.cssText = ` background-image: url("imgs/0${window.localStorage.getItem("NumImage")}.jpg");`
}

let spansRandom = Array.from(document.querySelectorAll(".random-backgrounds span"))
spansRandom.forEach((span) => {
    span.addEventListener("click", function () {
        active(spansRandom, span);
        window.localStorage.setItem("randomBackground", span.dataset.background)
        if (span.dataset.background == "yes") {
            randomizeImg();
        }
        else {
            clearInterval(backgroundInterval);
        }
    })
})

if (window.localStorage.getItem("randomBackground")) {
    spansRandom.forEach((span) => {
        span.classList.remove("active");
        if (window.localStorage.getItem("randomBackground") == span.dataset.background)
            span.classList.add("active");
    })
    if (window.localStorage.getItem("randomBackground") == "yes") {
        randomizeImg();
    }
    else {
        clearInterval(backgroundInterval);
    }
}

let navBullets = document.querySelector(".nav-bullets");
let spansShowBullets = Array.from(document.querySelectorAll(".show-bullets span"))
spansShowBullets.forEach((span) => {
    span.addEventListener("click", function () {
        active(spansShowBullets, span);
        window.localStorage.setItem("showBullets", span.dataset.show)
        if (span.dataset.show == "yes") {
            navBullets.classList.remove("hidden");
        }
        else {
            navBullets.classList.add("hidden");
        }
    })
})
if (window.localStorage.getItem("showBullets")) {
    spansShowBullets.forEach((span) => {
        span.classList.remove("active");
        if (window.localStorage.getItem("showBullets") == span.dataset.show)
            span.classList.add("active");
    })
    if (window.localStorage.getItem("showBullets") == "yes") {
        navBullets.classList.remove("hidden");
    }
    else {
        navBullets.classList.add("hidden");
    }
}

let resetOptions = document.querySelector(".reset-options");
resetOptions.addEventListener("click", () => {
    window.localStorage.clear();
    // OR => localStorage.removeItem("...");
    window.location.reload();
})

let bullets = Array.from(document.querySelectorAll(".nav-bullets .bullet"))
let links = Array.from(document.querySelectorAll(".header .links a"))
goToSection(bullets);
goToSection(links);
function goToSection(elements) {
    elements.forEach((element) => {
        element.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(element.dataset.section).scrollIntoView({
                behavior: "smooth",
            })
        })
    })

}


let linksContainer = document.querySelector(".links-container .links");
let toggleMenu = document.querySelector(".toggle-menu");
toggleMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    linksContainer.classList.toggle("open")
    toggleMenu.classList.toggle("menu-active")

})
linksContainer.addEventListener("click", (e) => {
    e.stopPropagation();
})
window.addEventListener("click", (e) => {
    if (e.target != toggleMenu && e.target != linksContainer) {
        linksContainer.classList.remove("open");
        toggleMenu.classList.remove("menu-active")
    }
})

let skills = document.querySelector(".skills");
let skillsBox = Array.from(document.querySelectorAll(".skills .skill-box span"));
window.onscroll = function () {
    if (window.scrollY >= skills.offsetTop - 335) {
        skillsBox.forEach((box) => {
            let progress = box.dataset.progress;
            box.style.width = progress;
        })
    }
}

let galleryImages = Array.from(document.querySelectorAll(".gallery .images-box img"));
galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
        let content = document.createElement("div");
        content.classList.add("pop");

        let tilte = document.createElement("h2");
        let text = document.createTextNode(img.alt);
        tilte.append(text);

        let phote = document.createElement("img");
        //phote.setAttribute("src", `imgs/${img.getAttribute("id")}.jpg`)
        phote.src = img.src;

        let exit = document.createElement("span");
        let letterX = document.createTextNode("X");
        exit.append(letterX);

        content.append(tilte, phote, exit);
        document.body.append(content);

        let overLay = document.createElement("div");
        overLay.classList.add("overlay-2");
        document.body.append(overLay);

        exit.addEventListener("click", () => {
            exit.parentElement.remove();
            overLay.remove();
        })
    })
})


