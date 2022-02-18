function primo() {
    const numero = document.querySelector('#numero');
    const resposta = document.querySelector('#resposta');
    var divisores = 0;
    const formataNumero = parseInt(numero.value)

    for (var count = 1; count <= formataNumero; count++)
        if (formataNumero % count == 0)
            divisores++;

    if (divisores == 2)
        alert('É primo');
    else {
        alert('Não é primo')
    }

}