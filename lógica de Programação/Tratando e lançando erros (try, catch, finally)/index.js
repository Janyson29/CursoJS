// try {
//     // Executada quando não tem erro
//     // console.log(a);
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo');
// } catch (error) {
//     // Executada quando tem erro
//     console.log('Abri um arquivo e ele deu erro');
// } finally {
//     // Executada SEMPRE
//     console.log('finally: eu sempre sou executado');
// }

function retornaHora(data) {
    if (data && !(data instanceof date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try{
    const data = new Date('01-01-1970 12:58:29');
    const hora = retornaHora();
    console.log(hora);
} catch(erro) {
    //Tratar erro
    console.log(erro);
} finally {
    console.log('Tenha um bom dia');
}