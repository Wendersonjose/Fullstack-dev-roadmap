// TROQUE o token se expirar (CrudCrud ~24h)
const BASE_URL = "https://crudcrud.com/api/ad21641b66254684985ac3d594ca4306/users";

const userForm = document.getElementById("userForm");
const userNameInput  = document.getElementById("userNameInput");
const userEmailInput = document.getElementById("userEmailInput");
const userPhoneInput = document.getElementById("userPhoneInput");
const userCpfInput   = document.getElementById("userCpfInput");
const userList = document.getElementById("userList");
const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelEditButton");
const loadBtn   = document.getElementById("loadUsersButton");

// Estado
let editingUser = null; // guarda o objeto inteiro durante a edição

// Utils
const onlyDigits = (v) => v.replace(/\D+/g, "");
const isCPFBasic = (cpf) => onlyDigits(cpf).length === 11;
const toast = (m) => alert(m);

// Pega o próximo customId persistente (1,2,3,...) baseado nos já salvos
async function getNextCustomId() {
  const resp = await fetch(BASE_URL);
  if (!resp.ok) throw new Error("Falha ao obter lista para gerar customId");
  const users = await resp.json();

  // pega o maior customId numérico; se nenhum, começa em 1
  const ids = users
    .map(u => Number(u.customId))
    .filter(n => Number.isFinite(n));
  return ids.length ? Math.max(...ids) + 1 : 1;
}

function setSaving(saving){
  submitBtn.disabled = saving;
  submitBtn.textContent = saving ? "Salvando..." : (editingUser ? "Salvar" : "Adicionar");
}

function resetForm(){
  userNameInput.value = "";
  userEmailInput.value = "";
  userPhoneInput.value = "";
  userCpfInput.value = "";
  editingUser = null;
  submitBtn.textContent = "Adicionar";
  cancelBtn.style.display = "none";
  submitBtn.disabled = false;
}

// Criar/Editar
userForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name  = userNameInput.value.trim();
  const email = userEmailInput.value.trim();
  const phone = userPhoneInput.value.trim();
  const cpf   = onlyDigits(userCpfInput.value);

  if (!name || !email || !phone || !cpf) return toast("Preencha todos os campos.");
  if (!isCPFBasic(cpf)) return toast("CPF inválido. Informe 11 dígitos.");

  try {
    setSaving(true);

    if (!editingUser) {
      // Criar com customId persistente
      const customId = await getNextCustomId();
      const payload = { name, email, phone, cpf, customId };
      const resp = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(payload)
      });
      if (!resp.ok) throw new Error(await resp.text());
    } else {
      // Editar mantendo o customId atual
      const payload = {
        name, email, phone, cpf,
        customId: editingUser.customId ?? editingUser.index // fallback
      };
      const resp = await fetch(`${BASE_URL}/${editingUser._id}`, {
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(payload)
      });
      if (!resp.ok) throw new Error(await resp.text());
    }

    resetForm();
    await loadUsers();
  } catch (err) {
    console.error(err);
    toast("Erro ao salvar. Verifique o token/endpoint do CrudCrud.");
  } finally {
    setSaving(false);
  }
});

// Cancelar edição
cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  resetForm();
});

// Carregar (FIFO: sem ordenar)
async function loadUsers(){
  try {
    const resp = await fetch(BASE_URL);
    if (!resp.ok) throw new Error(await resp.text());
    const data = await resp.json(); // CrudCrud retorna na ordem de criação

    userList.innerHTML = "";

    data.forEach((user, index) => {
      const shownId = user.customId ?? (index + 1);

      const li = document.createElement("li");
      li.innerHTML = `
        <div class="item-stack">
          <div class="item-row">
            <span class="badge">ID: ${shownId}</span>
            <span class="badge">CPF: ${user.cpf || "—"}</span>
          </div>
          <div class="item-row"><span>👤</span><strong>${user.name}</strong></div>
          <div class="item-row"><span>✉️</span><span>${user.email}</span></div>
          <div class="item-row"><span>📱</span><span>${user.phone}</span></div>
        </div>
        <div class="row-actions">
          <button class="icon-btn edit"   title="Editar"  aria-label="Editar">✏️</button>
          <button class="icon-btn delete" title="Excluir" aria-label="Excluir">🗑️</button>
        </div>
      `;

      li.querySelector(".edit").addEventListener("click", () => startEdit(user));
      li.querySelector(".delete").addEventListener("click", () => deleteUser(user._id));

      userList.appendChild(li);
    });
  } catch (err) {
    console.error(err);
    toast("Erro ao carregar usuários.");
  }
}

// Iniciar edição
function startEdit(user){
  editingUser = user;
  userNameInput.value  = user.name || "";
  userEmailInput.value = user.email || "";
  userPhoneInput.value = user.phone || "";
  userCpfInput.value   = user.cpf || "";
  submitBtn.textContent = "Salvar";
  cancelBtn.style.display = "inline-flex";
  userNameInput.focus();
}

// Excluir
async function deleteUser(id){
  if (!confirm("Deseja realmente excluir este usuário?")) return;
  try{
    const resp = await fetch(`${BASE_URL}/${id}`, { method:"DELETE" });
    if (!resp.ok) throw new Error(await resp.text());
    if (editingUser && editingUser._id === id) resetForm();
    await loadUsers();
  }catch(err){
    console.error(err);
    toast("Erro ao excluir usuário.");
  }
}

// Máscara simples de CPF
userCpfInput.addEventListener("input", (e) => {
  let v = onlyDigits(e.target.value).slice(0,11);
  if (v.length > 9)  e.target.value = v.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
  else if (v.length > 6) e.target.value = v.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
  else if (v.length > 3) e.target.value = v.replace(/(\d{3})(\d{0,3})/, "$1.$2");
  else e.target.value = v;
});

// Abertura / botão Carregar
loadBtn.addEventListener("click", loadUsers);
loadUsers();
