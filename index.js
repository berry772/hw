
const DURATION = 5000 // 5s
const cardOuterEl = document.querySelector(".card-outer")
const letterEl = document.getElementById("letter")
const bottomButton1 = document.getElementById("bottom-button-1")
const bottomButton2 = document.getElementById("bottom-button-2")
const bottomButton3 = document.getElementById("bottom-button-3")
let showTimer = false
let timeout = null
const 자음 = ["ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"]
const 모음 = ["ㅏ", "ㅑ", "ㅓ", "ㅕ", "ㅗ", "ㅛ", "ㅜ", "ㅠ", "ㅡ", "ㅣ"]
const short = [
    ["가", "나", "다", "라", "마", "바", "사", "아", "자", "차", "카", "타", "파", "하"],
    ["갸", "냐", "댜", "랴", "먀", "뱌", "샤", "야", "쟈", "챠", "캐", "턔", "퍄", "햐"],
    ["거", "너", "더", "러", "머", "버", "서", "어", "저", "처", "커", "터", "퍼", "허"],
    ["겨", "녀", "됴", "려", "몌", "벼", "셔", "여", "져", "쳐", "쿄", "텨", "펴", "혀"],
    ["고", "노", "도", "로", "모", "보", "소", "오", "조", "초", "코", "토", "포", "호"],
    ["교", "뇨", "됴", "료", "묘", "뵤", "쇼", "요", "죠", "쵸", "쿄", "툐", "표", "효"],
    ["구", "누", "두", "루", "무", "부", "수", "우", "주", "추", "쿠", "투", "푸", "후"],
    ["규", "뉴", "듀", "류", "뮤", "뷰", "슈", "유", "쥬", "츄", "큐", "튜", "퓨", "휴"],
    ["그", "느", "드", "르", "므", "브", "스", "으", "즈", "츠", "크", "트", "프", "흐"],
    ["기", "니", "디", "리", "미", "비", "시", "이", "지", "치", "키", "티", "피", "히"],
]
const get자음 = () => {
    const prev = letterEl.textContent
    let next = prev
    while (prev === next) {
        next = 자음[Math.floor(Math.random() * 14)]
    }
    letterEl.textContent = next
}
const get모음 = () => {
    const prev = letterEl.textContent
    let next = prev
    while (prev === next) {
        next = 모음[Math.floor(Math.random() * 10)]
    }
    letterEl.textContent = next
}
const getShort = () => {
    const prev = letterEl.textContent
    let next = prev
    while (prev === next) {
        next = short[Math.floor(Math.random() * 10)][Math.floor(Math.random() * 14)]
    }
    letterEl.textContent = next
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
const timerSwitch = document.getElementById("timer-switch")
timerSwitch.addEventListener("change", toggleTimer)
bottomButton1.addEventListener("click", () => {
    get자음()
    showTimer && startTimer()
})
bottomButton2.addEventListener("click", () => {
    get모음()
    showTimer && startTimer()
})
bottomButton3.addEventListener("click", () => {
    getShort()
    showTimer && startTimer()
})