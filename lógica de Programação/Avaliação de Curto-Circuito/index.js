/*
&& -> False && True -> False "O valor mesmo"
|| -> 

FALSY
*False
0
'' "" ``
null / undefined
Nan
*/

/*console.log('Luiz' && 'Maria') // Maria
console.log('Luiz' && '' && 'Maria') // ''
console.log('Luiz' && 'Maria' && 'João') // João

function falaOi() {
    return 'Oi'
}

const vaiExecutar = "João";

console.log(vaiExecutar && falaOi()) // false*/

//console.log(0 || false || null || 'Luiz' || true) // Luiz

/*const corUsuario = "verde";
const corPadrao = corUsuario || 'preto';
console.log(corPadrao) // preto*/

const a = 0;
const b = null;
const c = 'false'; // string com valor false
const d = false;
const e = NaN;

console.log(a || b || c || d || e) // false