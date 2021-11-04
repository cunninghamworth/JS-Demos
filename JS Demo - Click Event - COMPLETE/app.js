const faceClosed = document.querySelector(".closed");
const faceOpen = document.querySelector(".open");

// add event listener
faceClosed.addEventListener("click", () => {
    if (faceOpen.classList.contains("open")) {
        faceOpen.classList.add("active");
        faceClosed.classList.remove("active");
    }
});

faceOpen.addEventListener("click", () => {
    if (faceClosed.classList.contains("closed")) {
        faceClosed.classList.add("active");
        faceOpen.classList.remove("active");
    }
});