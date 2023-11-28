const wordsList = [
    " front-end developer",
    " graphic designer",
    " livestreamer",
];
let currentIndex = 0;

const rotateText = () => {
    const toFill = document.querySelector(".rotating-text");
    const newText = document.createElement("span");
    newText.textContent = wordsList[currentIndex];
    newText.classList.add("slide-up");

    toFill.textContent = "";
    toFill.appendChild(newText);

    setTimeout(() => {
        newText.classList.remove("slide-up");
        newText.classList.add("slide-down");
    }, 800); // Adjust this delay to match the animation duration

    setTimeout(() => {
        newText.remove();
        currentIndex = (currentIndex + 1) % wordsList.length;
        rotateText();
    }, 3000); // Adjust this delay to match the animation duration
};

rotateText();
