let ini = document.querySelector('#ini')
let end = document.querySelector('#end')
let way = document.querySelector('#way')
let btnClick = document.querySelector('#btn')
let result = document.querySelector('#result')

btnClick.addEventListener('click', changeText)

function changeText() {
    result.innerHTML = ``
    if (ini.value.length <= 0 || end.value.length <= 0 || way.value.length <= 0) {
        alert('Preencha coretamente os valores.')
    } else {
        let i = Number(ini.value)
        let e = Number(end.value)
        let w = Number(way.value)
        for(let a = i; a <= e; a += w)
            result.innerHTML += ` ${a} =>`
    }
    result.innerHTML += `\u{1F3C1} END`
}
