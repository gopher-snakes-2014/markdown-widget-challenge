var Model = {};
Model.translateText = function(textContent){

  var translationResult;
    // regex for shit seperated by **s (\*\*[\w\s]+\*\*)

    var boldyTHings = /(\*\*[^\*]+\*\*)/g;
    var italicyThings = /[^\*](\*[^\*]+\*)[^\*]/g ;

    translationResult = textContent.match(boldyTHings);

    console.log(translationResult);

  return translationResult
}


// while ( ( match = ptrn.exec(input) ) != null )
// {
//     alert( match );
// }
