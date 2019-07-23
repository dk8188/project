'use strict';
let num = 50;
if (num < 49) {
    console.log('false!')
} else if (num > 100) {
    console.log('too much!')
} else {
    console.log ('true!')
};
(num =50)? console.log('true'):console.log ('false!');
switch (num){
    case num <49:
    console.log('false!');
    break;
    case num >100:
    console.log('too much');
    break;
    case num >80:
    console.log('still too much!');
     break;
    case num = 50:
     console.log('true');
     break;
    default:
    console.log('something went wrong...');
    break;
}
while (num < 55) {
    console.log(num);
    num++;
}
do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i =1; i < 10; i++) {
    console.log(i)
    if (i == 2) {
    continue
}
}