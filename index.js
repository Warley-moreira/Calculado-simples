function adiconarNoDisplay(btn) {
    document.querySelector('.display').value += btn;
}

function limpar() {
    valorDoInput = document.querySelector('.display').value = '';
}

function voltar() {
    const display = document.querySelector('.display');
    display.value = display.value.slice(0, -1)
}

function resultado() {
    const display = document.querySelector('.display');

    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'erro!'
    }

}