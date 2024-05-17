let calculate = document.querySelector("button")
let input01 = document.querySelectorAll("input")[0]
let input02 = document.querySelectorAll("input")[1]
let Answer = document.querySelector(".Answer")

calculate.addEventListener('click',()=>{
 Answer.innerText = parseFloat(eval(`${input01.value} / ((${input02.value}/100)**2)`)).toFixed(2)
})