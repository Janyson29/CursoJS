function* geradora1() {
    // Código qualquer 1
    yield 'valor 1'
    // Código qualquer 2
    yield 'valor 2'
    // Código qualquer 3
    yield 'valor 3'
}

const g1 = geradora1();
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next());
// console.log(g1.next());

// for (let valor of g1) {
//     console.log(valor);
// }

function* geradora2() {
    let i = 0;
    while(true) {
        yield i;
        i++;
    }
}

// const g2 = geradora2();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);


function* geradora3() {
    yield 1;
    yield 2;
    yield 3;
}

function* geradora4() {
    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;
}

const g4 = geradora4();
// for (let valorr of g4) {
//     console.log(valorr)
// }

function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    }

    // .....

    yield function() {
        console.log('Vim do y2')
    }
}

const g5 = geradora5();
func1 = g5.next().value;
func2 = g5.next().value;

func1();
func2();