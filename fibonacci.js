let x = 1;
let y = 1;
let z = y;
let m = "";

function fibonacci(n){
    for (i=1; i<=n; i++){
        m = m + z.toString() + " ";
        z = x + y;
        x=y;
        y=z;
    }
    console.log(m);
}

fibonacci (10);