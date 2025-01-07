function gamePlay(element){
    let currUserChoice = element.innerHTML;

    document.getElementById('emojiUser').innerHTML = currUserChoice;

    // Generate a random choice for the computer 
    const choices = ['&#x1F590', '&#x270C', '&#x270A']; const computerChoice = choices[Math.floor(Math.random() * choices.length)]; 
    // Update the emojiComputer paragraph with the computer's choice
    document.getElementById('emojiComputer').innerHTML = computerChoice; 
    // You can add more logic here to determine the winner and update the score
}