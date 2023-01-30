const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');
 
for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let criarTag = document.createElement(tag);
    //criarTag.innerHTML = texto; 

    // segunda maneira 
    //criarTag.innertext = texto; > da na mesma

    // terceira maneira
    let textoCriado = document.createTextNode(texto);
    criarTag.appendChild(textoCriado)

    div.appendChild(criarTag);
}

container.appendChild(div);
