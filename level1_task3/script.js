function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function calculateSquareRoot() {
  const display = document.getElementById('display');
  try {
    const result = Math.sqrt(eval(display.value));
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (!isNaN(key) || ['+', '-', '*', '/', '.', '(', ')', '^'].includes(key)) {
    appendToDisplay(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    backspace();
  } else if (key === 'Escape') {
    clearDisplay();
  } else if (key === 'r') { 
    calculateSquareRoot();
  }
});


const words = ['add?', 'subtract?', 'multiply?', 'divide?'];
let wordIndex = 0;

function changeText() {
  const animatedText = document.getElementById('animatedText');
  animatedText.textContent = words[wordIndex];
  wordIndex = (wordIndex + 1) % words.length;
}

setInterval(changeText, 2000);