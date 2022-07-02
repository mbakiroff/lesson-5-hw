

const startEl = document.getElementById('start');
const gameEl = document.getElementById('game');
const timeEl = document.getElementById('time');
const timeHeaderEl = document.getElementById('time-header');
const resultHeaderEl = document.getElementById('result-header');
const resultEl = document.getElementById('result');
const gameTimeEl = document.getElementById('game-time');

const img = [
    "https://myfreesoft.ru/wp-content/uploads/2019/03/prephoto1.jpg",
    "https://cameralabs.org/media/lab16/post/12-16/07/50_Luchshikh_fotografij_goda_ot_national_Geographic_14.jpg",
    "https://lookw.ru/11/1135/1567186711-cvetochnye-fei-50.jpg"

]

console.log(startEl, gameEl, timeEl, timeHeaderEl, resultEl, resultHeaderEl, gameTimeEl);


startEl.addEventListener('click', startGame,)

gameEl.addEventListener('click', handleBox)

gameTimeEl.addEventListener('input', setGameTime)



let score = 0

function startGame() {
    setGameTime()
    score = 0
    startEl.classList.add('hide')

    gameEl.style.backgroundColor = "orange";
    gameTimeEl.setAttribute("disabled", true)

    let timeGame = +timeEl.innerText;


    let interval = setInterval(function () {
        if (timeGame <= 0) {
            clearInterval(interval)
            endGame()
        }
        else {
            timeGame = (timeGame - 0.1).toFixed(1);
            timeEl.innerText = timeGame;
        }
    }, 100)
    renderBox()


}

function endGame() {
    startEl.classList.toggle('hide');
    gameEl.style.backgroundColor = "#ccc";
    gameTimeEl.removeAttribute("disabled")
    gameEl.innerHTML = "";
    timeHeaderEl.classList.toggle('hide');
    resultHeaderEl.classList.toggle('hide');
    resultEl.innerText = score;
}




function renderBox() {
    gameEl.innerHTML = ""

    let box = document.createElement('div');

    let boxSize = getRandom(30, 150)
    let gameZone = gameEl.getBoundingClientRect();
    let maxLeft = gameZone.width - boxSize;
    let maxTop = gameZone.height - boxSize;

    let imgIndex = getRandom(0, img.length);

    box.style.width = box.style.height = boxSize + 'px';
    box.style.background = `url(${img[imgIndex]} ) center/cover`;
    box.style.cursor = 'pointer';
    box.style.position = 'absolute';
    box.style.left = getRandom(0, maxLeft) + 'px';
    box.style.top = getRandom(0, maxTop) + 'px';
    box.id = 'check';
    gameEl.appendChild(box);



}

function handleBox(event) {
    if (event.target.id === 'check') {
        score += 1;
        renderBox();
        console.log('click');
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function setGameTime() {
    let gameTime = +gameTimeEl.value;

    timeEl.innerText = gameTime.toFixed(1);
    resultHeaderEl.classList.add('hide')
    timeHeaderEl.classList.remove('hide')

}

