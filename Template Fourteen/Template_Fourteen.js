let landingPage = document.querySelector(".landing-page")
let slides = document.querySelectorAll(".landing-page .slide")
let counter = 1;
let counterInterval;

let arrLeft = document.querySelector(".landing-page .arr-left")
let arrRight = document.querySelector(".landing-page .arr-right")

intervalChangeSlide()

arrLeft.addEventListener("click", (e) => {
    clearInterval(counterInterval)
    counter--;
    if (counter <= 0) {
        counter = 3;
    }
    changeSlide()
    setTimeout(() => {
        intervalChangeSlide()
    }, 500)
})
arrRight.addEventListener("click", () => {
    clearInterval(counterInterval)
    counter++;
    if (counter >= 4) {
        counter = 1;
    }
    changeSlide()
    setTimeout(() => {
        intervalChangeSlide()
    }, 500)
})

let paragraphs = document.querySelectorAll(".landing-page .slide p")
let titles = document.querySelectorAll(".landing-page .slide h2")
let buttons = document.querySelectorAll(".landing-page .slide .button");


let bullets = document.querySelectorAll(".bullets span")
bullets.forEach((span) => {
    span.addEventListener("click", () => {
        clearInterval(counterInterval)
        counter = span.getAttribute("num");
        changeSlide()
        setTimeout(() => {
            intervalChangeSlide()
        }, 500)
    })
})

window.onload = function () {
    showElements()
}
function intervalChangeSlide() {
    clearInterval(counterInterval)
    counterInterval = setInterval(() => {
        counter++;
        if (counter >= 4)
            counter = 1;
        changeSlide();
    }, 7500)
}
function changeSlide() {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    })
    let slide = document.getElementById(`slide-${counter}`)
    slide.classList.add("active");

    bullets.forEach((span) => {
        span.classList.remove("active");
        if (span.getAttribute("num") == counter)
            span.classList.add("active");
    })

    showElements();
}
function showElements() {
    paragraphs.forEach((p) => {
        p.classList.remove("showToTop");
    })
    titles.forEach((title) => {
        title.classList.remove("showToTop");
    })
    buttons.forEach((button) => {
        button.classList.remove("showToTop")
        button.classList.remove("showToCenter");
    })
    slides.forEach((slide) => {
        if (slide.classList.contains("active")) {
            let p = slide.children[0].children[0];
            p.classList.add("showToTop")
            let h2 = slide.children[0].children[1];
            h2.classList.add("showToTop")
            if (slide.children[0].children[2].classList.contains("card")) {
                slide.children[0].children[2].children[0].classList.add("showToCenter")
                slide.children[0].children[2].children[1].classList.add("showToCenter")
            }
            else {
                slide.children[0].children[2].classList.add("showToTop")
            }
        }
    })
}

let upButton = document.querySelector(".up")
upButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#landing-page").scrollIntoView({
        behavior: "smooth",
    })
})
let timer = document.querySelector(".timer")
let header = document.querySelector(".landing-page  .header")
document.addEventListener("scroll", (e) => {
    //( document.documentElement.scrollTop > 501 )
    if (document.documentElement.scrollTop > timer.offsetTop - 95) {
        header.classList.add("scrolling");
        upButton.classList.add("displayButton")
    }
    else {
        header.classList.remove("scrolling")
        upButton.classList.remove("displayButton")
    }
})

let linkSectionsFooter = Array.from(document.querySelectorAll(".footer .links ul a "));
goToSection(linkSectionsFooter)
let linkSectionsHeader = Array.from(document.querySelectorAll(".header ul a"))
goToSection(linkSectionsHeader, true);
function goToSection(elements, changeActive = false) {
    elements.forEach((element) => {
        element.addEventListener("click", (e) => {
            linkSectionsHeader.forEach((ele) => {
                ele.classList.remove("active");
                if (ele.dataset.section == element.dataset.section) {
                    ele.classList.add("active");
                }
            })
            e.preventDefault();
            let section = element.dataset.section;
            document.querySelector(section).scrollIntoView({
                behavior: "smooth",
            })
        })
    })
}

let linkes = document.querySelector(".landing-page .header .container ul")
let toggleMenu = document.querySelector(".toggle-menu")
toggleMenu.addEventListener("click", () => {
    linkes.classList.toggle("showMenu")
})

