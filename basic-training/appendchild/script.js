let days = []
let weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

for ( let x = 1; x<32; x++){
    days.push(Number(x))
}

let tabela = document.createElement('table')

let body = document.getElementsByTagName('body')

body[0].appendChild(tabela)

let tabelanobody = document.getElementsByTagName('table');

let tabelahead = document.createElement('thead');

let tabelabody = document.createElement('tbody');

let tabelaheadnobody = document.getElementsByTagName('thead')
let tabelabodynobody = document.getElementsByTagName('tbody')

tabelanobody[0].appendChild(tabelahead)


let tabelatr = document.createElement('tr')
   
tabelaheadnobody[0].appendChild(tabelatr)

let tabelatrnobody = document.getElementsByTagName('tr')

for ( var i = 0; i<weekdays.length; i++){

    var tabelatr1 = document.createElement('tr')

    var thfor = document.createElement('th')

    var textoth = document.createTextNode(weekdays[i])

    thfor.appendChild(textoth)

    tabelatrnobody[0].appendChild(thfor)
    tabelatrnobody[0].appendChild(tabelatr1)

}

for ( var i = 0; i<4; i++){
    let tabelatr1 = document.createElement('tr')
}

console.log(tabelaheadnobody[0]);


