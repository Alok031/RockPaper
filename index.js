// let button = document.querySelector('.btn')
// button.addEventListener('click',()=>{
//  let randomNum = Math.floor(Math.random()*3)+1;
//  let randomImg = randomNum + ".png";
//  let src1 = "images/"+ randomImg;
//  document.querySelector('.image').src = src1
//  let randomNum1 = Math.floor(Math.random()*3)+1;
//  let randomImg1 = randomNum1 + ".png";
//  let src2 = "images/"+ randomImg1;
//  document.querySelector('.image1').src = src2
//  if(randomNum ===1 && randomNum1===2){
//     document.querySelector('.head').innerHTML="Player 2 wins"
//  }else if(randomNum ===1 && randomNum1===3){
//     document.querySelector('.head').innerHTML="Player 1 wins"
//  }else if(randomNum ===2 && randomNum1===1){
//     document.querySelector('.head').innerHTML="Player 1 wins"
//  }else if(randomNum ===2 && randomNum1===3){
//     document.querySelector('.head').innerHTML="Player 2 wins"
//  }else if(randomNum ===3 && randomNum1===1){
//     document.querySelector('.head').innerHTML="Player 2 wins"
//  }else if(randomNum ===3 && randomNum1===2){
//     document.querySelector('.head').innerHTML="Player 1 wins"
//  }else {
//     document.querySelector('.head').innerHTML="Game Tie"
//  }

// })


// let button = document.querySelector(".btn");
// let roundsInput = document.querySelector("#roundsInput");
// let score1Display = document.querySelector(".score1");
// let score2Display = document.querySelector(".score2");

// button.addEventListener("click", () => {
//   const rounds = parseInt(roundsInput.value);
//   // console.log(rounds);
//   if (isNaN(rounds) || rounds <= 0) {
//     alert("Please enter valid rounds");
//     return;
//   }
//   playGame(rounds);
// });

// function playGame(rounds) {
//   let score1 = 0;
//   let score2 = 0;
//   let ties = 0;
//   for (var i = 0; i < rounds; i++) {
//     let randomNum = Math.floor(Math.random() * 3) + 1;
//     let randomNum1 = Math.floor(Math.random() * 3) + 1;
//     let randomImg = randomNum + ".png";
//     let src1 = "images/" + randomImg;
//     document.querySelector(".image").src = src1;
//     let randomImg1 = randomNum1 + ".png";
//     let src2 = "images/" + randomImg1;
//     document.querySelector(".image1").src = src2;
//     if (
//       (randomNum === 1 && randomNum1 === 2) ||
//       (randomNum === 2 && randomNum1 === 3) ||
//       (randomNum === 3 && randomNum1 === 1)
//     ) {
//       score2++;
//     } else if (
//       (randomNum === 2 && randomNum1 === 1) ||
//       (randomNum === 1 && randomNum1 === 3) ||
//       (randomNum === 3 && randomNum1 === 2)
//     ) {
//       score1++;
//     } else {
//       ties++;
//     }
//     score1Display.textContent = "Player 1: " + score1;
//     score2Display.textContent = "Player 2: " + score2;
//   }
//   if (score1 > score2) {
//     document.querySelector(".head").innerHTML = "Player1 won ";
//   } else if (score1 < score2) {
//     document.querySelector(".head").innerHTML = "Player2 won";
//   } else {
//     document.querySelector(".head").innerHTML = "Tied";
//   }
// }

let button = document.querySelector(".btn");
let roundsInput = document.querySelector("#roundsInput");
let score1Display = document.querySelector(".score1");
let score2Display = document.querySelector(".score2");

button.addEventListener("click", () => {
  const rounds = parseInt(roundsInput.value);
  if (isNaN(rounds) || rounds <= 0) {
    alert("Please enter valid rounds");
    return;
  }
  playGame(rounds);
});

function playGame(rounds) {
  let score1 = 0;
  let score2 = 0;
  let ties = 0;
  let currentRound = 0;

  function playRound() {
   
    if (currentRound < rounds) {
      let randomNum = Math.floor(Math.random() * 3) + 1;
      let randomNum1 = Math.floor(Math.random() * 3) + 1;
      let randomImg = randomNum + ".png";
      let src1 = "images/" + randomImg;
      document.querySelector(".image").src = src1;
      let randomImg1 = randomNum1 + ".png";
      let src2 = "images/" + randomImg1;
      document.querySelector(".image1").src = src2;

      if (
        (randomNum === 1 && randomNum1 === 2) ||
        (randomNum === 2 && randomNum1 === 3) ||
        (randomNum === 3 && randomNum1 === 1)
      ) {
        score2++;
      } else if (
        (randomNum === 2 && randomNum1 === 1) ||
        (randomNum === 1 && randomNum1 === 3) ||
        (randomNum === 3 && randomNum1 === 2)
      ) {
        score1++;
      } else {
        ties++;
      }
      score1Display.textContent = "Player 1: " + score1;
      score2Display.textContent = "Player 2: " + score2;
      currentRound++;
      setTimeout(playRound, 1000);
    } else {
      if (score1 > score2) {
        document.querySelector(".head").innerHTML = "Player 1 won";
      } else if (score1 < score2) {
        document.querySelector(".head").innerHTML = "Player 2 won";
      } else {
        document.querySelector(".head").innerHTML = "Tied";
      }
    }
  }

  playRound();
}
