    
    const stringnumberone = document.getElementById('calc1')
    const stringnumbertwo = document.getElementById('calc2')
    const calcbtn = document.getElementById('calc-btn')
    calcbtn.addEventListener('click', calcular())

    console.clear()

function calcular(){


    const operador = document.getElementById('operador')
    const numberone = Number(stringnumberone.value)
    const numbertwo = Number(stringnumbertwo.value)
    const resultado = document.querySelector('.result')
 
    let soma;
    let div;
    let sub;
    let mult;

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