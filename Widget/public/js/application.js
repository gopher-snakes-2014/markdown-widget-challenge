$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

    $("#user_input").on("keyup", function(){
    codeToTranslate = $(this).val();
    $("#translation").text(translator(codeToTranslate));
    })

    var translator = function(codeToTranslate) {
      if ((codeToTranslate.charAt(0) === "*") && (codeToTranslate.charAt(codeToTranslate.length - 1) === "*")) {
        $("#translation").css("font-style", "italic")
        return codeToTranslate.substr(1, (codeToTranslate.length-2))
        } else {
          return ""
        }

      // } else if (codeToTranslate.charAt(0) === "**") (codeToTranslate.charAt(codeToTranslate.length - 1) === "**")) {{
      // //   var translatedCode = codeToTranslate.css("color", "red")
      //   return "Bold"

      // } else if (codeToTranslate.charAt(0) === "_") {
      //   return "First character is a _"
      // }
    };

});


//*word* = BOLD word

//  *andrew* or _andrew_ = italics
//  **andrew** or __andrew__ = bold
//
