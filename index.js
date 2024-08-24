
let timer = document.getElementById("timer")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")
let id = null

let [hours, minutes, seconds] = [0, 0, 0]


function watchstart() {
    seconds++
    if (seconds == 60) {
        seconds = 0
        minutes++
        if (minutes == 60) {
            minutes = 0
            hours++
        }
    }

    let hrs = hours < 10 ? "0" + hours : hours
    let min = minutes < 10 ? "0" + minutes : minutes
    let sec = seconds < 10 ? "0" + seconds : seconds

    timer.innerHTML = hrs + ":" + min + ":" + sec
    

}

function startwatch() {

    if (id !== null) {
        clearInterval(id)
    }
    id = setInterval(watchstart, 1000)
}

function stopwatch() {
    clearInterval(id)
}

function resetwatch() {
    clearInterval(id);
    [hours, minutes,seconds] = [0, 0, 0]
    timer.innerHTML = "00:00:00"
}