let times = document.querySelectorAll(".timer .num");
let time = new Date("2024 5 5") - Date.now()
countDown(time);
setInterval(() => {
    time -= 1000;
    countDown(time)
}, 1000)
function countDown(time) {
    let days = Math.floor(time / 1000 / 60 / 60 / 24)
    times[0].innerHTML = days < 10 ? `0${days}` : days;
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60)
    times[1].innerHTML = hours < 10 ? `0${hours}` : hours;
    let minutes = Math.floor((time % (1000 * 60 * 60)) / 1000 / 60)
    times[2].innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    let seconds = Math.floor((time % (1000 * 60)) / 1000)
    times[3].innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}

let theTitles = document.querySelectorAll(".theTitle");
theTitles.forEach((title) => {
    addClassFadeIn(title, "fadeInDown");
    addClassFadeIn(title.nextElementSibling, "fadeInUp");
})

let timerSection = document.querySelectorAll(".timer");
addClassFadeIn(timerSection, "fadeInUp", 0.7)

let servicesSection = document.querySelectorAll(".services .content .box");
addClassFadeIn(servicesSection, "fadeInDown", 0.2)

let aboutSection = document.querySelectorAll(".about .card");
addClassFadeIn(aboutSection, "fadeInUp");

let counterSection = document.querySelectorAll(".counter-section .container .box");
addClassFadeIn(counterSection, "fadeInRight");

let schedulesSection = document.querySelector(".schedules .content");
addClassFadeIn(schedulesSection.children[0], "fadeInRight", 0.2)
addClassFadeIn(schedulesSection.children[1], "fadeInLeft", 0.2)

let speakersSection = document.querySelectorAll(".speakers .content .box");
addClassFadeIn(speakersSection, "fadeInUp", 0.17);

let questionsSection = document.querySelector(".questions .content");
addClassFadeIn(questionsSection, "fadeInUp", 0.7)

let sponsorsSection = document.querySelectorAll(".sponsors .card");
addClassFadeIn(sponsorsSection, "fadeInLeft");

let pricingSection = document.querySelectorAll(".pricing .content .box");
addClassFadeIn(pricingSection, "fadeInRight");

let leftGuidLineSection = document.querySelector(".quideline .content .left-section");
addClassFadeIn(leftGuidLineSection, "fadeInRight", 0.2);

let rightGuidLineSection = document.querySelector(".quideline .content .right-section");
addClassFadeIn(rightGuidLineSection, "fadeInLeft", 0.2);

let newsSection = document.querySelectorAll(".news .card");
addClassFadeIn(newsSection[0], "fadeInRight");
addClassFadeIn(newsSection[1], "fadeInUp", 0.5);
addClassFadeIn(newsSection[2], "fadeInLeft");

let newsLetterSection = document.querySelector(".newsLetter");
addClassFadeIn(newsLetterSection, "fadeInDown", 0.7);

let messageSection = document.querySelector(".message .content");
addClassFadeIn(messageSection, "fadeInUp", 0.7);

let footerSection = document.querySelectorAll(".footer .container .content .box");
addClassFadeIn(footerSection, "fadeInUp");

function addClassFadeIn(section, typeFade, durationDelay = 0.3) {
    let delay = 0;
    if (typeof section.length == "undefined") {
        delay += durationDelay;
        section.style.cssText = `animation-delay: ${delay}s; opacity:0;`
        window.addEventListener("scroll", () => {
            if (window.scrollY + document.documentElement.clientHeight > section.offsetTop + 75) {
                section.classList.add(typeFade);
            }
        })
    }
    else {
        section.forEach((ele) => {
            delay += durationDelay;
            ele.style.cssText = `animation-delay: ${delay}s; opacity:0;`
            window.addEventListener("scroll", () => {
                if (window.scrollY + document.documentElement.clientHeight > ele.offsetTop + 75) {
                    ele.classList.add(typeFade);
                }

            })
        })
    }
};

let arrTitle = ["Web Design Principles and Best Practices", "15 Free Productive Design Tools", "Getting Started With SketchApp"];
let arrTimes = ["10:15am - 12:30pm", "01:00am - 01:45pm", "07:00pm - 09:05pm"]
let arrName = ["JONATHON DOE", "PAUL KOWALSY", "DARYL DIXON"];
let arrNum = ["one", "two", "three"];
let arrShowCard2 = [null, null, null];

let dates = Array.from(document.querySelectorAll(".schedules .left-sec .card"))
let rightSection = document.querySelector(".schedules .right-sec");

dates.forEach((date) => {
    if (date.classList.contains("active")) {
        createContentForRightSection(date.getAttribute("num"))
    }
    date.addEventListener("click", () => {
        dates.forEach((date) => {
            date.classList.remove("active");
        })
        date.classList.add("active");
        window.localStorage.setItem("theChosen", date.getAttribute("theChosen"));
        rightSection.style.cssText = "opacity:0";
        let num = date.getAttribute("num");
        rightSection.innerHTML = "";
        createContentForRightSection(num)
        setTimeout(() => {
            rightSection.style.cssText = "opacity:1";
        }, 100);
    })
})

