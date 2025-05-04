function toggleText() {
    const text = document.getElementById("text");
    const button = document.getElementById("toggle-btn");

    if (text.style.display === "block") {
        text.style.display = "none";
        button.classList.remove("active"); // Remove background highlight
    } else {
        text.style.display = "block";
        button.classList.add("active"); // Add background highlight
    }
}