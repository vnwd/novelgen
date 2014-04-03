$(document).ready(function () {
  'use strict';
  //set up
  function copyToClip(entry) {
    window.prompt("Copy to the clipboard: Cmd/Ctrl+C, Enter", entry);
  }
  
  String.prototype.toCharArray = function () {
    return this.split('');
  }
  
  Array.prototype.toString = function () {
    return this.join('');
  }

  function RandWord (numOfWords) {
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var entry = '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
    var end = '?!'
    var punc = ',;:-/';
    var word = '';
    var newPara = true;
    var entryArray = [];

    if (!numOfWords) {
      entry = "<h1>fuck you<h1>";
    }

    for (var x = 0; x <= numOfWords; x += 1) {
      //appending word to entry
      entry += word;

      //appending end punct to end sentence every random length of words;
      if (x % Math.floor(Math.random() * 20 + 5) === 0 && x != 0) {
        //making punctuation somewhat common
        if (x % Math.floor(Math.random() * 30 + 5) === 0 && x != 0) {
          entry += punc.substr(Math.floor(Math.random() * 2), 1);
        }
        //making '.' and '!'' rarer
        else if (x % Math.floor(Math.random() * 45 + 5) === 0 && x != 0) {
          entry += end.substr(Math.floor(Math.random() * 2), 1);
        } else {
          entry += '.';
        }
        //random paragraph generation
        if (x % Math.floor(Math.random() * 200 + 50) === 0 && x != 0) {
          entry +='<br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
          newPara = true;
        }
      }
      //capitalization!
      if (entry[entry.length - word.length - 2] === '.') {
        var letter = entry.length - word.length;
        entryArray = entry.toCharArray();
        entryArray[entry.length - word.length] = entryArray[entry.length - word.length].toUpperCase();
        entry = entryArray.join('');
      }

      //creating space and reseting word
      entry += ' '
      word = '';
      for (var i = 0; i < Math.floor(Math.random() * 15) +1 ; i += 1) {
        //adding 1 - 15 letters to word
        if (newPara) {
          word += (alpha.substr(Math.floor(Math.random() * 26), 1)).toUpperCase();
          newPara = false;
        } else {
          word += alpha.substr(Math.floor(Math.random() * 26), 1);
        }
      }
    }

    console.log("The number of words to be generated is " + numOfWords);
    //returning final entry with ending punctuation && cap the first letter
    var finish = entry.length-2;
    entryArray = entry.toCharArray();
    entryArray[finish] = '.';
    entry = entryArray.toString();
    return entry;
  }

  //the action
  $('input[name=enter]').click(function () {
    var count = $('input[name=wordCount]').val();
    var entry = RandWord(count);
    var responce = $("#responce");
    var copyButton = $("#copyButton");

    responce.html(entry);
    copyButton.show();
    copyButton.click(function () {copyToClip(entry.slice(31))});
    return false;
  });
});