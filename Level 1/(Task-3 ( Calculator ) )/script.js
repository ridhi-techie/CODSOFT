let display = document.getElementById('display');

function appendValue(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = '0';
  }
}

function calculate() {
  try {
    let result = eval(display.innerText.replace('%', '/100'));
    display.innerText = result;
  } catch (e) {
    display.innerText = 'Error';
  }
}
