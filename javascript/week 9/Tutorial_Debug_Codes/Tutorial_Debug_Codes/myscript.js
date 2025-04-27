function fun1(){
    let i = 0;
    i += 1;
    i += 2;
    i += 3;
    i += 4;
    i += 5;
    return i;
}

function max(a, b, c){
    let max;
    if (a >= b) {
        if(a >= c) {
            max = a;
        } else {
            max = c;
        }
    } else {
        if(b >= c) {
            max = b;
        } else {
            max = c;
        }
    }
    return max;
}

function sum1ToN(n){
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }

    return sum;
}