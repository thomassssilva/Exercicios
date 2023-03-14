function rand(min = 100000000, max = 999999999){
    return Math.floor((Math.random() * (max - min)) + min)
}

function criaDigito (cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;

    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);
    
    const digito = 11 - (total %11);
    return digito > 9 ? '0' : String(digito);
};

function criaCPF (cpfParcial) {
    const digito1 = criaDigito(cpfParcial);
    const digito2 = criaDigito(cpfParcial+digito1);
    const cpfGerado = cpfParcial+digito1+digito2;
    const cpfFormatado = cpfGerado.slice(0,3)+"."+cpfGerado.slice(3,6)+"."+cpfGerado.slice(6,9)+"-"+cpfGerado.slice(9,11);
    return cpfFormatado
}

const boxCpf = document.querySelector('.box-cpf');
const botao = document.querySelector('.botao');

botao.addEventListener('click', function() {
    boxCpf.innerHTML = '';
    boxCpf.innerHTML = criaCPF(String(rand()));
})
