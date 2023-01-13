//
//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
//const data = new Date(2022, 5, 29, 10, 30, 0);// ano, mês, dia, hora, Minuto, segundo, milissegundo //Mês começa do 0 até 11

/*const date = new Date('2022-06-29 12:59:10:100');
console.log('Dia', date.getDate()); // Dia do mês
console.log('Mês', date.getMonth()+ 1); // 0 - Janeiro, 11 - Dezembro
console.log('Ano', date.getFullYear()); // Ano
console.log('Hora', date.getHours()); // Hora
console.log('Min', date.getMinutes()); // Minuto
console.log('Seg', date.getSeconds()); // Segundo
console.log('ms', date.getMilliseconds()); // Milissegundo
console.log('Dia semana', date.getDay()); // 0 - Domingo, 6 - Sábado

console.log(date.toString());*/

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formatarData(date){
    const dia = zeroAEsquerda(date.getDate());
    const mes = zeroAEsquerda(date.getMonth() + 1);
    const ano = zeroAEsquerda(date.getFullYear());
    const hora = zeroAEsquerda(date.getHours());
    const min = zeroAEsquerda(date.getMinutes());
    const seg = zeroAEsquerda(date.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formatarData(data);
console.log(dataBrasil);
