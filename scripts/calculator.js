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
    calculation = String(eval(calculation));
    equated = true;
  } else if (buttonVal === 'Clear') {
    calculation = '0';
    equated = false;
  } else if (buttonVal === 'Cut') {
    if (calculation.at(-1) === ' ') {
      calculation = calculation.slice(0, -3);
    } else {
      calculation = calculation.slice(0, -1);
    }
    if (calculation === '') {
      calculation = '0';
    }
    equated = false;
  } else {
    if (calculation.at(-1) === ' ') {
      calculation = calculation.slice(0, -3);
    }
    calculation += ` ${buttonVal} `;
    equated = false;
  }

  localStorage.setItem('calculation', calculation);
  displayCalculation(buttonVal);
}

function displayCalculation(buttonVal = '=') {
  console.log(buttonVal);
  console.log(calculation);
  console.log(calculation.at(-1));
  screen = document.querySelector('.results-tab');
  screen.innerHTML = calculation;
  if (buttonVal === '=') {
    screen.scrollLeft = 0;
  } else {
    screen.scrollLeft = screen.scrollWidth;
  }
}