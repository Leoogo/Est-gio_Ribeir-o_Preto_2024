function isFibonacci(number) {
    let a = 0;
    let b = 1;

    while (b < number) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    if (b === number) {
        console.log(number + " Pertence à sequência de Fibonacci");
    } else {
        console.log(number + " Não pertence à sequência de Fibonacci");
    }
}
