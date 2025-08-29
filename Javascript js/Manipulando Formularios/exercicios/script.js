// script.js

// --- Seletores principais ---
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.querySelector(".task-list");

const STORAGE_KEY = "tasks_v1";

// --- Estado em memória ---
let tasks = [];

// --- Utilidades ---
const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
const load = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    tasks = raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Falha ao carregar do localStorage:", e);
    tasks = [];
  }
};

const uid = () => Math.random().toString(36).slice(2, 9);

// --- Renderização ---
function render() {
  list.innerHTML = "";

  if (!tasks.length) {
    const empty = document.createElement("li");
    empty.className = "task";
    empty.style.justifyContent = "center";
    empty.innerHTML = `<span class="text" style="opacity:.7;font-weight:400;">Nenhuma tarefa cadastrada</span>`;
    list.appendChild(empty);
    return;
  }

  for (const t of tasks) {
    const li = document.createElement("li");
    li.className = "task";
    li.dataset.id = t.id;

    li.innerHTML = `
      <label class="left">
        <input type="checkbox" class="check" ${t.done ? "checked" : ""}>
        <span class="text" style="${t.done ? "text-decoration: line-through; opacity:.7;" : ""}">
          ${escapeHtml(t.text)}
        </span>
      </label>
      <div class="actions">
        <button class="btn task-button delete" title="Deletar">Deletar 🗑</button>
        <button class="btn task-button edit" title="Editar">Editar ✏️</button>
      </div>
    `;

    list.appendChild(li);
  }
}

// --- Segurança básica para texto ---
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// --- Ações ---
function addTask(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  tasks.push({ id: uid(), text: trimmed, done: false });
  save();
  render();
}

function toggleTask(id) {
  const t = tasks.find((x) => x.id === id);
  if (!t) return;
  t.done = !t.done;
  save();
  render();
}

function deleteTask(id) {
  tasks = tasks.filter((x) => x.id !== id);
  save();
  render();
}

function editTask(id) {
  const t = tasks.find((x) => x.id === id);
  if (!t) return;

  const novo = prompt("Editar tarefa:", t.text);
  if (novo === null) return; // cancelou
  const trimmed = novo.trim();
  if (!trimmed) return; // não salva vazio

  t.text = trimmed;
  save();
  render();
}

// --- Eventos ---
// submit do formulário (Enter também funciona)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask(input.value);
  input.value = "";
  input.focus();
});

// delegação de eventos na lista para toggle/editar/deletar
list.addEventListener("click", (e) => {
  const li = e.target.closest(".task");
  if (!li) return;
  const id = li.dataset.id;

  if (e.target.classList.contains("delete")) {
    deleteTask(id);
  } else if (e.target.classList.contains("edit")) {
    editTask(id);
  }
});

// mudança do checkbox (toggle)
list.addEventListener("change", (e) => {
  if (e.target.classList.contains("check")) {
    const li = e.target.closest(".task");
    if (!li) return;
    toggleTask(li.dataset.id);
  }
});

// --- Boot ---
document.addEventListener("DOMContentLoaded", () => {
  load();
  render();
});
