
// break
for ( let i = 10; i>0 ; i-- ){
    
    console.log(i);
    
    if ( i == 5 ){
        break;
    }
}

console.log('Deu Break!');



// continue 


let x = 10;
while( x < 100 ){

    x+= 10;

    if ( x == 50 ){
        continue
    }

    console.log('Testando o continue!' + x )

}