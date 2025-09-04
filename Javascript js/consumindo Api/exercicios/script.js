
// pega os elementos do HTML pelo id

const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const newAdviceBtn = document.getElementById("new-advice");

const API_URL = "https://api.adviceslip.com/advice";

async function getAdvice() {
  try {
    newAdviceBtn.disabled = true;
    adviceText.textContent = "Carregando...";

    const response = await fetch(API_URL, { cache: "no-store" });
    const data = await response.json();

    adviceId.textContent = `🧠 Conselho #${data.slip.id}`;
    adviceText.textContent = `“${data.slip.advice}”`;

  } catch (error) {
    adviceText.textContent = "❌ Não foi possível carregar o conselho.";
  } finally {
    newAdviceBtn.disabled = false;
  }
}

function handleClick() {
  const diceIcon = newAdviceBtn.querySelector("img");

  // ativa a animação
  diceIcon.classList.add("spin");

  // remove a classe para permitir nova animação depois
  setTimeout(() => {
    diceIcon.classList.remove("spin");
  }, 800); // mesmo tempo da animação no CSS

  getAdvice();
}

newAdviceBtn.addEventListener("click", handleClick);

// carrega conselho inicial
getAdvice();
