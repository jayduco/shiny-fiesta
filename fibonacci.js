let f1 = 1;
let f2 = 1;
let z = f2;
let m = "";
let evenTotal = null;

function fibFirstOf(n){
    for (i=1; i<=n; i++){
        m = m + z.toString() + " ";
        z = f1 + f2;
        f1=f2;
        f2=z;
        
        if(f1%2 == 0){
            evenTotal = evenTotal + f1;
        }
    }
    console.log('Finacci Sequence: '+m);
    console.log('Total of Even Numbers: ' +evenTotal);
}

fibFirstOf (10);
