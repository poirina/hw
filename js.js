let Inclusion = function(power){
    let includ = false;
    power = power || 0;
    this.on = function(){
        includ = true;
    }
    this.off = function(){
        includ = false;
    }
    this.getInclud = function(){
        return includ;
    }
    this.getPower = function(){
        return power;
    }
}
let Kettle = function(){
    Inclusion.apply(this, arguments);
    this.create = function(elem){
        const title = document.createElement(elem);
        return title;
    }
    this.attr = function(elem, attrName, className){
        elem.setAttribute(attrName, className);
    }
    this.html = function(elem, text){
        elem.innerHTML = text;        
    }
    this.search = function(elem, selector){
        elem.querySelectorAll(selector);
    }
    this.addClass = function(elem, className){
        elem.classList.add(className);
    }
    this.removeClass = function(elem, className){
        elem.classList.remove(className);
    }
    this.toggleClass = function(elem, className){
        elem.cassList.toggle(className);
    }
    this.hasClass = function(elem, className){
        console.log(elem.classList.contains(className));
    }
    this.append = function(elem, newElement){
        elem.appendChild(document.createElement(newElement));
    }
    this.on = function(elem, eventName, funcName){
        elem.addEventListener(eventName, funcName);
    }
}
const test = new Kettle();
