let Numero1 = Number(document.getElementById('n1').value);
let Numero2 = Number(document.getElementById('n2').value);
let respuesta = document.getElementById('operacion').value;


if (respuesta === 's') {
    document.getElementById('resultado').value = (Numero1 + Numero2);
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
    alert(Num1+Num2);
}

if (respuesta === 'r') {
    document.getElementById('resultado').value = (Numero1 - Numero2);
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
}

if (respuesta === 'm') {
    document.getElementById('resultado').value = (Numero1 * Numero2);
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
}
if (respuesta === 'd') {
    document.getElementById('resultado').value = (Numero1 / Numero2);
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
}