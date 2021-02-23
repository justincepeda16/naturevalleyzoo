var today = new Date();
var hourNow = today.getHours();


 function getName() { 
     return prompt("Please enter your name", "Ron Weasley");
}

function getGreeting() {
if (hourNow > 18) {
    return 'Good evening';}
else if (hourNow > 12) {
    return 'Good afternoon';}
else if (hourNow > 0) {
    return 'Good morning';} 
else {
    return 'Welcome';}
}

document.write('<h2>' + getGreeting() + ' ' + getName() + '!' + '</h2>');

// if (hourNow > 18) {
//     greeting = 'Good evening';
// } else if (hourNow > 12) {
//     greeting = 'Good afternoon';
// } else if (hourNow > 0) {
//     greeting = 'Good morning';
// } else {
//     greeting = 'Welcome';
// }

// var person = prompt("Please enter your name", "Harry Potter");