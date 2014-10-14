var View = {};
View.getTextContent = function(){
  var textContent = $('#text-box').val();
  console.log(textContent)
  return textContent
};
View.display = function(textContent){
  $("#result-of-md").text(textContent)
};
