const stoperica = document.getElementById('stoperica')
const btnStart = document.getElementById('button-start')
const btnStop = document.getElementById('button-stop')
const btnReset = document.getElementById('button-reset')
let broj = 0, sekunde, minuti, sati
let id
stoperica.innerHTML = '00:00:00'

btnStart.addEventListener('click', start)

function start() {
    btnStart.disabled = true
    id = setInterval(function () {
        broj++
        sekunde = broj % 60
        minuti = Math.floor(broj / 60) % 60
        sati = Math.floor(broj / 3600)
        let sek = (sekunde < 10) ? `0${sekunde}`:`${sekunde}`
        let min = (minuti < 10) ? `0${minuti}`:`${minuti}`
        let sat = (sati < 10) ? `0${sati}`:`${sati}`
        stoperica.innerHTML = `${sat}:${min}:${sek}`
    }, 1000)
}

btnStop.addEventListener('click', function () {
    clearInterval(id)
    btnStart.disabled = false
})

btnReset.addEventListener('click', function () {
    clearInterval(id)
    broj = 0
    sekunde = 0
    minuti = 0
    sati = 0
    stoperica.innerHTML = '00:00:00'
    btnStart.disabled = false
})