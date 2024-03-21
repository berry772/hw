
const DURATION = 5000 // 5s
const cardOuterEl = document.querySelector(".card-outer")
const letterEl = document.getElementById("letter")
const bottomButton1 = document.getElementById("bottom-button-1")
const bottomButton2 = document.getElementById("bottom-button-2")
const bottomButton3 = document.getElementById("bottom-button-3")
const timerSwitch = document.getElementById("timer-switch")
const 난이도form = document.getElementById("난이도form")
let showTimer = false
let timeout = null
let 현재난이도 = 1

function pickRandomLetter(pickerFn) {
    const prev = letterEl.textContent
    let next = prev
    while (prev === next || next == null) {
        next = pickerFn()
    }
    letterEl.textContent = next
}
function pick자음() {
    const { 자음count, 모음count } = 난이도[현재난이도]
    pickRandomLetter(() => 자음[Math.floor(Math.random() * 자음count)])
    showTimer && startTimer()
}
function pick모음() {
    const { 자음count, 모음count } = 난이도[현재난이도]
    pickRandomLetter(() => 모음[Math.floor(Math.random() * 모음count)])
    showTimer && startTimer()
}
function pick조합() {
    const { 자음count, 모음count } = 난이도[현재난이도]
    pickRandomLetter(() => 조합[Math.floor(Math.random() * 모음count)][Math.floor(Math.random() * 자음count)])
    showTimer && startTimer()
}
function startTimer() {
    if (!showTimer) return
    cardOuterEl.classList.remove("full")
    cardOuterEl.classList.remove("over")
    setTimeout(() => cardOuterEl.classList.add("full"), 50)
    clearTimeout(timeout)
    timeout = setTimeout(() => {
        cardOuterEl.classList.add("over")
    }, DURATION)
}
function toggleTimer(e) {
    showTimer = e.target.checked
    if (!showTimer) {
        cardOuterEl.classList.remove("full")
        cardOuterEl.classList.remove("over")
    }
}

function init() {
    timerSwitch.addEventListener("change", toggleTimer)
    bottomButton1.addEventListener("click", pick자음)
    bottomButton2.addEventListener("click", pick모음)
    bottomButton3.addEventListener("click", pick조합)
    난이도form.addEventListener("change", e => {
        현재난이도 = parseInt(e.target.value)
    })
}
init()