function createContentForRightSection(num) {
    for (let i = 0; i < num; i++) {
        let card = document.createElement("card");
        card.className = "card";

        let card1 = document.createElement("div");
        card1.className = "card1";
        card1.setAttribute("savaCard", arrNum[i]);

        let image = document.createElement("div");
        image.className = "image";

        let photo = document.createElement("img");
        photo.src = `img/faces/face${i}.jpg`;
        image.append(photo)

        let info = document.createElement("div");
        info.className = "info";

        let time = document.createElement("div");
        time.className = "time";
        time.textContent = arrTimes[i];
        info.append(time);

        let h3 = document.createElement("h3");
        h3.textContent = arrTitle[i];
        info.append(h3);

        let name = document.createElement("div");
        name.className = "name";
        name.textContent = arrName[i];
        info.append(name);

        card1.append(image, info);

        let card2 = document.createElement("div");
        card2.className = "card2";

        if (arrShowCard2[i] != null) {
            card2.classList.add("showCard2");
        }

        let emptyDiv = document.createElement("div");
        emptyDiv.className = "emptyDiv";

        let location = document.createElement("div");
        location.className = "location";

        let description = document.createElement("p");
        description.textContent = "Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis."

        let span1 = document.createElement("span");
        span1.textContent = "location: "
        let span2 = document.createElement("span");
        span2.textContent = " Hall 1 , Building A, Golden Street, Southafrica"

        location.append(description, span1, span2);
        card2.append(emptyDiv, location)

        card.append(card1, card2)
        rightSection.append(card)

    }
    showCardTwo();
}

function showCardTwo() {
    card1s = document.querySelectorAll(".schedules .right-sec .card .card1");
    card1s.forEach((card1, i) => {
        card1.addEventListener("click", () => {
            card1.nextElementSibling.classList.toggle("showCard2");
            if (card1.nextElementSibling.classList.contains("showCard2")) {
                //   window.localStorage.setItem("savaCard", card1.getAttribute("savaCard"));
                arrShowCard2[i] = i;
                saveArrayShowCard2(arrShowCard2);
            }
            else {
                //  window.localStorage.removeItem("savaCard")
                arrShowCard2[i] = null;
                saveArrayShowCard2(arrShowCard2);
            }
        })
    })
}

function saveArrayShowCard2(arrShowCard2) {
    window.localStorage.setItem("arrShowCard2", JSON.stringify(arrShowCard2))
}

if (window.localStorage.getItem("theChosen")) {
    dates.forEach((date) => {
        date.classList.remove("active");
        if (date.getAttribute("theChosen") == window.localStorage.getItem("theChosen")) {
            date.classList.add("active");
            let num = date.getAttribute("num");
            rightSection.innerHTML = "";
            createContentForRightSection(num)
        }
    })
}

if (window.localStorage.getItem("arrShowCard2")) {
    card1s = document.querySelectorAll(".schedules .right-sec .card .card1");
    let arrCard2 = (JSON.parse(window.localStorage.getItem("arrShowCard2")))
    arrShowCard2 = arrCard2;
    for (let i = 0; i < card1s.length; i++) {
        if (arrShowCard2[i] != null) {
            card1s[i].nextElementSibling.classList.add("showCard2");
        }
    }
}

let buttonImages = document.querySelectorAll(".gallery .card .icon")
buttonImages.forEach((button) => {
    button.addEventListener("click", () => {
        createImage(button.nextElementSibling);
    })
})

function createImage(image) {

    let overlay = document.createElement("div")
    overlay.className = "overlay";

    let displayPhoto = document.createElement("div");
    displayPhoto.className = "displayPhoto";

    let img = document.createElement("img");
    img.src = image.src;

    displayPhoto.appendChild(img);
    document.body.append(overlay, displayPhoto);

    overlay.addEventListener("click", () => {
        overlay.remove()
        displayPhoto.remove()
    })
}

let arrQuestionsNum = [];
arrQuestionsNum.length = 8;
let questionsBoxesOne = (document.querySelectorAll(".questions .box .box1 "));

