import { CURRENCY } from "./config";

export type Item = {
  _id: string;
  name: string;
  description?: string;
  category: string;
  price: number;
  available: boolean;
  order: number;
};

export const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export const money = (n: number, lang = "es") =>
  new Intl.NumberFormat(lang, { style: "currency", currency: CURRENCY }).format(n);
