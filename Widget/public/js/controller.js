$(document).ready(function() {

    var MarkdownWidget = function(source,preview){

      return{
        addListener: (function(){
          $(source).on("keyup", function(){
            codeToTranslate = $(this).val();
            view(codeToTranslate, preview)
          })
        }())
      };
    };

MarkdownWidget('#source-id', "#preview-div")

});
