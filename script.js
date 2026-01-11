// script.js
document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert(`navigate to ${btn.innerText}`);
  });
});
