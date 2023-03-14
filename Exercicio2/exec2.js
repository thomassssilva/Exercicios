const botao = document.querySelector('.button-exibir');
const texto = document.querySelector('.texto');

botao.addEventListener('click', function(){
    const nome = prompt("Qual o seu nome?");
    alert(`E se eu estivesse tentando roubar seus dados em ${nome}?`)
    texto.innerHTML = `Seu nome é ${nome} mesmo ou está mentindo pra mim?`;
})