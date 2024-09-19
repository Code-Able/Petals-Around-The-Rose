const diceContainer = document.querySelector('#dice-container');
const startBtn = document.querySelector('#start-btn-id');
const die1Element = document.querySelector('#die-1');
const die2Element = document.querySelector('#die-2');
const die3Element = document.querySelector('#die-3');
const die4Element = document.querySelector('#die-4');
const die5Element = document.querySelector('#die-5');
const inputField = document.querySelector('#input-field');
const submitBtn = document.querySelector('#submit-btn');
const tryAgainBtn = document.querySelector('#try-again-btn')
const answerStatus = document.querySelector('#answer-status');

let answer1;
let answer2;
let answer3;
let answer4;
let answer5;


let randomRoll1;
let randomRoll2;
let randomRoll3;
let randomRoll4;
let randomRoll5;



function rollDice(){
    randomRoll1 = Math.floor(Math.random() * 6) + 1;
    randomRoll2 = Math.floor(Math.random() * 6) + 1;
    randomRoll3 = Math.floor(Math.random() * 6) + 1;
    randomRoll4 = Math.floor(Math.random() * 6) + 1;
    randomRoll5 = Math.floor(Math.random() * 6) + 1;

    if (randomRoll1 === 1){
        die1Element.innerHTML = `<img src="Dice-1-b.svg.png">`;
    } else if (randomRoll1 === 2){
        die1Element.innerHTML = `<img src="Dice-2-b.svg.png">`;
    } else if (randomRoll1 === 3){
        die1Element.innerHTML = `<img src="Dice-3-b.svg.png">`;
    }  else if (randomRoll1 === 4){
        die1Element.innerHTML = `<img src="Dice-4-b.svg.png">`;
    }  else if (randomRoll1 === 5){
        die1Element.innerHTML = `<img src="Dice-5-b.svg.png">`;
    }  else if (randomRoll1 === 6){
        die1Element.innerHTML = `<img src="Dice-6-b.svg.png">`;
    };


    if (randomRoll2 === 1){
        die2Element.innerHTML = `<img src="Dice-1-b.svg.png">`;
    } else if (randomRoll2 === 2){
        die2Element.innerHTML = `<img src="Dice-2-b.svg.png">`;
    } else if (randomRoll2 === 3){
        die2Element.innerHTML = `<img src="Dice-3-b.svg.png">`;
    }  else if (randomRoll2 === 4){
        die2Element.innerHTML = `<img src="Dice-4-b.svg.png">`;
    }  else if (randomRoll2 === 5){
        die2Element.innerHTML = `<img src="Dice-5-b.svg.png">`;
    }  else if (randomRoll2 === 6){
        die2Element.innerHTML = `<img src="Dice-6-b.svg.png">`;
    };


    if (randomRoll3 === 1){
        die3Element.innerHTML = `<img src="Dice-1-b.svg.png">`;
    } else if (randomRoll3 === 2){
        die3Element.innerHTML = `<img src="Dice-2-b.svg.png">`;
    } else if (randomRoll3 === 3){
        die3Element.innerHTML = `<img src="Dice-3-b.svg.png">`;
    }  else if (randomRoll3 === 4){
        die3Element.innerHTML = `<img src="Dice-4-b.svg.png">`;
    }  else if (randomRoll3 === 5){
        die3Element.innerHTML = `<img src="Dice-5-b.svg.png">`;
    }  else if (randomRoll3 === 6){
        die3Element.innerHTML = `<img src="Dice-6-b.svg.png">`;
    };


    if (randomRoll4 === 1){
        die4Element.innerHTML = `<img src="Dice-1-b.svg.png">`;
    } else if (randomRoll4 === 2){
        die4Element.innerHTML = `<img src="Dice-2-b.svg.png">`;
    } else if (randomRoll4 === 3){
        die4Element.innerHTML = `<img src="Dice-3-b.svg.png">`;
    }  else if (randomRoll4 === 4){
        die4Element.innerHTML = `<img src="Dice-4-b.svg.png">`;
    }  else if (randomRoll4 === 5){
        die4Element.innerHTML = `<img src="Dice-5-b.svg.png">`;
    }  else if (randomRoll4 === 6){
        die4Element.innerHTML = `<img src="Dice-6-b.svg.png">`;
    };


    if (randomRoll5 === 1){
        die5Element.innerHTML = `<img src="Dice-1-b.svg.png">`;
    } else if (randomRoll5 === 2){
        die5Element.innerHTML = `<img src="Dice-2-b.svg.png">`;
    } else if (randomRoll5 === 3){
        die5Element.innerHTML = `<img src="Dice-3-b.svg.png">`;
    }  else if (randomRoll5 === 4){
        die5Element.innerHTML = `<img src="Dice-4-b.svg.png">`;
    }  else if (randomRoll5 === 5){
        die5Element.innerHTML = `<img src="Dice-5-b.svg.png">`;
    }  else if (randomRoll5 === 6){
        die5Element.innerHTML = `<img src="Dice-6-b.svg.png">`;
    };



}

