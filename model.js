var MD_bold = function(){
  var string = document.getElementById('input').value;
  var start = string.indexOf("*") + 2;
  var end = string.indexOf("**", start);
  var output = string.substring(start, end);
  return output
}

var MD_italic1 = function() {
  var string = document.getElementById('input').value;
  var start = string.indexOf("*") + 1;
  var end = string.indexOf("*", start)
  var output = string.substring(start, end)
  return output
}

var MD_italic2 = function() {
  var string = document.getElementById('input').value;
  var start = string.indexOf("_") + 1;
  var end = string.indexOf("_", start)
  var output = string.substring(start, end);
  return output
}

var clean_string = function() {
  var string = document.getElementById('input').value;
  var newString = string.replace(/[^a-z0-9\s]/gi, '')
  return newString
}

