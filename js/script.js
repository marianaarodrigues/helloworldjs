// Primeira aula de funções JS

function soma(n1, n2) {
    alert(n1 + n2)
}

function subtracao(n1, n2) {
    alert(n1 - n2)
}

function multiplicacao(n1, n2) {
    alert(n1 * n2)
}

function divisao(n1, n2) {
    alert(n1 / n2)
}

function mostrarnome() {
    let nome = prompt("Qual o seu nome?")
    alert("Olá, " + nome)
}

function arearetangulo(base, altura) {
    alert("A área do retângulo é " + base * altura)
}

// Segunda aula de funções JS

function areacirculo() {
    pi = 3.14159265359
    let raio = prompt("Informe o raio do círculo")
    alert("A área do círculo é " + pi * raio * raio)
}

function hipotenusa() {
    let cat1 = prompt("Informe o valor do primeiro cateto")
    let cat2 = prompt("Informe o valor do segundo cateto")
    alert("O valor da hipotenusa é " + Math.sqrt(cat1 * cat1 + cat2 * cat2))
}

function realdolar() {
    let reais = prompt("Informe o valor em reais a ser convertido")
    alert("Conforme cotação de 17/05/23, o valor em dólares é " + reais / 4.94)
}

function celsiusfahrenheit() {
    let celsius = prompt("Informe a temperatura em graus Celsius")
    alert("A temperatura informada em graus Fahrenheit é " + (1.8 * celsius + 32))
}

function mediaaritmetica() {
    let nota1 = prompt("Informe a primeira nota")
    let nota2 = prompt("Informe a segunda nota")
    let nota3 = prompt("Informe a terceira nota")
    alert("A média aritmética das três notas é " + (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3)
}

function raizes2grau() {
    let a = prompt("Informe o valor de A (fórmula de Bhaskara)")
    let b = prompt("Informe o valor de B (fórmula de Bhaskara)")
    let c = prompt("Informe o valor de C (fórmula de Bhaskara)")
    let delta = b * b - 4 * a * c
    let raiz1 = (-1 * b + Math.sqrt(delta)) / (2 * a)
    let raiz2 = (-1 * b - Math.sqrt(delta)) / (2 * a)
    alert("A primeira raiz é " + raiz1 + ", e a segunda raiz é " + raiz2)
}