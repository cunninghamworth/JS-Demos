const targetCircle = document.querySelector("#targetCircle")

targetCircle.addEventListener("mouseenter", () => {
    if (!targetCircle.classList.contains("hover")) {
        targetCircle.classList.add("hover");
    }
})

targetCircle.addEventListener("mouseleave", () => {
    if (targetCircle.classList.contains("hover")) {
        targetCircle.classList.remove("hover");
    }
})