const introOverlay = document.getElementById("introOverlay");
const balloonsContainer = document.getElementById("balloons");
const sparklesContainer = document.getElementById("sparkles");
const confettiLayer = document.getElementById("confettiLayer");
const celebrateBtn = document.getElementById("celebrateBtn");
const giftBox = document.getElementById("giftBox");
const revealEls = document.querySelectorAll(".reveal");

window.addEventListener("load", () => {
  setTimeout(() => {
    introOverlay.classList.add("hide");
  }, 4200);
});

function createSparkles() {
  const total = 24;
  for (let i = 0; i < total; i++) {
    const s = document.createElement("span");
    s.className = "sparkle";
    s.style.left = `${Math.random() * 100}%`;
    s.style.top = `${20 + Math.random() * 70}%`;
    s.style.animationDuration = `${3 + Math.random() * 3}s`;
    s.style.animationDelay = `${Math.random() * 2}s`;
    s.style.opacity = `${0.35 + Math.random() * 0.4}`;
    sparklesContainer.appendChild(s);
  }
}

const balloonColors = [
  "linear-gradient(180deg, #ffd6e7, #f4adc9)",
  "linear-gradient(180deg, #eadcff, #cab8ff)",
  "linear-gradient(180deg, #ffe2d3, #ffd2bc)",
  "linear-gradient(180deg, #fff1d2, #f4d79b)",
  "linear-gradient(180deg, #ffe8f1, #f7bfd6)"
];

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "balloon";

  const size = 46 + Math.random() * 34;
  balloon.style.width = `${size}px`;
  balloon.style.height = `${size * 1.22}px`;
  balloon.style.left = `${Math.random() * 100}%`;
  balloon.style.background = balloonColors[Math.floor(Math.random() * balloonColors.length)];
  balloon.style.animationDuration = `${10 + Math.random() * 5}s`;

  balloonsContainer.appendChild(balloon);

  setTimeout(() => balloon.remove(), 16000);
}

function launchBalloons(count = 5) {
  for (let i = 0; i < count; i++) {
    setTimeout(createBalloon, i * 260);
  }
}

function createConfettiBurst(count = 40) {
  const colors = ["#f4adc9", "#cab8ff", "#f4d79b", "#ffd2bc", "#fff5da"];

  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.borderRadius = Math.random() > 0.5 ? "999px" : "3px";
    piece.style.animationDuration = `${3 + Math.random() * 2}s`;
    piece.style.transform = `translateY(0) rotate(${Math.random() * 360}deg)`;
    confettiLayer.appendChild(piece);

    setTimeout(() => piece.remove(), 5200);
  }
}

celebrateBtn.addEventListener("click", () => {
  createConfettiBurst(55);
  launchBalloons(8);
});

giftBox.addEventListener("click", () => {
  createConfettiBurst(45);
  launchBalloons(6);
  giftBox.animate(
    [
      { transform: "scale(1)" },
      { transform: "scale(1.08)" },
      { transform: "scale(1)" }
    ],
    {
      duration: 450,
      easing: "ease-out"
    }
  );
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.16
  }
);

revealEls.forEach((el) => observer.observe(el));

createSparkles();
launchBalloons(7);
setInterval(() => launchBalloons(2), 4200);