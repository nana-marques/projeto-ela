const message = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");
const buttons = document.getElementById("buttons");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const messages = [
  "você sabia que eu gosto muito de conversar com você?",
  "aguardo todos os dias pelas suas mensagens e reels",
  "mesmo distante, você me faz sentir acolhida e amada",
  "você se tornou uma pessoa muito especial pra mim",
  "por isso, gostaria de perguntar e pode ser sincera comigo",
  "então... quer namorar comigo? 💖"
];

let step = 0;

nextBtn.addEventListener("click", () => {
  if (step < messages.length) {
    message.innerText = messages[step];
    step++;
  }

  if (step === messages.length) {
    nextBtn.classList.add("hidden");
    buttons.classList.remove("hidden");
  }
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 80);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  document.getElementById("mainCard").innerHTML = `
    <h1>AAAAAA 💖</h1>
    <img src="spotify.jpeg" alt="Nossa foto" class="love-photo">
    <p>
      você me faz muito feliz, de verdade.<br><br>
      prometo estar aqui para você até onde o destino permitir<br>
      te apoiar e criar memórias lindas juntos.
    </p>
    <h2>agora oficialmente: eu e você, minha kase-san💕</h2>
    <p>ps: me mande no whatsapp seu endereço para eu te enviar o anel de solzinho que comentei <3</p>
  `;
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);