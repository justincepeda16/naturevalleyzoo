// confirm("Press a button!");

function pressAButton() {
    let response = confirm("Press one of the buttons!");
    if (response === true) {
        return 'Cool';}
    else if (response === false) {
        return 'Not Cool';}
}

document.write(pressAButton());