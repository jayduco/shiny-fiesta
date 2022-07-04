function divide (x,y){
    let z = 0;
    while(x>0){
        x = x - y;
        z++;
    }
    console.log(z);
}

divide(1,0);