let inp1 =document.querySelector(".inp1")
let inp2 =document.querySelector(".inp2")
let inp3 =document.querySelector(".inp3")
let btn=document.querySelector(".btn")

let toket = "7192727584:AAH6nb-2h4RnLUCUM-BVyPNJ5vkmkpndNm0"
let id = 1897291249


btn.addEventListener('click',(e)=>{
    e.preventDefault()
    fetch(
        `https://api.telegram.org/bot${toket}/sendMessage?chat_id=${id}&text=${"ism: "+inp1.value}`
    )
    fetch(
        `https://api.telegram.org/bot${toket}/sendMessage?chat_id=${id}&text=${"familiya: "+inp2.value}`
    )
    fetch(
        `https://api.telegram.org/bot${toket}/sendMessage?chat_id=${id}&text=${"yoshi: "+inp3.value}`
    )
    inp1.value= ""
    inp2.value= ""
    inp3.value= ""
})