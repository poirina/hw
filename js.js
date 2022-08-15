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
    str=arr4[i]+" ";
    console.log(str);
    if(str[0] === '1' || str[0] === '2' || str[0] === '5'){
        console.log(arr4);
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
while(i <= arr8.length){
    arr8.reverse();
    i++;
}
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
