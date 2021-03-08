function solve(input) {
    let n = Number(input.shift());
    let num = n.toString();
    let sumOdd = 0;
    let sumEven = 0;


    for (let i = 0; i < num.length; i++) {
        if (i % 2 == 0) {
            sumOdd += Number(num(i));
        } else {
            sumEven += Number(num(i));
        }
        
    }
    console.log(sumOdd);
    console.log(sumEven);

}

solve([1234])
