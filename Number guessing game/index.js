//Number guessing game project
const min = 1;
const max = 50;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let guess;
let isRunning = true;

while(isRunning){
    guess = window.prompt(`Guess a number between ${min} and ${max}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number!");
    }
    else if(guess < min || guess > max){
        window.alert(`Please enter a number between ${min} and ${max}. `);
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too low. Try again.");
        }
        else if(guess > answer){
            window.alert("Too high. Pick another number.");
        }
        else{
            window.alert(`Congratulations!! The answer was ${answer}.`);
            window.alert(`It took you ${attempts} tries to find it.`);

            isRunning = false;
        }
    }
}