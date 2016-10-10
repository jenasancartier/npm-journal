var Entry = require("./../js/entry.js").entryModule;

$("#input_newEntry").submit(function(event){
  event.preventDefault();
  var newTitle = $("#title").val();
  var newBody = $("#body").val();
  var newEntry = new Entry(newTitle, newBody);
  $("#entries-log").prepend("<hr><li><h3>" + newEntry.title + "</h3><p>" + newEntry.getTeaser() + "<br>[<em>Words: " + newEntry.getWordCount() + " | " + newEntry.getLetterTypesCount() + "</em>]</p><p>" + newEntry.body + "</p></li><br>");
  $("#entries-title").show();
});
