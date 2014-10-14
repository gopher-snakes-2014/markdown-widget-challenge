
$('#text-box').keyup(function(){
  var textContent;
  textContent = View.getTextContent();
  var translatedTextContent = Model.translateText(textContent);
  View.display(translatedTextContent);
});
