import { NomeJogador} from './export.js'
import { TimeJogador} from './export.js'
import { IdadeJogador} from './export.js'

const nomejogador = document.querySelector('#nome-jogador')
const timejogador = document.querySelector('#time-jogador')
const idadejogador = document.querySelector('#idade-jogador')
let addjogador = document.getElementById('add-jogador-btn')
addjogador.addEventListener('click', adicionarjogador)
const personplayer = []
const personteam = []
const personage = []



console.log(`${nomejogador}`)

function adicionarjogador(){
    
    if ( nomejogador.value.length != 0 && timejogador.value.length != 0 && idadejogador.value.length != 0 ){
        personplayer.push(new NomeJogador(nomejogador.value))
        personteam.push(new TimeJogador(timejogador.value))
        personage.push(new IdadeJogador(idadejogador.value))

        console.clear(); 

        for (var x in personplayer ){
            console.log(`Jogador ${x}: `, personplayer[x]._name)
            console.log(`Time do Jogador ${x}:`, personteam[x]._time)
            console.log(`Idade do Jogador ${x}:`, personage[x]._age)
        }
        
    } else {
        window.alert('Preencha todas as áreas para poder adicionar um jogador!')
    }

}




