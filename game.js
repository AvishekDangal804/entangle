const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");
const spinBtn = document.getElementById("spinBtn");

const wheel = document.getElementById("wheel");
const result = document.getElementById("result");

// Switch pages
startBtn.addEventListener("click", () => {
    page1.classList.remove("active");
    page2.classList.add("active");
});

continueBtn.addEventListener("click", () => {
    page2.classList.remove("active");
    page3.classList.add("active");
});

// Wheel prizes
const prizes = [
    "🎮 Buy Avishek a Video Game",
    "🏓 Buy Avishek a Table Tennis Bat",
    "🍫 Buy Avishek Chocolate",
    "🌹 Romantic Date Night",
    "🎬 Movie Night Together",
    "☕ Coffee Date",
    "🤗 One Big Hug",
    "🎁 Surprise Gift"
];

let spinning = false;

spinBtn.addEventListener("click", () => {

    if (spinning) return;

    spinning = true;
    result.innerHTML = "";

    // Random prize
    const index = Math.floor(Math.random() * prizes.length);

    // 8 sections = 45° each
    const section = 45;
    const extraRotation = 360 * 5; // 5 full spins

    // Rotate so the chosen section lands at the pointer
    const rotation = extraRotation + (360 - (index * section + section / 2));

    wheel.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {

        result.innerHTML = `
        🎉 <br><br>
        Congratulations Jyoti! ❤️
        <br><br>
        You got...
        <br><br>
        <strong>${prizes[index]}</strong>
        `;

        spinning = false;

    }, 5000);

});