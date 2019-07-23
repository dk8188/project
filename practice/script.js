
/*var leftBoarderWidth =1;
let second =2;
const pi= 3.14;

console.log(second);

// 6 types of data
console.log(4/0);
var number = 5;
var string ="hello";
null;
var obj={}; // всегда фигурные скобки
let person = {
    name:"John",
    age: 25,
    isMariied:false
};
console.log(person["name"]);
//let arr = ['plum.png','orange.png','apple.png'];
//console.log(arr[2])
//alert("hi!");
//let answer = confirm("are you 18 yr?");
//let answer = +prompt("are you 18 yr?","yes");
//console.log(typeof(answer));
//console.log("arr" +" - obj");
//console.log(1+ +" - obj");
let incr=10,
    decr=10;

console.log(++incr);
console.log(--decr);
console.log(5%2);
console.log("2" == 2);

let isChecked = true,
    isClosed = false; 
    
console.log(isChecked && isClosed);
console.log("love");*/
/*let num = 50;
if (num < 49){
    console.log('false!')
}else if (num > 100) {
    console.log('too much!')
}else {
    console.log 
};*/
/*let num = 20;

function ShowText(text) {
    alert(text);
    num = 50;
    console.log(num);
}
ShowText("love you!");
console.log(num);*/
//function calc (a,b){

/*function calc (a,b){
    return (a+b);
}*/
/*let calc = (a,b) => a+b
console.log(calc(3,4));
console.log(calc(8,4));

function returnVar(){
    let num = 50;
    return num;
}
let anotherNum = returnVar();
console.log(anotherNum);
let str ="test";
console.log(str.length);
console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());
let twelve ="12.5";
console.log(Math.round(twelve));*/
/*function LearnJs (lang,callback) {
    console.log("I am learning " + lang);
    callback();
}
function done() {
    console.log ("I finished lesson 3!")
}
LearnJs("javascript", done);*/

/*let options = {
    width: 1024,
    height: 1024,
    name:"test"
};
console.log(options.name);

options.bool = false;

options.colors = {
    border: "black",
    bg: "red"
};
console.log(options);

delete options.bool;

for (let key in options) {
    console.log ("Option " + key + " is " + options[key]);
};
console.log (Object.keys(options).length);


*/
let arr =[1,2,3,4,5];
arr[99] = 99;//mitake
console.log(arr.length);//counts +1
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr.forEach (function(item, i , mass){
    console.log(i + ': ' + item + " (массив: " + mass + ')');
});//method
console.log(arr);

/*let mass =[1,2,3,4,5];
for (let key of mass) {
    console.log(key);
}*/
/*let ans = prompt("",""),
    arr = [];

arr = ans.split(',');
console.log(arr);*/

/*let arr = ["wdw","zzzz","ddfdf","eshaa"],
    i = arr.join (', ');
    console.log(arr);*/

/*let arr = ["wdw","zzzz","ddfdf","eshaa"],
i = arr.sort ();
console.log(arr);*/

let arr = [1,32,234,2343,55],
    i = arr.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}
console.log(arr);

let arr = ["wdw","zzzz","ddfdf","eshaa"],
    i = arr.sort ();
console.log(arr)




