/*class User {
    constructor(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    }
    hello() {
        console.log('hello! ${this.name}');
    }
    exit() {
        console.log('exit ${this.name}');
    }
}
let ivan = new User ('Ivan', 25);
    alex = new User ('Alex', 20);
console.log(ivan);
console.log(alex);
ivan.exit();*/
/*function ShowThis(a,b){
    console.log(this);
    function sum(){
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
ShowThis(4,6); // will not show result
ShowThis(4,8);// will not show result
// 1)
// 2)*/
/*let obj = {
    a:20,
    b:19,
    sum: function() {
        console.log(this);
        function shout() {
            console.log(this);
        }
        shout();
    }
};
obj.sum();*/
// 1 Просто вызов функции
// 2 Метод объекта this = объект
// 3 Коструктор new -thIs = новый созданный объект
// 4 указание конкретного контекста call, apply, bind
let user = {
    name: "john"
};
function sayName(name) {
    console.log(this.name + name);
}