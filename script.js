var acertos = 0;
var erros = 0;

function verificar() {

    var userResult = document.getElementsByClassName('result')[0].value;

    userResult = userResult.trim();

    var n1 = document.getElementsByClassName('first-number')[0].innerHTML;
    var n2 = document.getElementsByClassName('second-number')[0].innerHTML;
    
    var result = n1 * n2;

    if (userResult == result) {
        alert('VOCÊ ACERTOU O NÚMERO!');
        acertos++;
        document.getElementsByClassName('acertos')[0].innerHTML = acertos;
    } else {
        alert('VOCÊ ERROU!');
        erros++;
        document.getElementsByClassName('erros')[0].innerHTML = erros;
    }

    resetar();
}

function resetar() {
    document.getElementsByClassName('first-number')[0].innerHTML = '';
    document.getElementsByClassName('second-number')[0].innerHTML = '';
    document.getElementsByClassName('result')[0].innerHTML = '';

    var primeiroNumero = Math.floor(Math.random() * 25);
    var segundoNumero  = Math.floor(Math.random() * 25);
    
    document.getElementsByClassName('first-number')[0].innerHTML = primeiroNumero;
    document.getElementsByClassName('second-number')[0].innerHTML = segundoNumero;


}