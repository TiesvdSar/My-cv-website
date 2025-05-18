function toggleSection(id) {
const container = document.getElementById(id);
container.classList.toggle("show");

const label = container.querySelector(".label");
if (id === "section1") {
    label.textContent = container.classList.contains("show") ? "Show less" : "Show more about June 2024";
} else if (id === "section2") {
    label.textContent = container.classList.contains("show") ? "Show less" : "Show more about October 2024";
} else if (id === "section3") {
    label.textContent = container.classList.contains("show") ? "Show less" : "Show more about March 2025";
}
}

