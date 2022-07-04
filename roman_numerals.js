function romanize(x){
    let z = "";

    while (x>=5000){
        z = z + "V̅";
        x = x - 5000;
    }

    while (x>=4000){
        z = z + "MV̅";
        x = x - 4000;
    }

    while (x>=1000){
        z = z + "M";
        x = x - 1000;
    }

    while (x>=900){
        z = z + "CM";
        x = x - 900;
    }

    while(x>=500){
        z = z + "D";
        x = x - 500;
    }

    while(x>=400){
        z = z + "CD";
        x = x - 500;
    }
    
    while(x>=100){
        z = z + "C";
        x = x - 100;
    }

    while(x>=90){
        z = z + "XC";
        x = x - 90;
    }

    while(x>=50){
        z = z + "L";
        x = x - 50;
    }

    while(x>=40){
        z = z + "XL";
        x = x - 40;
    }

    while(x>=10){
        z = z + "X";
        x = x - 10;
    }

    while(x>=9){
        z = z + "IX";
        x = x - 9;
    }

    while(x>=5){
        z = z + "V";
        x = x - 5;
    }

    while(x>=1){
        z = z + "I";
        x = x - 1;
    }

    console.log(z);
}

romanize(109);