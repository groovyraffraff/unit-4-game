// finish loading before jquery //

$(document).ready(() => {
  // start score
  let totalScore = 0;
  $('#scoreVal').text(totalScore);

  // start wins
  let wins = 0;
  $('#wins').text(wins);

  // start losses
  let losses = 0;
  $('#losses').text(losses);

  // random numbers
  let randomNumbers = numbers();

  // Reset game
  function reset() {

    // back to random number start
    randomNumbers = numbers();

    // Reset the total score
    totalScore = 0;
    $('#scoreVal').text(totalScore);
  }

  // Get the random numbers
  function numbers() {
    // Get the random numbers, add them to an object and return
    const numbersObject = {
      startNum: Math.floor(Math.random() * 120 + 19),
      garnetNum: Math.floor(Math.random() * 12 + 1),
      amethystNum: Math.floor(Math.random() * 12 + 1),
      pearlNum: Math.floor(Math.random() * 12 + 1),
      stevenNum: Math.floor(Math.random() * 12 + 1),
    };

    // place randomnumber
    $('#random').text(numbersObject.startNum);

    // Retun all the random numbers in an object to use later
    return numbersObject;
  } // End numbers

  // Increment the score after each click
  function incScore(value) {
    totalScore += value;

    // score in div
    $('#scoreVal').text(totalScore);

    // Convert to number
    const scoreInt = Number($('#scoreVal').text());

    // Compare the score with the random number
    if (scoreInt === randomNumbers.startNum) {
      console.log('Winner!');
      // Display Win Message inside div
      $('#result').text('You Win!!');

      // add wins
      wins = wins += 1;
      $('#wins').text(wins);

      // Reset the game
      reset();
    } else if (scoreInt > randomNumbers.startNum) {
      console.log('Loser...');

      // Display Loss Message
      $('#').text('You Lose!!');

      // Increment the losses and display
      losses = losses += 1;
      $('#losses').text(losses);

      // Reset the game
      reset();
    } // End check score against random number
  } // End intScore

  // on image clicks
  $('#Garnet').click(() => {
    incScore(randomNumbers.garnetNum);
  });

  $('#Amethyst').click(() => {
    incScore(randomNumbers.amethystNum);
  });

  $('#pearl').click(() => {
    incScore(randomNumbers.pearlNum);
  });

  $('#steven').click(() => {
    incScore(randomNumbers.stevenNum);
  });
});
