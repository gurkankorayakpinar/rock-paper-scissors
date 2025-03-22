const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const playerSelectionElement = document.getElementById('playerSelection');
const computerSelectionElement = document.getElementById('computerSelection');
const gameResultElement = document.getElementById('gameResult');
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('computerScore');
const finalResultElement = document.getElementById('finalResult');

let playerScore = 0;
let computerScore = 0;
const maxScore = 50;

// Seçimlerin Türkçe karşılıkları
const choiceTranslations = {
    'rock': 'Taş',
    'paper': 'Kâğıt',
    'scissors': 'Makas'
};

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Berabere';
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        playerScore++;
        return 'Kazanç';
    }

    computerScore++;
    return 'Kayıp';
}

function updateScore() {
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

function checkGameOver() {
    if (playerScore >= maxScore) {
        finalResultElement.textContent = 'Oyunu Kazandınız.';
        disableButtons();
    } else if (computerScore >= maxScore) {
        finalResultElement.textContent = 'Oyunu kaybettiniz!';
        disableButtons();
    }
}

function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function playGame(playerChoice) {
    if (playerScore >= maxScore || computerScore >= maxScore) return;

    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    // Seçimleri Türkçe olarak göster
    playerSelectionElement.textContent = choiceTranslations[playerChoice];
    computerSelectionElement.textContent = choiceTranslations[computerChoice];
    gameResultElement.textContent = result;

    updateScore();
    checkGameOver();
}

// "Sağ tık ile menü açma" özelliği devre dışı
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

rock.addEventListener('click', () => playGame('rock'));
paper.addEventListener('click', () => playGame('paper'));
scissors.addEventListener('click', () => playGame('scissors'));