startBtn.addEventListener('click', initGame);


function initGame(){
    startBtn.classList.remove('start-btn');
    startBtn.classList.add('hide');
    diceContainer.classList.add('dice-container');
    diceContainer.classList.remove('hide');
    rollDice();
    inputField.classList.add('input-field');
    inputField.classList.remove('hide');
    submitBtn.classList.add('submit-btn');
    submitBtn.classList.remove('hide');
    answerStatus.textContent = 'Solve the Puzzle';

}

submitBtn.addEventListener('click', checkAnswer);

function checkAnswer(){
    if (randomRoll1 === 1){
       answer1 = 0;
        } else if(randomRoll1 === 2){
            answer1 = 0;
        } else if(randomRoll1 === 3){
            answer1 = 2;
        } else if(randomRoll1 === 4){
            answer1 = 0;
        } else if (randomRoll1 === 5){
            answer1 = 4;
        } else if (randomRoll1 === 6){
            answer1 = 0;
        };

    if (randomRoll2 === 1){
            answer2 = 0;
        } else if(randomRoll2 === 2){
            answer2 = 0;
        } else if(randomRoll2 === 3){
            answer2 = 2;
        } else if(randomRoll2 === 4){
            answer2 = 0;
        } else if (randomRoll2 === 5){
            answer2 = 4;
        } else if (randomRoll2 === 6){
            answer2 = 0;
        };


    if (randomRoll3 === 1){
            answer3 = 0;
        } else if(randomRoll3 === 2){
            answer3 = 0;
        } else if(randomRoll3 === 3){
            answer3 = 2;
        } else if(randomRoll3 === 4){
            answer3 = 0;
        } else if (randomRoll3 === 5){
            answer3 = 4;
        } else if (randomRoll3 === 6){
            answer3 = 0;
        };   

    if (randomRoll4 === 1){
            answer4 = 0;
        } else if(randomRoll4 === 2){
            answer4 = 0;
        } else if(randomRoll4 === 3){
            answer4 = 2;
        } else if(randomRoll4 === 4){
            answer4 = 0;
        } else if (randomRoll4 === 5){
            answer4 = 4;
        } else if (randomRoll4 === 6){
            answer4 = 0;
        };  
        
        
    if (randomRoll5 === 1){
            answer5 = 0;
        } else if(randomRoll5 === 2){
            answer5 = 0;
        } else if(randomRoll5 === 3){
            answer5 = 2;
        } else if(randomRoll5 === 4){
            answer5 = 0;
        } else if (randomRoll5 === 5){
            answer5 = 4;
        } else if (randomRoll5 === 6){
            answer5 = 0;
        };    

    let userAnswer = inputField.value;
    let correctAnswer = answer1 + answer2 + answer3 + answer4 + answer5;

     if (Number(userAnswer) == correctAnswer){
        answerStatus.textContent = 'Correct!';
        } else {
            answerStatus.textContent = `Incorrect.  The correct answer was ${correctAnswer}.`;
        };

     submitBtn.classList.remove('submit-btn');
     submitBtn.classList.add('hide');
     tryAgainBtn.classList.remove('hide');
     tryAgainBtn.classList.add('try-again-btn');

}


tryAgainBtn.addEventListener('click', reloadGame);

function reloadGame(){
    rollDice();
    inputField.value = '';

     submitBtn.classList.remove('hide');
     submitBtn.classList.add('submit-btn');
     tryAgainBtn.classList.remove('try-again-btn');
     tryAgainBtn.classList.add('hide');
     answerStatus.textContent = 'Solve the Puzzle';
}
