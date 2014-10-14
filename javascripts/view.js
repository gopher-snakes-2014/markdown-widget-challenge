var View = {};
View.getTextContent = function(){
  var textContent = $('#text-box').val();
  return textContent
};
View.display = function(textContent){
  $("#result-of-md").html(textContent);
};
