//task1
let i,
    d=35;
for(i=1;i<=50; i++){
    console.log(i);
}
while(d>=8){
    console.log(d);
    d--;
}
//task2
let a=89;
while(a>10){
    document.write(a+"<br>");
    a--;
}
//task3
let c=0;
for(i=0; i<=100; i++){
    c+=i;
}
alert("Сумма чисел от 0 до 100 равна  "+ c);
//task4
let s = 0;
for (i = 1; i <= 5; i++){
    s = 0;
    for (let j = 1; j <= i; j++){
        s = s + j;
    }
    console.log('sum ' + i + ' = ' + s);
}
//task 5
for (i = 8; i < 56; i++){
    if (i % 2 == 0)
    console.log(i);
}
i = 8;
while (i < 56){
    if (i % 2 == 0)
    console.log(i);
    i++;
}
//task 6
for (i=1; i<=10; i++){
    for(k=1; k<=10; k++){
        document.write(i+"*"+k+"="+(k*i)+"<br>");
    }
}
//task7
let num=0;
for( let n=1000; n>50; n/=2){
    num++;
    console.log("Числа после деления",n)
    console.log("Иттерация",num);
}
//task 8
let q=0,
    r=0,
    ch;
while ((ch=prompt("Введите число"),0)!=="0" && ch != null){
    ++q;
    r+= +ch;
}
alert("Чисел введено  "+q+"\n Сумма чисел "+r+"\n Среднее арифметическое "+(r/q));
//task 9
let nam="4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
let cur='', min, max;
for (let i = 0; i < nam.length; i++) {
  cur += nam[i];
  if (+nam[i] && !+nam[i+1]) {
    if (typeof min !== 'number' || cur < +min) min = +cur;
    if (typeof max !== 'number' || cur > +max) max = +cur;
    cur = '';
  }
}
console.log('Min:'+min+'Max:'+ max)