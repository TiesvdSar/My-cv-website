function toggle_edu_Text() {
    const text = document.getElementById("edu-text");
    const button = document.getElementById("edu-toggle-btn");

    if (text.style.display === "block") {
        text.style.display = "none";
        button.classList.remove("active"); // Remove background highlight
    } else {
        text.style.display = "block";
        button.classList.add("active"); // Add background highlight
    }
}