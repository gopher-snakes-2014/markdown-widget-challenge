Markdizzle.Model = {};
Markdizzle.Model.translateText = function(textContent){

    var textCopy = textContent.slice(0);

    while (textCopy.indexOf("**") > -1 ){
      textCopy = textCopy.replace('**', '<b>')
      textCopy = textCopy.replace('**', '</b>')
    }

    while (textCopy.indexOf("*") > -1 ){
      textCopy = textCopy.replace('*', '<i>')
      textCopy = textCopy.replace('*', '</i>')
    }

    while (textCopy.indexOf("_") > -1 ){
      textCopy = textCopy.replace('_', '<i>')
      textCopy = textCopy.replace('_', '</i>')
    }
  return textCopy
}
