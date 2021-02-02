"use strict";

let total = 0;
let totalParagraph = document.querySelector(".total");
let cola = document.querySelector(".cola");
let peanuts = document.querySelector(".peanuts");
let chocolate = document.querySelector(".chocolate");
let gummies = document.querySelector(".gummies");

cola.addEventListener("click", () => {
  total += 2;

  totalParagraph.textContent = `Total: $${total}.00`;
});

peanuts.addEventListener("click", () => {
  total += 3;

  totalParagraph.textContent = `Total: $${total}.00`;
});

chocolate.addEventListener("click", () => {
  total += 4;

  totalParagraph.textContent = `Total: $${total}.00`;
});

gummies.addEventListener("click", () => {
  total += 6;

  totalParagraph.textContent = `Total: $${total}.00`;
});

//========================MAKE MONEY=================================

let coins = ["penny", "nickel", "dime", "quarter"];

let moneyForm = document.querySelector(".money-form");

moneyForm.addEventListener("submit", (e) => {
  event.preventDefault();

  let formData = new FormData(moneyForm);
  let range = formData.get("number");
  let penny = formData.get("number");
  let nickel = formData.get("number");
  let dime = formData.get("number");
  let quarter = formData.get("number");
});

//====================lightbulb=====================

let lightBulb = document.querySelector(".light-bulb");
let on = document.querySelector("on");
let off = document.querySelector("off");
let toggle = document.querySelector("toggle");
let end = document.querySelector("end");

on.addEventListener("click", () => {
  lightBulb.classList.add("light");
});

off.addEventListener("click", () => {
  lightBulb.classList.remove("dark");
});

toggle.addEventListener("click", () => {
  lightBulb.classList.toggle("light");
});

end.addEventListener("click", () => {});
