document.addEventListener("DOMContentLoaded", () => {
  const cepInput = document.getElementById("cep");
  if (!cepInput) return;

  // máscara e busca quando completar 8 dígitos
  cepInput.addEventListener("input", (e) => {
    let v = e.target.value.replace(/\D/g, "").slice(0, 8); // só números
    e.target.value = v.length > 5 ? `${v.slice(0,5)}-${v.slice(5)}` : v;
    if (v.length === 8) buscarCEP(v);
  });

  // também busca ao sair do campo
  cepInput.addEventListener("blur", () => {
    const v = cepInput.value.replace(/\D/g, "");
    if (v.length === 8) buscarCEP(v);
  });
});

async function buscarCEP(cep) {
  // feedback visual rápido (opcional)
  setCampos({ rua: "...", bairro: "...", cidade: "...", estado: "...", complemento: "" });

  try {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`); // <- barra final ok
    if (!res.ok) throw new Error("Falha na consulta");
    const data = await res.json();
    if (data.erro) throw new Error("CEP não encontrado");

    // Mapeia os campos do ViaCEP para seus inputs
    setCampos({
      cep: data.cep || "",
      rua: data.logradouro || "",
      bairro: data.bairro || "",
      cidade: data.localidade || "",
      estado: data.uf || (data.estado || ""), // normalmente vem 'uf'; alguns retornos têm 'estado'
      complemento: data.complemento || ""
    });
  } catch (err) {
    setCampos({ rua: "", bairro: "", cidade: "", estado: "", complemento: "" });
    console.warn(err);
    alert("CEP inválido ou não encontrado.");
  }
}

function setCampos(values) {
  Object.entries(values).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.value = val;
  });
}
