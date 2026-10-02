import { LANGS } from "./config";

const dict: Record<string, Record<string, string>> = {
  es: { tagline: "Bienvenido. Mira nuestro menú.", see_menu: "Ver menú", menu: "Menú", all: "Todo", empty: "El menú se está preparando." },
  en: { tagline: "Welcome. Have a look at our menu.", see_menu: "See menu", menu: "Menu", all: "All", empty: "The menu is being prepared." },
  pt: { tagline: "Bem-vindo. Veja o nosso cardápio.", see_menu: "Ver cardápio", menu: "Cardápio", all: "Tudo", empty: "O cardápio está sendo preparado." },
};

const stored = (() => { try { return localStorage.getItem("lang"); } catch { return null; } })();
let lang = stored && LANGS.includes(stored) ? stored : LANGS[0] ?? "es";

export const getLang = () => lang;
export const t = (k: string) => dict[lang]?.[k] ?? dict.es[k] ?? k;

export function setLang(l: string) {
  lang = l;
  try { localStorage.setItem("lang", l); } catch { /* ignore */ }
  document.documentElement.lang = l;
}

export function applyStatic() {
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n!)));
}
