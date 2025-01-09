const computer = document.querySelector("#computer-choice");
const player = document.querySelector("#player-choice");
const compPoints = document.querySelector(".computer-points");
const playPoints = document.querySelector(".player-points");
const options = document.querySelectorAll(".controls button");

const choices = ["stone", "paper", "scissors"];
const getResult = (playerChoice, compChoice) => {
  if (playerChoice === compChoice)
     return "draw";
  if (
    (playerChoice === "stone" && compChoice === "scissors") ||
    (playerChoice === "paper" && compChoice === "stone") ||
    (playerChoice === "scissors" && compChoice === "paper")
  )
    return "player";
    return "computer";
};

options.forEach((option) => {
  option.addEventListener("click", () => {
    const playerChoice = option.innerHTML.toLowerCase();
    const compChoice = choices[Math.floor(Math.random() * 3)];

    computer.classList.add("motioncomp");
    player.classList.add("motionplayer");

    setTimeout(() => {
      computer.classList.remove("motioncomp");
      player.classList.remove("motionplayer");

      player.src = `img/${playerChoice}Player.png`;
      computer.src = `img/${compChoice}Computer.png`;

      const result = getResult(playerChoice, compChoice);

      if (result === "player") {
        playPoints.innerHTML = parseInt(playPoints.innerHTML) + 1;
      } else if (result === "computer") {
        compPoints.innerHTML = parseInt(compPoints.innerHTML) + 1;
      }
    }, 900);
  });
});
