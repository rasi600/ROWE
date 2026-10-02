import "./style.css";
import { ConvexClient } from "convex/browser";
import { anyApi } from "convex/server";
import { CONVEX_URL, LANGS } from "./config";
import { applyStatic, getLang, setLang, t } from "./i18n";
import { esc, money, type Item } from "./util";

const root = document.getElementById("menu-root")!;
const langNav = document.getElementById("lang")!;
let items: Item[] = [];
let active = "all";

function renderLang() {
  if (LANGS.length < 2) return;
  langNav.innerHTML = LANGS.map(
    (l) => `<button class="chip ${l === getLang() ? "on" : ""}" data-lang="${esc(l)}">${esc(l.toUpperCase())}</button>`
  ).join(" ");
}

function renderMenu() {
  if (!items.length) {
    root.innerHTML = `<p class="muted">${esc(t("empty"))}</p>`;
    return;
  }
  const cats = [...new Set(items.map((i) => i.category))];
  const shown = cats.filter((c) => active === "all" || c === active);
  root.innerHTML = `
    <div class="chips">
      ${["all", ...cats].map((c) => `<button class="chip ${c === active ? "on" : ""}" data-cat="${esc(c)}">${esc(c === "all" ? t("all") : c)}</button>`).join("")}
    </div>
    ${shown.map((c) => `
      <h3>${esc(c)}</h3>
      <ul class="items">
        ${items.filter((i) => i.category === c).map((i) => `
          <li><div><strong>${esc(i.name)}</strong>${i.description ? `<p>${esc(i.description)}</p>` : ""}</div>
          <span class="price">${money(i.price, getLang())}</span></li>`).join("")}
      </ul>`).join("")}`;
}

function renderAll() {
  applyStatic();
  renderLang();
  renderMenu();
}

document.addEventListener("click", (e) => {
  const el = e.target as HTMLElement;
  const cat = el.closest<HTMLElement>("[data-cat]");
  const lang = el.closest<HTMLElement>("[data-lang]");
  if (cat) { active = cat.dataset.cat!; renderMenu(); }
  if (lang) { setLang(lang.dataset.lang!); renderAll(); }
});

document.getElementById("year")!.textContent = String(new Date().getFullYear());
setLang(getLang());
renderAll();

if (!CONVEX_URL) {
  root.innerHTML = `<p class="err">Falta VITE_CONVEX_URL</p>`;
} else {
  const client = new ConvexClient(CONVEX_URL);
  client.onUpdate(anyApi.menu.list, {}, (res: Item[]) => { items = res; renderMenu(); });
}
