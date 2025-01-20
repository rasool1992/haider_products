// Function to set the theme
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  // Show/hide icons based on the theme
  document.querySelector(".moon").classList.toggle("hidden", theme === "light");
  document.querySelector(".sun").classList.toggle("hidden", theme === "dark");
}

// On page load, set the theme based on system preference or saved theme
document.addEventListener("DOMContentLoaded", () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("theme");
  const theme = savedTheme || (prefersDark ? "dark" : "light");
  setTheme(theme);
});

// Add event listeners to the icons for toggling the theme
document
  .querySelector(".moon")
  .addEventListener("click", () => setTheme("light"));
document
  .querySelector(".sun")
  .addEventListener("click", () => setTheme("dark"));
