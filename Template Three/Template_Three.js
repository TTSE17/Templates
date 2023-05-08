let skills = document.querySelector(".our-skills")
let spans = document.querySelectorAll(".the-progress span")

window.addEventListener("scroll", () => {
    if (window.scrollY >= skills.offsetTop - 350) {
        spans.forEach((span) => {
            width(span)
        })
    }
})

function width(ele) {
    let att = ele.getAttribute("att");
    ele.style.width = `${att}%`;
}


let units = document.querySelectorAll(".unit span:first-child")

let myDate = new Date(" dec 31 2025 ")

let c = setInterval(() => {
    let nowDate = new Date()
    let currnentDate = myDate - nowDate;

    let days = Math.floor(currnentDate / 1000 / 60 / 60 / 24);
    units[0].innerHTML = days < 10 ? `0${days}` : days

    let hours = Math.floor(currnentDate % (1000 * 60 * 60 * 24) / 1000 / 60 / 60);
    units[1].innerHTML = hours < 10 ? `0${hours}` : hours

    let minutes = Math.floor(currnentDate % (1000 * 60 * 60) / 1000 / 60);
    units[2].innerHTML = minutes < 10 ? `0${minutes}` : minutes

    let seconds = Math.floor(currnentDate % (1000 * 60) / 1000);
    units[3].innerHTML = seconds < 10 ? `0${seconds}` : seconds

}, 1);


let nums = document.querySelectorAll(".number")
let content = document.querySelector(".unique")
let check = false;

addEventListener("scroll", () => {
    if (window.scrollY >= content.offsetTop - 501) {
        if (!check) {
            nums.forEach((num) => {
                increament(num)
            })
        }
        check = true
    }
})

function increament(e) {
    let att = e.getAttribute("set");
    let count = setInterval(() => {
        e.innerHTML++;
        if (e.innerHTML == att) {
            clearInterval(count)
        }
    }, 5000 / att);

}

