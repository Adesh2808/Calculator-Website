function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
      display.value = eval(display.value.replace('x', '*'));
  } catch {
      display.value = 'Error';
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}