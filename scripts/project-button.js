function toggleText() {
    const text = document.getElementById("text");
    const button = document.getElementById("toggle-btn");

    const eduText = document.getElementById("edu-text");
    const edubutton = document.getElementById("toggle-edu-btn")

    const careerText = document.getElementById("career-text");
    const careerbutton = document.getElementById("toggle-career-btn")
    
    if (text.style.display === "none") {
        text.style.display = "block";
        button.classList.remove("active"); // Remove background highlight
        
        eduText.style.display = "none";
        edubutton.classList.remove("active2")

        careerText.style.display = "none";
        careerbutton.classList.remove("active2");
    } else {
        text.style.display = "none";
        button.classList.add("active"); // Add background highlight
    }
}