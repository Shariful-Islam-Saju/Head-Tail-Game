

console.clear()

const head = document.getElementById('head')
const tail = document.getElementById('tail')
const play = document.getElementById('play')
const reset = document.getElementById('reset')
const result = document.getElementById('result')

let playerMove = ''
const scoreBoard = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  lose: 0
}



head.addEventListener('click', () => {
  result.innerHTML ='You choose <span class="Win"> Head </span>'
  playerMove = 'Head'
})

tail.addEventListener('click', () => {
  result.innerHTML ='You choose <span class="Win">Tail </span>'
  playerMove = 'Tail'
})



play.addEventListener('click', () => {

  const randomNumber = Math.floor(Math.random() * 2) + 1
  const gussingTheNumber = randomNumber === 1 ? 'Head' : 'Tail'

  setTimeout(() => {

    if (playerMove === gussingTheNumber) {
      showResult(playerMove, 'Win')
      scoreBoard.win++
      showScore()
      stroge()
    } else if (playerMove) {
      showResult(playerMove, 'Lose')
      scoreBoard.lose++
      showScore()
      stroge()
    }
  }, 500);

})


function showResult(pMove, res) {
  result.innerHTML = `You Choose <span class="${res}">${pMove}</span>. You <span class="${res}">${res}</span>`
}

function showScore() {
  document.getElementById('score').innerHTML = `<p>Win :<span class="green"> ${scoreBoard.win}</span></p> <p> Lose : <span class="red"> ${scoreBoard.lose}</span></p>`
}

document.getElementById('reset').addEventListener('click', () => {
  scoreBoard.win = 0
  scoreBoard.lose = 0
  showScore()
  stroge()
})

showScore()

function stroge() {
  localStorage.setItem('score', JSON.stringify(scoreBoard))
}



