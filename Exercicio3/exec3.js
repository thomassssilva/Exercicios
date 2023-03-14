const botao = document.querySelector('.botao');
const textoResultado = document.querySelector('.texto-resultado');
const numResultado = document.querySelector('.num-resultado');

function rand(min, max){
    return Math.floor((Math.random() * (max - min)) + min)
}

botao.addEventListener('click', function(){
    const vlrInicial = Number(document.querySelector('#inicial').value);
    const vlrFinal = Number(document.querySelector('#final').value);
    const resultado = rand(vlrInicial, vlrFinal)
    console.log(vlrInicial, vlrFinal);
    console.log(resultado);
    textoResultado.innerHTML = 'Resultado:'
    numResultado.innerHTML = resultado;
})
