Markdizzle.View = {};
Markdizzle.View.getTextContent = function(){
  var textContent = $('.text-entry').val();
  return textContent
};
Markdizzle.View.display = function(textContent){
  $(".md-display").html(textContent);
};
