const h1 = document.querySelector('.container h1');

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function FormataMes (mes) {
    let mesTexto;

    switch (mes) {
    case 0:
        mesTexto = "Janeiro";
        return mesTexto;
    case 1:
        mesTexto = "Fevereiro";
        return mesTexto;
    case 2:
        mesTexto = "Março";
        return mesTexto;
    case 3:
        mesTexto = "Abril";
        return mesTexto;
    case 4:
        mesTexto = "Maio";
        return mesTexto;
    case 5:
        mesTexto = "Junho";
        return mesTexto;
    case 6:
        mesTexto = "Julho";
        return mesTexto;
    case 7:
        mesTexto = "Agosto";
        return mesTexto;
    case 8:
        mesTexto = "Setembro";
        return mesTexto;
    case 9:
        mesTexto = "Outubro";
        return mesTexto;
    case 10:
        mesTexto = "Novembro";
        return mesTexto;
    case 11:
        mesTexto = "Dezembro";
        return mesTexto;
    default:
        mesTexto = "";
        return mesTexto;
}
}

function formatarData(date){
    const dia = zeroAEsquerda(date.getDate());
    const mes = FormataMes(date.getMonth() + 1);
    const ano = zeroAEsquerda(date.getFullYear());
    const hora = zeroAEsquerda(date.getHours());
    const min = zeroAEsquerda(date.getMinutes());
    const seg = zeroAEsquerda(date.getSeconds());

    return `${dia} de ${mes} de ${ano} ${hora}:${min}`;
}

function getDaiSemanaTexto (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
    case 0:
        diaSemanaTexto = "Domingo";
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = "Segunda-Feira";
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = "Terça-Feira";
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = "Quarta-Feira";
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = "Quinta-Feira";
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = "Sexta-Feira";
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = "Sábado";
        return diaSemanaTexto;
    default:
        diaSemanaTexto = "";
        return diaSemanaTexto;
    }
}

const data = new Date();
const diaSemana = data.getDay();
const diaSemanaTexto = getDaiSemanaTexto(diaSemana);
const dataBrasil = formatarData(data);
h1.innerHTML = `${diaSemanaTexto}, ${dataBrasil}`;

// Path: lógica de Programação\Exercício com switch e date\assets\js\main.js