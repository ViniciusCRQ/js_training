// Fazer um relógio em tempo real //

function showtime(){

    var time = new Date()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let seconds = time.getSeconds()
    var day = time.getDate()
    var month = time.getMonth()
    var year = time.getFullYear()


    switch(month){
        case 0 :
            month = 'Janeiro'
            break
        case 1 :
            month = 'Fevereiro'
            break
        case 2 :
            month = 'Março'
            break
        case 3 :
            month = 'Abril'
            break
        case 4 :
            month = 'Maio'
            break
        case 5 :
            month = 'Junho'
            break
        case 6 : 
            month = 'Julho'
            break
        case 7 :
            month = 'Agosto'
            break
        case 8 :
            month = 'Setembro'
            break
        case 9 : 
            month = 'Outubro'
            break
        case 10 :
            month = 'Novembro'
            break
        case 11 :
            month = 'Dezembro'
            break
    }

    if ( hour < 10 ){
        hour = '0'+hour
    }
    if ( minute < 10 ){
        minute = '0'+minute
    }
    if ( seconds < 10 ){
        seconds = '0'+seconds
    }

    let realtime = hour+':'+minute+':'+seconds+'<br> Data: Dia '+day+' de '+month+' de '+year

    document.getElementById('timer').innerHTML = `Horas: ${realtime}`
}

function inittime(){
    setInterval (showtime, 1000)
}