let calculation = localStorage.getItem('calculation') || '0';

displayCalculation();
let equated = false;

function updateCalculation(buttonVal) {
  if (typeof buttonVal === 'number') {
    if (equated || calculation === '0') {
      calculation = String(buttonVal);
      equated = false;
    } else {
      calculation += buttonVal;
      equated = false;
    }
  } else if (buttonVal === '.') {
    calculation += buttonVal;
    equated = false;
  } else if (buttonVal === '=') {
    calculation = calculation.replace('\u2212', '-');
    calculation = calculation.replace('\u00D7', '*');
    calculation = calculation.replace('\u00F7', '/');
    calculation = String(eval(calculation).toFixed(10));
    equated = true;
  } else if (buttonVal === 'Clear') {
    calculation = '0';
    equated = false;
  } else if (buttonVal === 'Cut') {
    calculation = calculation.slice(0, -1);
    if (calculation === '') {
      calculation = '0';
    }
    equated = false;
  } else {
    calculation += ` ${buttonVal} `;
    equated = false;
  }

  localStorage.setItem('calculation', calculation);
  displayCalculation();
}

function displayCalculation() {
  screen = document.querySelector('.results-tab');
  screen.innerHTML = calculation;
  screen.scrollLeft = screen.scrollWidth;
}