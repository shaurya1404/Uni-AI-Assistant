function setQuestion(question) {
    document.getElementById("questionInput").value = question;
}

function askQuestion() {
    const question = document.getElementById("questionInput").value;
    const responseDiv = document.getElementById("response");
    const loader = document.getElementById("loader");
    const responseText = document.getElementById("responseText");

    if (question.trim() === "") {
        responseText.innerHTML = "Please enter a question.";
        responseDiv.classList.add("show");
        return;
    }

    responseText.innerHTML = "";
    loader.style.display = "block";
    responseDiv.classList.add("show");

    setTimeout(() => {
        loader.style.display = "none";
        responseText.innerHTML = "AI Response: This feature is under development!";
    }, 2000);
}