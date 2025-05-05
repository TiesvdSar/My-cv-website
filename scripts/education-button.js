function toggle_edu_Text() {
    const text = document.getElementById("edu-text");
    const button = document.getElementById("toggle-edu-btn");

    const projText = document.getElementById("text");
    const projbutton = document.getElementById("toggle-btn")

    const careerText = document.getElementById("career-text");
    const careerbutton = document.getElementById("toggle-career-btn")
    
    if (text.style.display === "block") {
        text.style.display = "none";
        button.classList.remove("active2"); // Remove background highlight

        careerText.style.display = "none";
    } else {
        text.style.display = "block";
        button.classList.add("active2"); // Add background highlight

        projText.style.display = "none";
        projbutton.classList.add("active");

        careerText.style.display = "none";
        careerbutton.classList.remove("active2");
    }
}