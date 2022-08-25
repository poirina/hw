let kettle = function (name) {
    this.get = function () {
        this.name = name;
        this.power = +prompt('Введите мощность чайника, Вт');
        this.volume = +prompt('Введите объем чайника, л');
        if (confirm('Включить чайник?')) {
            this.amount = +prompt('Введите количество воды, л');
        } else {
            this.amount = 0;
        };
        this.operation();
    };
    this.operation = function () {
        this.result = (this.power/100)  * this.volume * this.amount;
        this.show();
    };
    this.show = function () {
        if (this.amount == 0 || this.amount == undefined) {
            console.log('Чайник"' + this.name + '" не включен');
        } else {
            console.log('Чайник"' + this.name + '" проработал - ' + this.result + 'мин');
        }
    };
};
let keettle = new kettle('Кухня');
keettle.get();
 
