$(document).ready(function() {
  $('input[name=enter]').click(function() {
    var count = $('input[name=wordCount]').val();
    var responce = $("#responce");
    responce.html('');
    var entry = RandWord(count);
    $('#responce').html(entry);
    return false;
  });
  function RandWord (numOfWords) {
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var entry = '';
    var word = '';
    for (var x = 0; x <= numOfWords; x += 1) {
      //appending word to entry
      entry += word;
      //appending '.' to end sentence every random length of words;
      if (x === Math.floor(Math.random() * 20) + 5) {
        entry += '. ';
      }
      else {
        entry += ' ';
      }
      //reseting word
      word = '';
      for (var i = 0; i < Math.floor(Math.random() * 15) +1 ; i += 1) {
        //adding 1 - 15 letters to word
        word += alpha.substr(Math.floor(Math.random() * 26), 1);
      }
    }
    console.log("The number of words to be generated is " + numOfWords);
    return entry;
  }
});