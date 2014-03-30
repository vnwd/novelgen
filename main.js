$(document).ready(function() {

  $('input[name=enter]').click(function() {
    var count = $('input[name=wordCount]').val();
    var responce = $("#responce");
    var entry = RandWord(count);

    responce.html('');
    $('#responce').html(entry);
    return false;
  });

  function RandWord (numOfWords) {
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var entry = '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
    var end = '?!'
    var word = '';

    if (!numOfWords) {
      entry = "<h1>fuck you<h1>";
    }

    for (var x = 0; x <= numOfWords; x += 1) {
      //appending word to entry
      entry += word;

      //appending end punct to end sentence every random length of words;
      if (x % Math.floor(Math.random() * 20 + 5) === 0 && x != 0) {
        //making '.' and '!'' rarer
        if (x % Math.floor(Math.random() * 45 + 5) === 0 && x != 0) {
          entry += end.substr(Math.floor(Math.random() * 2), 1);
        } else {
          entry += '.';
        }

        //random paragraph generation
        if (x % Math.floor(Math.random() * 200 + 50) === 0 && x != 0) {
          entry +='<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
        }
      }

      //creating space and reseting word
      entry += ' '
      word = '';
      for (var i = 0; i < Math.floor(Math.random() * 15) +1 ; i += 1) {
        //adding 1 - 15 letters to word
        word += alpha.substr(Math.floor(Math.random() * 26), 1);
      }
    }

    console.log("The number of words to be generated is " + numOfWords);
    //returning final entry with ending punctuation
    return entry + '.';
  }
});