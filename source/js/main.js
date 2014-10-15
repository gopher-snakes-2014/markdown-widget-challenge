var Model = function() {
  // body...
}

var Controller = function(model, view){

}

var View = function(){

}

var MarkdownWidget = function(source, preview){
  $(source).on("keydown", function(e) {
    if (e.which == 9){
      e.preventDefault();
    }
  })

  $(source).on("keyup", function(e) {
    var text = $(source).text().replace(/\*\b([\w\s]+)\*/gi, "<em>$1</em>")
    $(preview).html(text);
  });

}

MarkdownWidget('.input','#output_markdown > p')


// Tests
// tab should insert a tab instead of changing focus - TODO
