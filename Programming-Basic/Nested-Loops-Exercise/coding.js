function coding(input) {
    let n = Number(input.shift());
    let num = n.toString(); 

    for (let i = 0; i < num.length; i++) {
        let digit = Math.floor(n % 10);
        n /= 10; 
        if (digit == 0) {
            console.log("ZERO");
            continue;
        }
        let symbol = String.fromCharCode(digit + 33)
        let line = ""; 
        for (let j = 1; j <= digit; j++) {
            line += symbol         
        }
        console.log(line);
        
    }
}

coding([2049])