Markdizzle.controlDat=function(){
    var textContent = Markdizzle.View.getTextContent();
    var translatedTextContent = Markdizzle.Model.translateText(textContent);
    Markdizzle.View.display(translatedTextContent);
}

Markdizzle.inizzilize = function(){
  $('.text-entry').keyup(function(){
    Markdizzle.controlDat();
  });
};

