const toggleBtn = document.getElementById("toggle-mode");
const body = document.body;

// Check localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀ Light Mode";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Change button text based on mode
  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
});
