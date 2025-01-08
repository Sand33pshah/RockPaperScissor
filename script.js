function gamePlay(element) {
    let userEmoji = element.innerHTML;
    let userChoice = '&#x' + userEmoji.codePointAt(0).toString(16);

    // Generate a random choice for the computer
    let computerChoice = '';
    let randomNum = Math.random();
    if (randomNum >= 0 && randomNum < 1 / 3) {
        computerChoice = '&#x1f590'; //paper
    } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
        computerChoice = '&#x270c';  //scissor
    } else if (randomNum >= 2 / 3 && randomNum < 1) {
        computerChoice = '&#x270a'; //rock
    }

    console.log(userChoice);
    console.log(computerChoice);

    document.getElementById('emojiUser').innerHTML = userChoice;
    document.getElementById('emojiComputer').innerHTML = computerChoice;

    let userCount = parseInt(document.getElementById('userCount').innerHTML);
    let computerCount = parseInt(document.getElementById('userCount').innerHTML);


    if (userChoice === computerChoice) {
        document.getElementById('resultMsg').innerHTML = 'It\'s TIE';
    } else {
        if (userChoice === '&#x1f590' && computerChoice == '&#x270c' || userChoice === '&#x270a' && computerChoice == '&#x1f590' || userChoice === '&#x270c' && computerChoice == '&#x270a') {
            computerCount++;
            document.getElementById('computerCount').innerHTML = computerCount;
            document.getElementById('resultMsg').innerHTML = 'Computer Wins';
        } else if (computerChoice === '&#x1f590' && userChoice == '&#x270c' || computerChoice === '&#x270a' && userChoice == '&#x1f590' || computerChoice === '&#x270c' && userChoice == '&#x270a') {
            userCount++;
            document.getElementById('userCount').innerHTML = userCount;
            document.getElementById('resultMsg').innerHTML = 'User Wins';
        }
    }



    // You can add more logic here to determine the winner and update the score
}

function startGame(){
    const userName = document.getElementById('userName').value;

    document.getElementById('greetUser').innerHTML = userName;
    document.getElementById('nameUser').innerHTML = userName;
    document.getElementById('nameCount').innerHTML = userName;


    document.getElementsByClassName('welcome')[0].style.display = 'none';
    document.getElementsByClassName('game')[0].style.display = 'block';

}