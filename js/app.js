const choiceList = document.getElementsByClassName("choice")
const goodList = document.getElementsByClassName("good")
const badList = document.getElementsByClassName("bad")
const closeBtn = document.getElementById("close-button")
const goBackBtn = document.getElementById("go-back")
const showQuestionsBtn = document.getElementById("sq-btn")
const bigWrapperEl = document.getElementById("big-wrapper-el")
const wrapperEl = document.getElementById("wrapper-el")
const resultEl = document.getElementById("result")
console.log(choiceList)
let sum = 0
let topVal = 0

resultEl.textContent = sum + " / 5"

for(let i = 0; i < choiceList.length; i++){
    choiceList[i].addEventListener("click", function(){
        // console.log(this)
        if(this.value == "good"){
            console.log("yessir")
            sum += 1
            resultEl.textContent = sum + " / 5"
            this.style.backgroundColor = "#23DC3D"
        }
        else{
            this.style.backgroundColor = "#ff4141"
        }
        topVal -= 100
        // console.log(topVal)
        wrapperEl.style.top = topVal + "%"


    })
}

closeBtn.addEventListener("click", function(){
    bigWrapperEl.style.display = "none"
})

showQuestionsBtn.addEventListener("click", function(){
    bigWrapperEl.style.display = "initial"
})

goBackBtn.addEventListener("click",function(){
    location.reload();
})