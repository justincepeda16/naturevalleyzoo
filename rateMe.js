function starPicture() {
    return '<img class="star" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Star_icon_stylized.svg" />';
  }

document.write('Thank you for the rating of: ');
// ask the user how many pictures they want to see
let starPictures = prompt('How would you rate this website?');
// as long as they enter a bad response, keep prompting them
while (isNaN(starPictures) || starPictures > 5 || starPictures < 1) {
  starPictures = prompt('Try again. Please enter a number between 1 and 5.');
}
// use their response to show that many pictures
for (let i = 0; i < starPictures; i = i + 1) {
  document.write(starPicture());
}

