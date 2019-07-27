'use strict';

let btn = document.getElementsByClassName('menu-item'),
    menu = document.getElementsByClassName('menu')[0],
    five = document.createElement('li'),
    txt = document.getElementsByClassName('title'),
    adv = document.getElementsByClassName("adv")[0],
    promptDiv = document.getElementById("prompt");


console.log(btn[0]);
console.log(menu);

//document.menus.switcher(btn[1],btn[2]);
menu.insertBefore(btn[2],btn[1]);
five.classList.add("menu-item");
five.textContent="fifth";

menu.appendChild(five);

title.textContent = "Мы продаем только натуральную технику Apple";

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
adv.remove();

let question = prompt("отношение к технике apple?");

promptDiv.textContent = question;
