
var x = document.querySelectorAll('.hiddenBut, .hiddenCard, .cardbutton');

function open1() {
  x[0].style.display = 'flex';
  x[1].style.display = 'none';
  x[2].style.display = 'flex';
}

function open2() {
  x[3].style.display = 'flex';
  x[4].style.display = 'none';
  x[5].style.display = 'flex';
}

function close1() {
  x[0].style.display = 'none';
  x[1].style.display = 'flex';
  x[2].style.display = 'none';
}

function close2() {
  x[3].style.display = 'none';
  x[4].style.display = 'flex';
  x[5].style.display = 'none';
}

function change (element) {
  if (element.innerHTML = "Läs mer"){
    element.innerHTML = "Läs mindre"
  }
  else if (element.innerHTML = "Läs mindre"){
    element.innerHTML = "Läs mer"
  }
  }