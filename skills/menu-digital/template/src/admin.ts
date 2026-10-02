import "./style.css";
import { ConvexClient } from "convex/browser";
import { anyApi } from "convex/server";
import { BUSINESS_NAME, CONVEX_URL } from "./config";
import { esc, money, type Item } from "./util";

const root = document.getElementById("admin")!;
if (!CONVEX_URL) {
  root.innerHTML = `<p class="err">Falta VITE_CONVEX_URL</p>`;
  throw new Error("VITE_CONVEX_URL no definida");
}
const client = new ConvexClient(CONVEX_URL);

let password = sessionStorage.getItem("admin_pw") ?? "";
let items: Item[] = [];
let editing: Item | null = null;
let unsub: (() => void) | null = null;

function showLogin(msg = "") {
  unsub?.();
  root.innerHTML = `
    <h1>${esc(BUSINESS_NAME)} · Admin</h1>
    <form id="login" class="grid">
      <input type="password" name="pw" placeholder="Contraseña" required autofocus />
      <button class="primary">Entrar</button>
      <p class="err">${esc(msg)}</p>
    </form>`;
  root.querySelector<HTMLFormElement>("#login")!.onsubmit = async (e) => {
    e.preventDefault();
    const pw = new FormData(e.target as HTMLFormElement).get("pw") as string;
    try {
      await client.mutation(anyApi.auth.verify, { password: pw });
      password = pw;
      sessionStorage.setItem("admin_pw", pw);
      showPanel();
    } catch {
      showLogin("Contraseña incorrecta");
    }
  };
}

function showPanel() {
  root.innerHTML = `
    <div class="row"><h1 style="flex:1">${esc(BUSINESS_NAME)} · Admin</h1><button id="out">Salir</button></div>
    <form id="f" class="grid">
      <input name="name" placeholder="Nombre" required />
      <textarea name="description" placeholder="Descripción" rows="2"></textarea>
      <input name="category" placeholder="Categoría (ej. Bebidas)" required />
      <input name="price" type="number" step="0.01" min="0" placeholder="Precio" required />
      <label class="row"><input name="available" type="checkbox" checked style="width:auto" /> Disponible</label>
      <div class="row"><button class="primary" id="save">Agregar</button><button type="button" id="cancel" hidden>Cancelar</button></div>
      <p class="err" id="msg"></p>
    </form>
    <ul class="items" id="list"></ul>`;

  const form = root.querySelector<HTMLFormElement>("#f")!;
  const field = (n: string) => form.elements.namedItem(n) as HTMLInputElement;
  const msg = root.querySelector<HTMLElement>("#msg")!;
  const cancel = root.querySelector<HTMLButtonElement>("#cancel")!;
  const save = root.querySelector<HTMLButtonElement>("#save")!;

  const reset = () => {
    editing = null;
    form.reset();
    field("available").checked = true;
    save.textContent = "Agregar";
    cancel.hidden = true;
  };

  form.onsubmit = async (e) => {
    e.preventDefault();
    msg.textContent = "";
    const data = {
      password,
      name: field("name").value.trim(),
      description: field("description").value.trim() || undefined,
      category: field("category").value.trim(),
      price: Number(field("price").value),
      available: field("available").checked,
    };
    try {
      if (editing) await client.mutation(anyApi.menu.update, { ...data, id: editing._id });
      else await client.mutation(anyApi.menu.create, data);
      reset();
    } catch (err) {
      msg.textContent = "No se pudo guardar. Revisa los datos o vuelve a entrar.";
      console.error(err);
    }
  };
  cancel.onclick = reset;
  root.querySelector<HTMLButtonElement>("#out")!.onclick = () => {
    sessionStorage.removeItem("admin_pw");
    password = "";
    showLogin();
  };

  const list = root.querySelector<HTMLElement>("#list")!;
  list.onclick = async (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>("[data-act]");
    if (!btn) return;
    const item = items.find((i) => i._id === btn.dataset.id);
    if (!item) return;
    if (btn.dataset.act === "edit") {
      editing = item;
      field("name").value = item.name;
      field("description").value = item.description ?? "";
      field("category").value = item.category;
      field("price").value = String(item.price);
      field("available").checked = item.available;
      save.textContent = "Guardar cambios";
      cancel.hidden = false;
      form.scrollIntoView({ behavior: "smooth" });
    } else if (confirm(`¿Eliminar "${item.name}"?`)) {
      await client.mutation(anyApi.menu.remove, { password, id: item._id });
    }
  };

  unsub = client.onUpdate(
    anyApi.menu.listAll,
    { password },
    (res: Item[]) => {
      items = res;
      list.innerHTML = items.length
        ? items.map((i) => `
          <li>
            <div><strong>${esc(i.name)}</strong> ${i.available ? "" : "<em class='muted'>(oculto)</em>"}
              <p>${esc(i.category)} · ${money(i.price)}</p></div>
            <div class="row"><button data-act="edit" data-id="${i._id}">Editar</button>
            <button data-act="del" data-id="${i._id}">Borrar</button></div>
          </li>`).join("")
        : `<li class="muted">Aún no hay ítems.</li>`;
    },
    () => {
      sessionStorage.removeItem("admin_pw");
      showLogin("Sesión inválida");
    }
  );
}

password ? showPanel() : showLogin();
