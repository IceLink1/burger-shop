let data1 = [
    {
        img: './imges/h1.jpg',
        nomi: 'HOLY CHUCK',
        narxi: '13000'
    },
    {
        img: './imges/h2.jpg',
        nomi: 'BYMARK',
        narxi: '16000'
    },
    {
        img: './imges/h3.jpg',
        nomi: 'GOLDEN STAR',
        narxi: '25000'
    },
    {
        img: './imges/h4.jpg',
        nomi: 'BLUE PLATE',
        narxi: '15000'
    },
    {
        img: './imges/h5.jpg',
        nomi: ' UNION',
        narxi: '22000'
    },
    {
        img: './imges/h6.jpg',
        nomi: 'BESTELLEN',
        narxi: '10000'
    },
    {
        img: './imges/h7.jpg',
        nomi: 'ORIGN',
        narxi: '25000'
    },
    {
        img: './imges/h8.jpg',
        nomi: 'THE BURGER',
        narxi: '23000'
    },
    {
        img: './imges/h9.jpg',
        nomi: 'THE DRAKE',
        narxi: '31000'
    }

]
let data2 = [
    {
        img: './imges/b1.jpg',
        nomi: 'CHILI CHEESE',
        narxi: '19000'
    },
    {
        img: './imges/b2.jpg',
        nomi: 'CHICAGO',
        narxi: '21000'
    },
    {
        img: './imges/b3.jpg',
        nomi: 'DOUBLE DOG',
        narxi: '10000'
    },
    {
        img: './imges/b4.jpg',
        nomi: 'BLT',
        narxi: '15000'
    },
    {
        img: './imges/b5.jpg',
        nomi: 'BACON BLEU',
        narxi: '12000'
    },
    {
        img: './imges/b6.jpg',
        nomi: 'MAXWELL',
        narxi: '30000'
    },
    {
        img: './imges/b7.jpg',
        nomi: 'SPYCE',
        narxi: '25000'
    },
    {
        img: './imges/b8.jpg',
        nomi: 'BBQ',
        narxi: '22000'
    },
    {
        img: './imges/b9.jpg',
        nomi: 'SRIRACHA',
        narxi: ' 16000'
    }

]



let dayOrNight = localStorage.getItem("day")
let ul1 = document.querySelector('.ul1')
let ul2 = document.querySelector('.ul2')
let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')
let dayNi = document.querySelector(".div_day_night")
let day = document.querySelectorAll(".day")
let night = document.querySelectorAll(".night")
let Main = document.querySelector(".Main")
let card = document.querySelector("#card")
let con
a
for (let i = 0; i; i++) {
    
}


if (dayOrNight == 1) {
    Main.classList.remove("change")
    dayNi.classList.remove("forday")
    inp1.classList.remove('forinp')
    inp2.classList.remove('forinp')
}
if (dayOrNight == 0) {
    Main.classList.add("change")
    dayNi.classList.add("forday")
    inp1.classList.add('forinp')
    inp2.classList.add('forinp')
}



function UL1() {
    ul1.textContent = ""
    data1.forEach((e) => {
        let li = document.createElement('li')
        ul1.appendChild(li)
        li.innerHTML = `
       <div class="card" id="card">
                           <img src="${e.img}" alt="">
                           <div class="caontent_card">
                               <h1>${e.nomi}</h1>
                               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsam, autem fugiat
                                   magnam aliquam repellendus ut dolorum? At, veritatis sapiente?</p>
                               <p class="narx">${"narxi: " + e.narxi + " so'm"}</p>
                               <button class="btn1">Buy</button>
                           </div>
           </div>
       `
    })
}
UL1()

function UL2() {
    ul2.textContent = ""
    data2.forEach((e) => {
        let li = document.createElement('li')
        ul2.appendChild(li)
        li.innerHTML = `
       <div class="card" id="card">
                           <img src="${e.img}" alt="">
                           <div class="caontent_card">
                               <h1>${e.nomi}</h1>
                               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsam, autem fugiat
                                   magnam aliquam repellendus ut dolorum? At, veritatis sapiente?</p>
                               <p class="narx">${e.narxi}</p>
                               <button class="btn1">Buy</button>
                           </div>
                       </div>
       `
    })

}
UL2()

inp1.addEventListener('keyup', () => {
    let u = inp1.value.toUpperCase()
    data1.forEach((e) => {
        if (u !== e.nomi) {
            UL1()
        }
    })
    data1.forEach((e) => {
        if (e.nomi == u) {
            ul1.textContent = ""
            let li = document.createElement("li")
            ul1.appendChild(li)
            li.innerHTML = `
            <div class="card">
            <img src="${e.img}" alt="">
            <div class="caontent_card">
                <h1>${e.nomi}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsam, autem fugiat
                    magnam aliquam repellendus ut dolorum? At, veritatis sapiente?</p>
                <p class="narx">${e.narxi}</p>
                <button class="btn">Buy</button>
            </div>
        </div>
            `
        }
    })


})

inp2.addEventListener('keyup', () => {
    let u1 = inp2.value.toUpperCase()
    data2.forEach((e) => {
        if (u1 !== e.nomi) {
            UL2()
        }
    })
    data2.forEach((e) => {
        if (u1 == e.nomi) {
            ul2.textContent = ""
            let li = document.createElement('li')
            ul2.appendChild(li)
            li.innerHTML = `
            <div class="card">
                                <img src="${e.img}" alt="">
                                <div class="caontent_card">
                                    <h1>${e.nomi}</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsam, autem fugiat
                                        magnam aliquam repellendus ut dolorum? At, veritatis sapiente?</p>
                                    <p class="narx">${e.narxi}</p>
                                    <button class="btn1">Buy</button>
                                </div>
                            </div>
            `
        }
    })
})

day.forEach((e) => {
    e.addEventListener('click', () => {
        Main.classList.remove("change")
        dayNi.classList.remove("forday")
        inp1.classList.remove('forinp')
        inp2.classList.remove('forinp')

        localStorage.setItem("day", 1)
    })
})

night.forEach((e) => {
    e.addEventListener('click', () => {
        Main.classList.add("change")
        dayNi.classList.add("forday")
        inp1.classList.add('forinp')
        inp2.classList.add('forinp')

        localStorage.setItem("day", 0)
    })
})

