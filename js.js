//task1
let q = 'aaa@bbb@ccc';
console.log(q.replace(/@/g, '!'));
//task2
let data = '2025-12-31';
let arr1 = data.split('-');
console.log(arr1[2]+'/'+arr1[1]+'/'+arr1[0]);
//task3
let w = '«Я учу javascript!»';
let w1 = w.substring(3, 6);
let w2 = w.substr(7, 10);
let w3 = w.slice(7, 17);
console.log(w1);
console.log(w2);
console.log(w3);
//task4
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (i = 0; i < arr.length; i++){
    sum += Math.pow(arr[i],3)
}
console.log(Math.sqrt(sum));
//task5
let a = +prompt('введите а'),
    b = +prompt('введите b'),
    c;
console.log(c = Math.abs(a-b));
//task6
let date = new Date();
let resDate = addZero(date.getDate()) + '.' + addZero(date.getMonth() + 1) + '.' + date.getFullYear();
let numbers = addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
console.log(numbers + ' ' + resDate);
function addZero (num) {
    if (num <= 9) {
        return num = '0' + num;  
    } else {
        return num;
    }
}
//task7 
console.log('aa aba abba abbba abca abea'.replace(/ab*a/g,'!'));
//task8

//task9
