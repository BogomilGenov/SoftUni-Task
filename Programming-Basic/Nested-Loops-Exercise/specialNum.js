function solve(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let c = Number(input.shift());
    let d = Number(input.shift());

    for (let i = a; i <= b; i++) {
        for (let j = a; j <= b; j++) {
            for (let m = c; m <= d; m++) {
                for (let n = c; n <= d; n++) {
                    if (i + n == j + m) {
                        if (i != j && m != n) {
                            console.log(`${i}${j}`);
                            console.log(`${m}${n}`);

                            console.log(" ")
                        }
                    }

                }
            }

        }

    }

}


solve([1,2,3,4])