
// função básica    
function hello() {

    console.log('Olá Mundo!');

}

hello();


// função com argumento
let nome = 'Vinícius'

function dizernome(nome) {

    console.log(`O nome é: ${nome}`);

}

dizernome(nome);


//return 
function soma(a, b){
    return a + b;
}


let somas = []

somas.push(soma(10, 3));
somas.push(soma(10, 4));
somas.push(soma(10, 6));

console.log(somas)