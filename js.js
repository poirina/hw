//task1
function f1( a,b,c){
    return (a-b)/c;
}
//task2
function squad(a){
    return a*a;
}
function cube(a){
    return a*a*a;
}
//task3 
function min(a,b){
    if( a < b){
        return a;
    } else {
        return b;
    }
}

function max(a,b){
    if( a > b){
        return a;
    } else{
        return b;
    }
}
//task4
function filterRange(mass) {
    let newmas = [];
    for (let i = 0; i < mass; i++) {
        newmas.push(i);
    }
    console.log(newmas);
}
filterRange(12);
//task5
function isEven(a){
    if( a%2 ==0){
        return 'true';
    }else {
        return 'False'
    }
}
//task6

