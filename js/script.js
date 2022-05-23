// global variables

let playerPoints = 0;
let computerPoints = 0;
const results = document.getElementById('results');
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

// functions

function buttonClicked(argButtonName) {
    const playerMove = argButtonName;
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    console.log('ruch gracza to: ' + playerMove);
    console.log('wylosowana liczba to: ' + randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove, playerPoints, computerPoints);
    results.innerHTML = '<div class="pkt-g"><h3>Punkty<br/>gracza:</h3><h5>' + playerPoints + '</h5></div><div class="pkt-k"><h3>Punkty<br/>komputera:</h3><h5>' + computerPoints + '</h5></div>';
}

function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}

function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
        playerPoints = playerPoints + 1;
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
        playerPoints = playerPoints + 1;
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
        playerPoints = playerPoints + 1;
    } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
    } else {
        printMessage('Przegrywasz :(');
        computerPoints = computerPoints + 1;
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove + '.');
    console.log('Punkty gracza: ' + playerPoints);
    console.log('Punkty kąkutera: ' + computerPoints);
}


buttonRock.addEventListener('click', function() {
    buttonClicked('kamień');
});
buttonPaper.addEventListener('click', function() {
    buttonClicked('papier');
});
buttonScissors.addEventListener('click', function() {
    buttonClicked('nożyce');
});