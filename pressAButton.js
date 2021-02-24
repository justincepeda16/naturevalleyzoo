// confirm("Press a button!");

let pressAButton = confirm('Click Okay...or else!');
while (pressAButton === false) {
  pressAButton = confirm('Wrong button. Try again!');
}
  document.write('You Did It! You Clicked The Right Button!');


// function pressAButton() {
 //   let response = confirm("Click Okay...or else!");
 //   if (response === true) {
 //       return 'Cool';}
  //  else if (response === false) {
        //return 'Not Cool';}
//}

//document.write(pressAButton());