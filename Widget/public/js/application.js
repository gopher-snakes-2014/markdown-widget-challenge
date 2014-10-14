$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

    $("#source-id").on("keyup", function(){
    codeToTranslate = $(this).val();
    $("#preview-div").append(translator(codeToTranslate));
    })

    var translator = function(codeToTranslate) {

       if ((codeToTranslate.charAt(0) === "*") && (codeToTranslate.charAt(1) === "*") && (codeToTranslate.charAt(codeToTranslate.length-1) === "*") && (codeToTranslate.charAt(codeToTranslate.length-2) === "*")) {
        $("#preview-div").empty();
        return "<p><b>" + codeToTranslate.substr(2, (codeToTranslate.length-4)) + "</b></p>"
      }

       else if ((codeToTranslate.charAt(0) === "_") && (codeToTranslate.charAt(1) === "_") && (codeToTranslate.charAt(codeToTranslate.length-1) === "_") && (codeToTranslate.charAt(codeToTranslate.length-2) === "_")) {
        $("#preview-div").empty();
        return "<p><b>" + codeToTranslate.substr(2, (codeToTranslate.length-4)) + "</b></p>"
      }

      else if ((codeToTranslate.charAt(0) === "*") && (codeToTranslate.charAt(codeToTranslate.length - 1) === "*")) {
        $("#preview-div").empty();
        return "<p><em>" + codeToTranslate.substr(1, (codeToTranslate.length-2)) + "</em></p>"
      }

      else if ((codeToTranslate.charAt(0) === "_") && (codeToTranslate.charAt(codeToTranslate.length - 1) === "_")) {
        $("#preview-div").empty();
        return "<p><em>" + codeToTranslate.substr(1, (codeToTranslate.length-2)) + "</em></p>"
      }
      else {
        $("#preview-div").empty();
      }


      // } else if (codeToTranslate.charAt(0) === "**") (codeToTranslate.charAt(codeToTranslate.length - 1) === "**")) {{
      // //   var translatedCode = codeToTranslate.css("color", "red")
      //   return "Bold"

      // } else if (codeToTranslate.charAt(0) === "_") {
      //   return "First character is a _"
      // }
    };

});
// .replace(/\"/g, "")

//*word* = BOLD word

//  *andrew* or _andrew_ = italics
//  **andrew** or __andrew__ = bold
//