questionsBoxesOne.forEach((box1) => {
    createContentForBoxTwo(box1.parentElement);
    box1.addEventListener("click", () => {
        box1.nextElementSibling.classList.toggle("displayAnswer");
        box1.children[1].classList.toggle("replaceIcon")
        let numBox1 = box1.getAttribute("num");
        if (box1.nextElementSibling.classList.contains("displayAnswer")) {
            arrQuestionsNum[numBox1] = numBox1;
        }
        else {
            arrQuestionsNum[numBox1] = null;
        }
        savaDisplayAnswer(arrQuestionsNum);
    })
})

function createContentForBoxTwo(box) {
    let box2 = document.createElement("div");
    box2.className = "box2";

    let emptyDiv = document.createElement("div")
    emptyDiv.className = "emptyDiv";

    let answer = document.createElement("div")
    answer.className = "answer";
    answer.innerHTML = "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod."

    box2.append(emptyDiv, answer);
    box.append(box2);

}

function savaDisplayAnswer(arrQuestionsNum) {
    window.localStorage.setItem("arrQuestionsNum", JSON.stringify(arrQuestionsNum));
}
if (window.localStorage.getItem("arrQuestionsNum")) {
    let arrNum = (JSON.parse(window.localStorage.getItem("arrQuestionsNum")))
    arrQuestionsNum = arrNum;
    for (let i = 0; i < arrQuestionsNum.length; i++) {
        if (arrNum[i] != null) {
            questionsBoxesOne[i].nextElementSibling.classList.add("displayAnswer");
            questionsBoxesOne[i].children[1].classList.add("replaceIcon");
        }
    }
}

let messageCards = document.querySelectorAll(".message .card input");
messageCards.forEach((input) => {
    input.addEventListener("input", () => {
        let valueOfInput = input.value.trim();
        if (valueOfInput.length == 0) {
            if ((input.nextElementSibling == null)) {
                createLabelForInput(input.parentElement);
            }
        }
        else {
            if (!(input.nextElementSibling == null)) {
                input.nextElementSibling.remove();
            }
        }
    })
    input.addEventListener("blur", () => {
        let valueOfInput = input.value.trim();
        if (input.nextElementSibling == null && valueOfInput.length == 0) {
            createLabelForInput(input.parentElement);
        }
    })
})

let form = document.querySelector(".message .container-form form");
let submitForm = document.querySelector(".message .container-form .submit");
submitForm.addEventListener("click", (e) => {
    let labls = document.querySelectorAll(".message label");
    if (labls.length >= 1) {
        form.classList.remove("fillInput");
        setTimeout(() => {
            form.classList.add("fillInput")
        }, 0);
        e.preventDefault();
    }
    for (let i = 0; i < messageCards.length; i++) {
        if (messageCards[i].value.length == 0) {
            if (messageCards[i].nextElementSibling == null) {
                createLabelForInput(messageCards[i].parentElement);
            }
            form.classList.remove("fillInput");
            setTimeout(() => {
                form.classList.add("fillInput")
            }, 0);
            e.preventDefault();
        }
    }
})

function createLabelForInput(parentInput) {
    let label = document.createElement("label");
    let ContentLable = document.createTextNode(parentInput.children[0].getAttribute("text"));
    label.append(ContentLable);
    parentInput.append(label);
}






// window.addEventListener('scroll', function () {
//     for (let i = 0; i < 9; i++) {
//         if (whichElement() != undefined)
//             linkSectionsHeader[i].classList.remove("active");
//         if (linkSectionsHeader[i].dataset.section == whichElement()) {
//             linkSectionsHeader[i].classList.add("active");
//         }
//         //  console.log(link.dataset.section == whichElement())
//     }

//     // let element = this.document.querySelector(".questions");
//     // var position = element.getBoundingClientRect();

//     // // checking whether fully visible
//     // if (position.top >= 0 && position.bottom <= window.innerHeight) {
//     //     console.log('Element is fully visible in screen');
//     // }

//     // checking for partial visibility
//     // if (position.top < window.innerHeight && position.bottom >= 0) {
//     //     console.log('Element is partially visible in screen');
//     // }
// });
let arrClassElements = ["landing-page", "about", "schedules", "speakers", "gallery", "questions", "sponsors", "pricing", "message"];
function whichElement() {
    for (let i = 8; i >= 0; i--) {
        let element = document.querySelector(`.${arrClassElements[i]}`);
        var position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            let classSection = element.getAttribute("class");
            return `#${classSection}`;
        }
    }
    // for (let i = 8; i >=0 ; i--) {
    //     let element = document.querySelector(`.${arrClassElements[i]}`);
    //     var position = element.getBoundingClientRect();
    //     if (position.top >= 0 && position.bottom <= window.innerHeight) {
    //         let classSection = element.getAttribute("class");
    //         return `#${classSection}`;
    //     }
    // }
}
