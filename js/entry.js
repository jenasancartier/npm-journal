function Entry(_title, _body){
  this.title = _title;
  this.body = _body;
}

Entry.prototype.getWordCount = function(){
  var wordArray = this.title.split(" ").concat(this.body.split(" "));
  var wordCount = wordArray.length;
  return wordCount;
};

Entry.prototype.getLetterTypesCount = function(){
  var letterArray = (this.title.toLowerCase() + this.body.toLowerCase());
  var vowelCount = 0;
  var consonantCount = 0;
  for(var i = 0; i < letterArray.length; i++){
    if(letterArray.charAt(i) === 'a' ||
       letterArray.charAt(i) === 'e' ||
       letterArray.charAt(i) === 'i' ||
       letterArray.charAt(i) === 'o' ||
       letterArray.charAt(i) === 'u')
      vowelCount++;
    else
      consonantCount++;
  }
  return "Vowels: " + vowelCount + " | Consonants: " + consonantCount;
};

Entry.prototype.getTeaser = function(){
  var firstSentence = this.body.split(" ");
  var output = "";
  var index = 0;
  var sentenceDone = false;
  while(index < 8 && index < firstSentence.length && !sentenceDone){
    console.log("In the loop!");
    output += firstSentence[index];
    if(firstSentence[index].endsWith(".") ||
       firstSentence[index].endsWith("!") ||
       firstSentence[index].endsWith("?")){
      sentenceDone = true;
    }
    else
      output += " ";

    index++;
  }
  if(!sentenceDone)
    output += "...";
  return output;
};

exports.entryModule = Entry;
