function primo() {
    const numero = document.querySelector('#numero');
    const resposta = document.querySelector('#resposta');
    var divisores = 0;
    const formataNumero = parseInt(numero.value)

    for (var count = 1; count <= formataNumero; count++)
        if (formataNumero % count == 0)
            divisores++;

    if (divisores == 2)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'O número é primo',
            showConfirmButton: false,
            timer: 1500
        })
    else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'O número não é primo',
            showConfirmButton: false,
            timer: 1500
        })
    }

}