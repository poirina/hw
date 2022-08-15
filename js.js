//task1
let arr1 = [1,2,3,4,5];
for (let i=0; i<arr1.length; i++){
    console.log(arr1[i]);
}
//task2
let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i=0; i<arr2.length; i++){
    if(arr2[i]>-3) continue;
    if(arr2[i]<-10) continue;
    console.log(arr2[i]);
}

//task3
let arr3= [],
    result=0;
for (let i=23; i<=57; i++){
    arr3.push(i);
    result +=i;
}
console.log(arr3);
console.log(result);
let i=22;
while (i<=56){
    i++;
    console.log(i);
}
//task 4
let arr4=["10", "20", "30", "50", "235", "3000"];
for(i=0; i<arr4.length; i++){
    if(arr4[i][0] == 1 || arr4[i][0] == 2 || arr4[i][0] == 5){
        console.log(arr4[i]);
    }
}
//task5
let day= ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
for (i=0; i< day.length; i++){
    if( i==5 || i==6){
        document.write('<b> <span>'+day[i]+'&#32;<span></b>');
    } else{
        document.write('<span>'+day[i]+'</span>'+"  ");
    }
}
//task6
let arr6= ["10", "20", "30", "50", "235", "3000"];
arr6.push("rewq")
console.log(arr6);
console.log(arr6[arr6.length-1]);
//task7
let arr7 =[];
for(i = 0; ; i++){
    arr7[i]=prompt("Введите числа");
    if (arr7[i] === ' ') {
        break;
    }
    else {
        arr7.sort(function(a,b){
            return a-b;
        });
    }
        continue;
}
console.log(arr7);
//task8
let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
let arrBuffer = [];
while(i <= arr8.length){
    arr8.reverse();
    i++;
}
//while (arr8.length){ работает пока в масиве есть хотя бы один эллемент
//  let but = arr8.pop();
//but =but.toString().split('').reverse().join('')
//arrBuffer.push(but)
//}
console.log(arr8);
//task9 
let arr9 = [5, 9, 21,' ',' ' , 9, 78,' ' ,' ' ,' ' , 6];
let count = 0;
for(i = 0; i < arr9.length; i++){
    if(arr9[i] == ' '){
    count++;    
    }
}
console.log(count);
//task 10
let arr10_1 =[48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
let arr10_2 = [1,8,0,13,76,8,7,0,22,0,2,3,2];
let indexArr10_1 = arr10_1.indexOf(0);
let lastIndexArr10_1 = arr10_1.lastIndexOf(0);
let indexArr10_2 = arr10_2.indexOf(0);
let lastIndexArr10_2 = arr10_2.lastIndexOf(0);
let sum1 = 0,
    sum2 = 0;
if (indexArr10_1 !== lastIndexArr10_1){
    let buffer = arr10_1.slice(indexArr10_1,lastIndexArr10_1);
    while (buffer.length){
        sum1 += buffer.pop();
    }
}
console.log(sum1);

if (indexArr10_2 !== lastIndexArr10_2){
    let buffer = arr10_1.slice(indexArr10_2,lastIndexArr10_2);
    while (buffer.length){
        sum2 += buffer.pop();
    }
}
console.log(sum2);
//task11
let h = +prompt('Введите высоту треугольника');
let a = [];
for(let i=0; i < h; i++){
    let str = '';
    for(let j = 0; j < h-i; j++){
        str += ' '
    }
    let p = ' ';
    for( let k = 0; k< i*2-1; k++){
        p+= '^';
    }
    a.push(str + p+ str);
}
for(let elem of a){
    console.log(elem)
}