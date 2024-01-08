function calculateScore() {
    let score = 0;

    // Ajoutez d'autres questions ici
    score += checkAnswer("q1");

    // Affiche le résultat
    document.getElementById("score-value").innerText = score;
    document.getElementById("result-container").style.display = "block";
}

function checkAnswer(questionName) {
    const resultContainer = document.getElementById(questionName);

    if (resultContainer) {
        const checkboxes = document.querySelectorAll(`input[name=${questionName}]:checked`);
        const correctCheckboxes = document.querySelectorAll(`input.${questionName}.correct:checked`);
        
        if (checkboxes.length === correctCheckboxes.length) {
            resultContainer.style.color = "green";
            return correctCheckboxes.length * 0.5; // Attribution de 0.5 point par réponse correcte
        } else {
            resultContainer.style.color = "red";
            return 0;
        }
    } else {
        console.error(`Element with ID ${questionName} not found.`);
        return 0;
    }
}
