const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const resultado = document.getElementById("resultado")

function somar() {
    if (num1.value == "" || num2.value == "") {
        alert("Preencher os dois números")
    } else {
        const soma = Number(num1.value) + Number(num2.value)
        resultado.textContent = "Resultado:  " + soma
    }
}


const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const resultado3 = document.getElementById("resultado3")

function somarCompleto() {
    if (numero1.value == "" || numero2.value == "") {
        alert("Preencher os dois números")
    } else {
        resultado3.textContent = "Resultado: " + (Number(numero1.value) + Number(numero2.value))
    }
}

function subtrair() {
    if (numero1.value == "" || numero2.value == "") {
        alert("Preencher os dois números")
    } else {
        resultado3.textContent = "Resultado: " + (Number(numero1.value) - Number(numero2.value))
    }
}

function multiplicar() {
    if (numero1.value == "" || numero2.value == "") {
        alert("Preencher os dois números")
    } else {
        resultado3.textContent = "Resultado: " + (Number(numero1.value) * Number(numero2.value))
    }
}

function dividir() {
    if (numero1.value == "" || numero2.value == "") {
        alert("Preencher os dois números")
    } else {
        resultado3.textContent = "Resultado: " + (Number(numero1.value) / Number(numero2.value))
    }
}

function limpar() {
    numero1.value = ""
    numero2.value = ""
    resultado3.textContent = "Resultado:"
}


const nota1 = document.getElementById("nota1")
const nota2 = document.getElementById("nota2")
const nota3 = document.getElementById("nota3")
const resultado2 = document.getElementById("resultado2")

function media() {
    if (nota1.value == "" || nota2.value == "" || nota3.value == "") {
        alert("Preencher os 3 campos de notas por favor")
    } else {
        const mediatotal = (Number(nota1.value) + Number(nota2.value) + Number(nota3.value)) / 3

        if (mediatotal >= 5.5) {
            resultado2.textContent = "Nota " + mediatotal + ". Aprovado. Parabéns."
        } else {
            resultado2.textContent = "Nota " + mediatotal + ". Reprovado. Reforce seus estudos para realização da AF."
        }
    }
}
