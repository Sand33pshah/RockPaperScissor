function gamePlay(element){
    let currUserChoice = element.innerHTML;
    console.log(currUserChoice);

    // Generate a random choice for the computer 
    const choices = ['&#x1F590', '&#x270C', '&#x270A']; 
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    console.log(computerChoice);

    if(currUserChoice === computerChoice){
        console.log('Its a tie');
    }

    document.getElementById('emojiUser').innerHTML = currUserChoice;
    document.getElementById('emojiComputer').innerHTML = computerChoice;



    // You can add more logic here to determine the winner and update the score
}