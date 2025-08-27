const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const form = document.getElementById("form");
const occupationSelect = document.getElementById("occupation");

function buscarDadosSelect() {
  const options = ["Programador", "Designer", "Analista de Dados"];
  // (opcional) limpa antes para evitar duplicar em hot reload
  // occupationSelect.length = 0;

  for (const option of options) {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    occupationSelect.appendChild(optionElement);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Lê os hobbies NO MOMENTO DO SUBMIT
  const hobbies = Array.from(
    document.querySelectorAll('input[name="hobbies"]:checked')
  ).map(el => el.value);

  console.log("Valores do formulário: ", {
    name: inputName.value,
    email: inputEmail.value,
    occupation: occupationSelect.value,
    hobbies
  });
});

buscarDadosSelect();
