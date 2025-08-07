let currentInput = '';
let currentOperation = null;
let previousInput = '';

function AgregarNumero(numero) {
    currentInput += numero;
    ActualizarPantalla();
}

function EstablecerOperacion(operacion) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        CalcularResultado();
    }
    currentOperation = operacion;
    previousInput = currentInput;
    currentInput = '';
}

function LimpiarPantalla() {
    currentInput = '';
    previousInput = '';
    currentOperation = null;
    ActualizarPantalla();
}

function CalcularResultado() {
    if (currentOperation === null || currentInput === '') return;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    let result;

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperation = null;
    previousInput = '';
    ActualizarPantalla();
}

function ActualizarPantalla() {
    document.getElementById('display').value = currentInput;
}
