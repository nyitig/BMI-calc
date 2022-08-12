// checked 
const genderBox=document.querySelectorAll("[data-gender]")
const inputGender=document.getElementsByName("gender")
const spanGender=document.querySelectorAll("span")
const calcButton=document.getElementById("calcButton")
let checked=false
let genderTypeNum
for (let i = 0; i < genderBox.length; i++) {
  genderBox[i].addEventListener("click", () => {
    checked=true
    genderTypeNum=i
    inputGender[i].checked=true
    calcButton.innerHTML="Számold ki!"
    for (let j = 0; j < spanGender.length; j++) {
      if (j==i) {
        spanGender[j].classList.add('active')
      } else {
        spanGender[j].classList.remove('active')
      }
    }
  })
}
// range value 
// height
let height=185
let weight=120
const heightInput=document.getElementById('heightInput')
const heightH2=document.getElementById('heightH2')
heightInput.addEventListener('mousemove',() => {
  height=heightInput.value
  heightH2.innerHTML=height+" cm"
})
heightInput.addEventListener('touchmove',(event) => {
  height=heightInput.value
  heightH2.innerHTML=height+" cm"
})
// weight
const weightInput=document.getElementById('weightInput')
const weightH3=document.getElementById('weightH3')
weightInput.addEventListener('mousemove',() => {
  weight =weightInput.value
  weightH3.innerHTML=weight+" kg"
})
weightInput.addEventListener('touchmove',(event) => {
  weight =weightInput.value
  weightH3.innerHTML=weight+" kg"
})
// calculation
const bMI=[
    [18.1,20.1,25.1,30.1,35.1],
    [16.6,18.7,23.8,28.8,33.8],
]
const bMIText= ["Kóros soványság", "Sovány", "Normál testsúly", "Túlsúly", "Elhízás", "Súlyos elhízás"]
const resultBMINum=document.getElementById('resultBMINum')
const resultBMIText=document.getElementById('resultBMIText')
calcButton.addEventListener('click', () => {
  calcButton.classList.add('active')
  if (checked==false) {
    calcButton.innerHTML="Jelöld be a nemed!"
  }
  else {
    let a=parseFloat(weight)
    let b=parseFloat(height)/100
    let bMIresult= a/(b*b)
    resultBMINum.innerHTML=bMIresult.toFixed(2)
    if (genderTypeNum==0) {
      if (bMIresult.toFixed(2)>bMI[genderTypeNum][4]) {
        resultBMIText.innerHTML=bMIText[5]
      } else {
        for (let i = 0; i < bMI[0].length; i++) {
        if (bMIresult.toFixed(2)<bMI[genderTypeNum][i]) {
            resultBMIText.innerHTML=bMIText[i]
            break
          }
        }
      }
   } else {
    if (bMIresult.toFixed(2)>bMI[genderTypeNum][4]) {
      resultBMIText.innerHTML=bMIText[5]
    } else {
      for (let i = 0; i < bMI[0].length; i++) {
      if (bMIresult.toFixed(2)<bMI[genderTypeNum][i]) {
          resultBMIText.innerHTML=bMIText[i]
          break
        }
      }
    }
    }
 }
  setTimeout(() => {
    calcButton.classList.toggle('active')
  }, 100);
})
