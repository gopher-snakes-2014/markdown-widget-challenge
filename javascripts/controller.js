
$('#text-box').keyup(function(){
  var textContent;
  textContent = View.getTextContent
  textContent = Model.translateText(textContent)
  View.display(textContent)
});
