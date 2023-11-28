const botonesFuncion = document.querySelectorAll(".boton-funcion");
const botonesNumeros = document.querySelectorAll(".boton-n");
const pantalla = document.querySelector(".pantalla");

let numEstablecido = false;
let numero1 = 0;
let numero2 = 0;

let pantallaText = '';
let operadorUsado = '';
let final = false;

//Funcion botones
for (let i = 0; i < botonesFuncion.length; i++) {
    botonesFuncion[i].addEventListener("click", function () {
        if (numEstablecido == true && final == false) {
            numero1 += parseInt(pantallaText);
            operadorUsado = botonesFuncion[i].textContent;

            pantallaText = '';
            pantalla.innerHTML = operadorUsado;


            numEstablecido = false;
        }
    })
}
//Funcion numeros
for (let i = 0; i < botonesNumeros.length; i++) {
    botonesNumeros[i].addEventListener("click", function () {
        if (final == false) {
            if (pantallaText == '0') {
                pantallaText = botonesNumeros[i].textContent;
            } else {
                pantallaText += botonesNumeros[i].textContent;
            }
            pantalla.innerHTML = pantallaText;
            numEstablecido = true;
        }
    })
}
//Funcion Clear
const limpiar = () => {
    numero1 = 0;
    numero2 = 0;
    operadorUsado = '';
    pantallaText = '0';
    pantalla.innerHTML = pantallaText;
    numEstablecido = false;
    final = false;
}
const calculo = () => {
    if (numEstablecido == true && final == false) {
        numero2 += parseInt(pantallaText);
        pantallaText = '';
        switch (operadorUsado) {
            case '+':
                pantallaText = (numero1 + numero2);
                break;
            case '-':
                pantallaText = (numero1 - numero2);
                break;
            case 'x':
                pantallaText = (numero1 * numero2);
                break;
            case '/':
                if (numero2 == 0) {
                    pantallaText = 'Error';
                } else {
                    pantallaText = (numero1 / numero2);
                }
                break;
            case '^':
                pantallaText = (Math.pow(numero1, numero2));
                break;
        }
        pantalla.innerHTML = pantallaText;
        final = true;
    }
}