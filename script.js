let screen = document.getElementById('screen');
let currentInput = '';

function appendNumber(num) {
  currentInput += num;
  screen.value = currentInput;
}

function appendOperator(op) {
  if (currentInput === '') return; // éviter les opérateurs en premier
  currentInput += op;
  screen.value = currentInput;
}

function clearScreen() {
  currentInput = '';
  screen.value = '';
}

function calculate() {
  try {
    screen.value = eval(currentInput);
    currentInput = screen.value;
  } catch {
    screen.value = "Erreur";
    currentInput = '';
  }
}