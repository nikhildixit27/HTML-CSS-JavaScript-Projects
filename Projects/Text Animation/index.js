const containerEl = document.querySelector(".container");
const careers = ["Web Developer", "Freelancer", "Student", "Finance"];

let careerIndex = 0;
let charIndex = 0;
updateText();

function updateText() {
    charIndex++;
    const career = careers[careerIndex].slice(0, charIndex);
    const coloredCareer = careerIndex === 0 || careerIndex === 2 ? `<span style="color: red;">${career}</span>` : career;
    containerEl.innerHTML = `
    <h1> I am a ${coloredCareer} </h1>
    `;

    if (charIndex === careers[careerIndex].length) {
        careerIndex++;
        charIndex = 0;
    }

    if (careerIndex === careers.length) {
        careerIndex = 0;
    }
    setTimeout(updateText, 300);
}
