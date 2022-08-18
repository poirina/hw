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
function Array(length){
    length = prompt('Введите диапазон значений');
    arr= [];
    for(let i = 1; i <= length; i++){
        arr.push(i); 
    }
}
Array();
function showArray(length){
    var Array2 = Array;
    console.log(arr);
}
showArray();
//task5
function isEven(a){
    if( a%2 == 0){
        return true;
    }else {
        return False;
    }
}
//task6
function createArray(arr){
    let array = [];
    for(let i = 0; i < arr.length; i++){
        if (isEven(arr[i])){
            array.push(arr[i]);
        }
        console.log(array);
    }
}
createArray(5);
//task7
