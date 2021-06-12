const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput==='rock'){
      return userInput;
    }
    else if(userInput==='paper'){
      return userInput;
    }
    else if(userInput==='scissor'){
      return userInput;
    }else{
      console.log('wrong choice,choose one of these-1.paper,2.scissor,3.rock');
    }
  }
  
  
  function getComputerChoice() {
    randomNumber=Math.floor(Math.random()*3);
    switch (randomNumber) {
    case 0:
      return 'rock';
        break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissor'
      break;
    default : 'invalid case;'
    break;
  }
  }
  // console.log(getComputerChoice());
  
  function determineWinner(userChoice ,computerChoice){
    if(userChoice===computerChoice){  //tie situation
      return 'game was a tie';
    }
    //userchoice===rock
    if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  //userchoice===paper
  if (userChoice === 'paper') {
    if (computerChoice === 'scissor') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  
  //userchoice===scissors
  if (userChoice === 'scissor') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  
  }
  // console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
  
  
  function playGame(){
    var userChoice=getUserChoice('scissor');
    var computerChoice=getComputerChoice();
     console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
  }
  
  playGame();
  