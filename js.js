let title = document.createElement('title');
title.innerHTML = 'Call_to_Action';
document.head.appendChild(title);

let metaUTF8 = document.createElement('meta');
metaUTF8.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaUTF8);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
document.body.appendChild(h1);

let p1 = document.createElement('p');
p1.classList.add('p1');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
document.body.appendChild(p1);

let div = document.createElement('div');
div.innerHTML = '';
div.classList.add('div');
document.body.appendChild(div);

let div1 = document.createElement('div');
div1.innerHTML = '';
div1.classList.add('div1');
div.appendChild(div1);

div1.onmouseover = function(){
    div1.style.background = '#8F75BE';
    h2.style.color= ' #FFC80A';
}
div1.onmouseleave = function() {
    div1.style.background= "#fff";;
    h2.style.color = "#9FA3A7";
}
//при наведении мыши на блок второй блок исчезает полностью
div1.onmouseover = function(){
    div1.style.background = '#8F75BE';
    h2.style.color= ' #FFC80A';
    h3.style.color= '#fff ';
    p2.style.color= ' #fff';
    button.style.color= ' #fff';
}
div1.onmouseleave = function() {
    div1.style.background= "#fff";;
    h2.style.color = "#9FA3A7";
    h3.style.color = "#212121";
    p2.style.color = "#9FA3A7";
    button.style.color = "#212121";
}

let h2 = document.createElement('h2');
h2.innerHTML = 'FREELANCER';
div1.appendChild(h2);

let h3 = document.createElement('h3');
h3.innerHTML = 'Initially designed to ';
div1.appendChild(h3);

let p2 = document.createElement('p');
p2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p2.classList.add('p2');
div1.appendChild(p2);

let button = document.createElement('p');
button.innerHTML = 'START HERE';
button.classList.add('button');
div1.appendChild(button); 

let div2 = document.createElement('div');
div2.innerHTML = '';
div2.classList.add('div2');
div.appendChild(div2);

div2.onmouseover = function(){
    div2.style.background = '#8F75BE';
    h6.style.color= ' #FFC80A';
    h4.style.color= '#fff ';
    p3.style.color= ' #fff';
    button_1.style.color= ' #fff';
}
div2.onmouseleave = function() {
    div2.style.background= "#fff";
    h6.style.color = "#9FA3A7";
    h4.style.color = "#212121";
    p3.style.color = "#9FA3A7";
    button_1.style.color = "#212121";
}
 
let h6 = document.createElement('h2');
h6.innerHTML = 'STUDIO';
div2.appendChild(h6);

h4 = document.createElement('h3');
h4.innerHTML = 'Initially designed to ';
div2.appendChild(h4);

p3 = document.createElement('p');
p3.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
p3.classList.add('p3');
div2.appendChild(p3);

let button_1 = document.createElement('p');
button_1.innerHTML = 'START HERE';
button_1.classList.add('button_1');
div2.appendChild(button_1); 

let style = document.createElement('style');
style.innerHTML = `
    body{
        text-align: center;
    }
    .div{
        height: 479px;
        display: flex;
        justify-content: center;
    }
    .div1, .div2{
        border: 1px solid #E8E9ED;
        width:400px;
    }
    h1 {
        margin-top: 115px;
        font-family: 'Arvo';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 48px;
        color: #212121;
    }
    .p1{
        font-family: 'OpenSans';
        font-size: 14px;
        line-height: 26px;
        color: #9FA3A7;
        padding-bottom: 55px;
    }
    .p2, .p3{
        padding-top: 25px;
        font-family: 'OpenSans';
        font-size: 14px;
        line-height: 26px;
        padding-left: 73px;
        color: #9FA3A7;
        max-width: 240px;
    }
    h2, h6{
        margin-top: 81px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        letter-spacing: 2.4px;
        color: #9FA3A7;
        margin-bottom: 20px;
    }
    h3, h4{
        padding-top: 19px;
        font-family: 'Arvo';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 46px;
        color: #212121;
    }
    .button, .button_1{
        border-radius: 40px;
        border: 3px solid #FFC80A;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        padding: 24px 12px;
        letter-spacing: 2.4px;
        color: #212121;
        width: 176px;
        cursor: pointer;
        margin: 52px 0 0 100px;
    }
`;

document.head.appendChild(style);