//Declaração de Variáveis

let monthname
const days = []
const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

    for ( let x = 1; x<32; x++){
        days.push(Number(x))
    }

const tabela = document.createElement('table')
const body = document.getElementsByTagName('body')

    body[0].appendChild(tabela)

const tabelanobody = document.getElementsByTagName('table');
tabela.className = 'table-hover'
console.log(tabela)
const tabelahead = document.createElement('thead');
const tabelabody = document.createElement('tbody');
tabelabody.className = 'table-bordered'

const tabelaheadnobody = document.getElementsByTagName('thead')
const tabelabodynobody = document.getElementsByTagName('tbody')

 
// Nomes dos dias da semana

function headercalendario(monthname) {
    
    var trnameheader = document.createElement('tr')
    var thnameheader = document.createElement('th')
    var textothnameheader = document.createTextNode(monthname)

    thnameheader.appendChild(textothnameheader)
    trnameheader.appendChild(thnameheader)
    tabelaheadnobody[0].appendChild(trnameheader)

    

}

tabelanobody[0].appendChild(tabelahead)
tabelanobody[0].appendChild(tabelabody)
const tabelatr1 = document.createElement('tr')
const tabelatrnobody = document.getElementsByTagName('tr')

    tabelaheadnobody[0].appendChild(tabelatr1)


function diasdasemana(){
    for ( var i = 0; i<weekdays.length; i++){

        var thdiassemana = document.createElement('th')
        var textothdiassemana = document.createTextNode(weekdays[i])

        thdiassemana.appendChild(textothdiassemana)

        tabelatrnobody[0].appendChild(thdiassemana)
    }
}


// Tabelas relacionadas com as Semanas
function linhassemanas(){
    for ( var i = 0; i<5; i++){

        let tabelatrsemanas = document.createElement(`tr`)
        tabelatrsemanas.id = `semana${i}`
        let textotr = document.createTextNode('')
    
        tabelatrsemanas.appendChild(textotr)
        tabelabodynobody[0].appendChild(tabelatrsemanas)

    }
}

function preenchercalendario() {
    
    let semana0 = document.getElementById('semana0')
    let semana1 = document.getElementById('semana1')
    let semana2 = document.getElementById('semana2')
    let semana3 = document.getElementById('semana3')
    let semana4 = document.getElementById('semana4')

    for ( var i = 1; i<days.length; i++){

        if ( i < 8 ){

            var thtotaldays =  document.createElement('th')
            var textothtotaldays = document.createTextNode(i)

            thtotaldays.appendChild(textothtotaldays)

            semana0.appendChild(thtotaldays)

    } else if ( i < 15 ) {

        var thtotaldays =  document.createElement('th')
        var textothtotaldays = document.createTextNode(i)

        thtotaldays.appendChild(textothtotaldays)

        semana1.appendChild(thtotaldays)

    } else if ( i < 22 ) {
        var thtotaldays =  document.createElement('th')
        var textothtotaldays = document.createTextNode(i)

        thtotaldays.appendChild(textothtotaldays)

        semana2.appendChild(thtotaldays)
    } else if ( i < 29 ) {
        var thtotaldays =  document.createElement('th')
        var textothtotaldays = document.createTextNode(i)

        thtotaldays.appendChild(textothtotaldays)

        semana3.appendChild(thtotaldays)
    } else {
        var thtotaldays =  document.createElement('th')
        var textothtotaldays = document.createTextNode(i)

        thtotaldays.appendChild(textothtotaldays)

        semana4.appendChild(thtotaldays)
    }

}

    for ( let i = 1; i<6; i++ ){
        var thtotaldays =  document.createElement('th')
        var textothtotaldays = document.createTextNode(i)

        thtotaldays.appendChild(textothtotaldays)

        semana4.appendChild(thtotaldays)
        thtotaldays.style.color = '#C0C0C0'
    }

}

headercalendario('Abril')
diasdasemana();
linhassemanas();
preenchercalendario();



/*console.log(tabelabodynobody[0]);
console.log(tabelaheadnobody[0]);
console.log(tabelanobody[0]) */