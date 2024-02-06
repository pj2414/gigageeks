function playSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
    
    // Get the sound name without the file extension
    var soundName = soundFile.split(".")[0];
    
    // Ask the user to identify the sound
    var userGuess = prompt("What sound did you hear? (e.g., doorbell, phone ring, animal)");

    // Check if the user's guess matches the sound
    if (userGuess && userGuess.toLowerCase() === soundName) {
        document.getElementById('result').innerText = "Correct! You identified the sound.";
    } else {
        document.getElementById('result').innerText = "Incorrect. Try again!";
    }
}
