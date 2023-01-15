let lis = document.querySelectorAll(".portfolio ul li");
let boxes = document.querySelectorAll(".imgs-container .box")

lis.forEach((li) => {

    li.addEventListener("click", function () {
        lis.forEach((li) => {
            li.classList.remove("active");
        })

        this.classList.add("active")
    })

    li.addEventListener("click", () => {

        boxes.forEach((box) => {
            box.style.display = 'none';
        })

        boxes.forEach((box) => {
            if (box.classList.contains(li.getAttribute('id'))) {
                box.style.display = 'block'
            }
        })
    })
})

///////////////////////////////////////////////////

let landing = document.querySelector(".landing");
let prev = document.getElementById("lef")
let next = document.getElementById("rig")
let bullets = document.querySelectorAll(".bullets li")

let counter = 2;

check()

function check() {

    if (counter == 0) {
        prev.classList.add("disabled")
        landing.classList.add("one")
    }

    else if (counter == 2) {
        next.classList.add("disabled")
        landing.classList.add("three");
    }

    else {
        landing.classList.remove("one")
        landing.classList.remove("three")
        prev.classList.remove("disabled")
        next.classList.remove("disabled")
    }

    bullets.forEach((li) => {
        li.classList.remove("active");
    })
    bullets[counter].classList.add("active")
}

prev.onclick = function () {
    if (counter == 0) {
        return false;
    }
    else {
        counter--;
        check();
    }
}

next.onclick = function () {
    if (counter == 2) {
        return false;
    }
    else {
        counter++;
        check()
    }
}
