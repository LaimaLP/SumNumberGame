
// const sumDOM = 

const answerDOM = document.getElementById('answer')
const buttonDOM = document.getElementById('btn')

const resultDOM =document.getElementById("result") ;
const resultValue =document.getElementById("result-value");

let answerOptions = ["Valiooo :)", "Bandyk dar kartą :("];


let firstRandom;
let secondRandom;
let correctAnswerValue;
getRandom(20)

function getRandom(max){
     firstRandom = Math.floor(Math.random()* max)
     secondRandom = Math.floor(Math.random()* max)
    

    document.getElementById("number1").textContent=`${firstRandom}`
    document.getElementById("number2").textContent=`${secondRandom}`

    correctAnswerValue = firstRandom + secondRandom
 
}


document.getElementById("dar").addEventListener("click", ()=>{
    let max = 20;
    getRandom(max)
})

buttonDOM.addEventListener("click", function(){
    resultValue.classList.add("show");

    let userInput = +answerDOM.value

    if(userInput === correctAnswerValue){
        resultValue.textContent = answerOptions[0]
    }else{
        resultValue.textContent = answerOptions[1]
    }
})






// const offbackgroundDOM = document.querySelector(".block-container");
// offbackgroundDOM.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("veikia")
//     resultValue.classList.remove("show");
//   });



// const resultCDOM = document.querySelector(".result-container");
// const offbackgroundDOM =  resultCDOM.querySelector(".offbackground");

// if (buttonDOM && blockDOM) {
//     buttonDOM.addEventListener("click", () => {
//       asideDOM.classList.add("show");
//     });
  
//     asideBackgroundDOM.addEventListener("click", () => {
//       asideDOM.classList.remove("show");
//     });
  
//     asideCloseBtnDOM.addEventListener("click", () => {
//       asideDOM.classList.remove("show");
//     });
  
//     window.addEventListener("keyup", (event) => {
//       if (event.key === "Escape") {
//         asideDOM.classList.remove("show");
//       }
//       if (event.key === "+") {
//         asideDOM.classList.add("show");
//       }
//     });
//   }
  