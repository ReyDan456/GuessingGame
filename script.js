// Simulated user authentication (Replace with your authentication logic)
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validate credentials - For demonstration purposes
  if (username === 'user' && password === 'password') {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('game-page').style.display = 'block';
    startGame();
  } else {
    alert('Invalid username or password. Try again.');
  }
});

function startGame() {
  let secretNumber = Math.floor(Math.random() * 10) + 1;
  let chances = 3;

  document.getElementById('submitGuess').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('userGuess').value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
      alert('Please enter a valid number between 1 and 10.');
      return;
    }

    if (userGuess === secretNumber) {
      document.getElementById('result').innerText = 'Congratulations! You guessed the correct number.';
      document.getElementById('retryBtn').disabled = false;
    } else {
      chances--;
      if (chances > 0) {
        document.getElementById('result').innerText = userGuess > secretNumber ? 'Try a lower number.' : 'Try a higher number.';
        document.getElementById('remaining').innerText = `Chances remaining: ${chances}`;
      } else {
        document.getElementById('result').innerText = `Oops! The correct number was ${secretNumber}.`;
        document.getElementById('retryBtn').disabled = false;
      }
    }
  });

  // Retry the game
  document.getElementById('retryBtn').addEventListener('click', function() {
    chances = 3;
    document.getElementById('userGuess').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('remaining').innerText = '';
    document.getElementById('retryBtn').disabled = true;
    secretNumber = Math.floor(Math.random() * 10) + 1;
  });
}
