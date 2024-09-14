"use strict";
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefer-color-scheme:dark)");

function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) return localStorageTheme;

  if (systemSettingDark.matches) {
    return "dark";
  }
  return "light";
}


let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

let button = document.querySelector("[data-theme-toggle]");

button.addEventListener("click", () => {
  const newTheme = currentThemeSetting == "light" ? "dark" : "light";

  const newCta =
    newTheme == "dark" ? "Change to light Theme" : "change to dark theme";
  button.innerText = newCta;

  button.setAttribute("aria-label",newCta);

  document.querySelector("html").setAttribute("data-theme",newTheme);

  localStorage.setItem("theme",newTheme);
  currentThemeSetting=newTheme;
});
