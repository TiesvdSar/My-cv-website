function toggle_career_Text() {
    const text = document.getElementById("career-text");
    const button = document.getElementById("toggle-career-btn");

    const projText = document.getElementById("text");
    const projbutton = document.getElementById("toggle-btn")

    const edutext = document.getElementById("edu-text");
    const edubutton = document.getElementById("toggle-edu-btn")
    
    if (text.style.display === "block") {
        text.style.display = "none";
        button.classList.remove("active2"); // Remove background highlight

        careerText.style.display = "none";
    } else {
        text.style.display = "block";
        button.classList.add("active2"); // Add background highlight

        projText.style.display = "none";
        projbutton.classList.add("active");

        edutext.style.display = "none";
        edubutton.classList.remove("active2");
    }
}