let count = 0
let ticket = 50
let sold = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let countSell = document.getElementById("count-up")
let ticketRm = document.getElementById("count-down")

function increment() {
    count += 1
    sold += 1
    countEl.textContent = count
    countSell.textContent = sold
}
function decrement() {
    ticket -= 1
    ticketRm.textContent = ticket
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

console.log("Let's count and update our movie tickets!")
