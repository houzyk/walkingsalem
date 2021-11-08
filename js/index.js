// Initialises Field
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
let salemPosition = Math.floor(Math.random() * 1499);
grids[salemPosition].classList.add('salem');

// * Salem Movement Logic
const moveSalem = (keyPress) => {
  const changeGridColor = (value) => {
    grids[salemPosition].classList.remove('salem');
    salemPosition += value;
    grids[salemPosition].classList.add('salem');
  }
  if (keyPress === "ArrowUp" && salemPosition >= 50) changeGridColor(-50);
  if (keyPress === "ArrowDown" && salemPosition < 1450) changeGridColor(50);
  if (keyPress === "ArrowLeft") {
    for (let index = 0; index <= 1450; index+= 50) { if (salemPosition === index) return; }
    changeGridColor(-1);
  } else if (keyPress === "ArrowRight") {
    for (let index = 49; index <= 1500; index+= 50) { if (salemPosition === index) return; }
    changeGridColor(1);
  }
}

window.addEventListener('keydown', event => moveSalem(event.key));
