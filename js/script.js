let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    tiee: 0,
  };

  updateScore();
  //    if(!score)
  //    {
  //     score ={
  //         wins: 0,
  //         losses:0,
  //         ties :0
  //     }
  //    }

  function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = "";

    if (playerMove === "Scissors") {
      if (computerMove === "Rock") {
        result = "You Lose";
      } else if (computerMove === "Paper") {
        result = "You Win";
      } else {
        result = "Tie";
      }
    } else if (playerMove === "Paper") {
      if (computerMove === "Rock") {
        result = "You Win";
      } else if (computerMove === "Paper") {
        result = "Tie";
      } else {
        result = "You Lose";
      }
    } else if (playerMove === "Rock") {
      if (computerMove === "Rock") {
        result = "Tie";
      } else if (computerMove === "Paper") {
        result = "You Lose";
      } else {
        result = "You Win";
      }
    }
    if (result === "You Win") {
      score.wins += 1;
    } else if (result === "You Lose") {
      score.losses += 1;
    } else {
      score.tie += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));

    updateScore();
    document.querySelector(".js-result").innerHTML = result;
    document.querySelector(".js-moves").innerHTML = `You Picked (${playerMove}) | Computer Picked (${computerMove})`;
  }

  function updateScore() {
    document.querySelector(
      ".js-score"
    ).innerHTML = ` | Wins : ${score.wins}  |  Losses : ${score.losses}  |  Ties : ${score.tie} | `;
  }

  function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = "";
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "Rock";
    } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
      computerMove = "Paper";
    } else {
      computerMove = "Scissors";
    }
    return computerMove;
  }