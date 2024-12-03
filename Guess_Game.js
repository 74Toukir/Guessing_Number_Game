const max  = prompt("Enter the max numbers here :");
let random = Math.floor(Math.random() * max) +1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
       console.log("User quite");
        break;
    }else if(guess == random){
        console.log("Congratulations your guess is correct you won this game", random);
        break;
    }
    else if(guess < random){
        guess = prompt("Your Entered number is too small try again ");
    }
    else {
        guess = prompt("Your guess is too large try again ");
    }
};