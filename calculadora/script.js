
const stringnumberone = document.getElementById('calc1')
const stringnumbertwo = document.getElementById('calc2')

const calcbtn = document.getElementById('calc-btn')   
const cebtn = document.getElementById('ce-btn')
const upbtn = document.getElementById('up-btn')
let resultado = document.querySelector('.result')
let numberone = Number(stringnumberone.value)
let numbertwo = Number(stringnumbertwo.value)
let operador = document.getElementById('operador')

    
    var soma;
    var div;
    var sub;
    var mult;
    
function calcular(){   
        
    let resultado = document.querySelector('.result')

    let numberone = Number(stringnumberone.value)
    let numbertwo = Number(stringnumbertwo.value)

    console.clear()

   let operador = document.getElementById('operador')
    
    function somar(){
        soma = numberone + numbertwo
        console.log(soma)   
        resultado.innerHTML = `<p>${soma}</p>` 
        return soma
    }
      
    function subtrair(){
        sub = numberone - numbertwo
        console.log(sub)
        resultado.innerHTML = `<p>${sub}</p>` 
        return sub
    }
    
    function dividir(){
        div = numberone / numbertwo
        console.log(div)
        resultado.innerHTML = `<p>${div}</p>` 
        return div
    }
    
    function multiplicar(){
        mult = numberone * numbertwo
        console.log(mult)
        resultado.innerHTML = `<p>${mult}</p>` 
        return mult
    }

    if( operador.value == 'soma'){
        somar();
    } else if ( operador.value == 'sub' ){
        subtrair();
    } else if ( operador.value == 'div'){
        dividir();
    } else {
        multiplicar();
    }
}

function limpar(){
    resultado.innerHTML = ''
    stringnumberone.value = ''
    stringnumbertwo.value = ''
}

function subir(){
    if ( stringnumberone.value == '' ){
       window.alert('Deve-se haver um resultado!')
    } else {
        if ( operador.value == 'soma'){
            stringnumberone.value = soma
        } else if ( operador.value == 'sub' ){
            stringnumberone.value = sub
        } else if ( operador.value == 'div' ){
            stringnumberone.value = div
        } else {
            stringnumberone.value = mult
        }
    }
}

