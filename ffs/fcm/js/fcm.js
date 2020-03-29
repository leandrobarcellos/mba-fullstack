/**
 * Created by leandrobarcellos on 26/03/20.
 */

const numberRegex = new RegExp(/[0-9]*/g);
const gbNames = [];
var gbInputIdade = null;
var gbInputName = null;
var gbOutputMaxima = null;
var gbOutputQueima = null;
var gbOutputCondicionamento = null;
var gbFooter = null;
const gbNameList = document.querySelector("#nameList");

window.addEventListener("load", start);

function start() {
    preventFormSubmit();
    gbInputIdade = document.querySelector("#idade");
    gbInputName = document.querySelector("#name");
    gbOutputMaxima = document.querySelector("#maxima");
    gbOutputQueima = document.querySelector("#queima");
    gbOutputCondicionamento = document.querySelector("#condicionamento");
    gbFooter = document.querySelector(".card-footer");
    activateInputIdade();
    activateInputName();

}

function preventFormSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault();
    }

    let form = document.querySelector("form");
    form.addEventListener("submit", handleFormSubmit);
}

function activateInputName() {
    gbInputName.addEventListener("keyup", handleTypingName);
    function handleTypingName(event) {
        gbFooter.querySelector("#spanName").textContent = event.target.value;
    }
}

function activateInputIdade() {
    gbInputIdade.addEventListener("keyup", handleTypingIdade);

    function handleTypingIdade(event) {
        function calculate(idade) {
            var texto = "";
            if (idade > 220) {
                idade = 220;
                texto = "Não dá pra te levar a sério né?";
            }
            var fcm = 220 - idade;

            if ((idade) && (idade.length > 0 || idade > 0)) {
                if (idade < 20) {
                    texto = " tem a juventude à sua disposição!";
                } else if (idade < 40) {
                    texto = " bora manter a atividade porque temos muito a perder!";
                } else if (idade < 60) {
                    texto = " chegamos num ponto onde não temos mais escolha! Pratique atividade física!";
                } else if (idade < 80) {
                    texto = " ainda dá tempo de tentar esticar um pouco a qualidade de vida, vamos nos exercitar!";
                } else if (idade < 100) {
                    texto = " espero que tenha feito algo por você nesse tempo!";
                } else if (idade < 150) {
                    texto = " ainda por aqui?!!?";
                } else {
                    texto = " tá de brincadeira né?";
                }
                gbOutputMaxima.textContent = fcm + " bpm";
                gbOutputQueima.textContent = parseInt(fcm * 0.65) + " bpm";
                gbOutputCondicionamento.textContent = parseInt(fcm * 0.8) + " bpm";
                gbFooter.querySelector("#spanText").textContent = texto;
            } else {
                gbOutputMaxima.textContent = "";
                gbOutputQueima.textContent = "";
                gbOutputCondicionamento.textContent = "";
                gbFooter.querySelector("#spanText").textContent = "";
            }
        }

        if (numberRegex.test(event.key)) {
            calculate(event.target.value);
        }
    }

}
