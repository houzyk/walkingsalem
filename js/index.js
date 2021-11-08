// Initialises Field and Salems' Positions
const container = document.querySelector('.container');
for (let index = 0; index < 30; index++) {
  container.insertAdjacentHTML('beforeend', `
    <div class="gamerow">
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
      <div class="grid"></div>
    </div>`);
}
const grids = document.querySelectorAll('.grid');
let salem1Position = 1450;
let salem2Position = 49;
grids[salem1Position].classList.add('salem');
grids[salem2Position].classList.add('salem2');

// Initialises Environment
let initialPosition = 750;
grids.forEach(() => {
  const randomGame = Math.floor(Math.random() * 4);
  initialPosition += [1, -1, 50, -50][randomGame];
  if (initialPosition >= 50 && initialPosition < 1450) {
    for (let index = 0; index <= 1450; index+= 50) { if (initialPosition === index) initialPosition += 1; }
    for (let index = 49; index <= 1500; index+= 50) { if (initialPosition === index) initialPosition -= 1; }
    grids[initialPosition].classList.add('environment');
  }
});

// * Salems Movement Logic
const moveSalems = (keyPress) => {
  // ! DRY
  const changeSalem1 = (value) => {
    grids[salem1Position].classList.remove('salem');
    salem1Position += value;
    grids[salem1Position].classList.add('salem');
  }
  const changeSalem2 = (value) => {
    grids[salem2Position].classList.remove('salem2');
    salem2Position += value;
    grids[salem2Position].classList.add('salem2');
  }
  if (keyPress === "ArrowUp" && salem2Position >= 50) changeSalem2(-50);
  if (keyPress === "w" && salem1Position >= 50) changeSalem1(-50);
  if (keyPress === "ArrowDown" && salem2Position < 1450) changeSalem2(50);
  if (keyPress === "s" && salem1Position < 1450) changeSalem1(50);
  if (keyPress === "ArrowLeft") {
    for (let index = 0; index <= 1450; index+= 50) { if (salem2Position === index) return; }
    changeSalem2(-1);
  } else if (keyPress === "ArrowRight") {
    for (let index = 49; index <= 1500; index+= 50) { if (salem2Position === index) return; }
    changeSalem2(1);
  }
  if (keyPress === "a") {
    for (let index = 0; index <= 1450; index+= 50) { if (salem1Position === index) return; }
    changeSalem1(-1);
  } else if (keyPress === "d") {
    for (let index = 49; index <= 1500; index+= 50) { if (salem1Position === index) return; }
    changeSalem1(1);
  }
}

window.addEventListener('keydown', event => moveSalems(event.key));
