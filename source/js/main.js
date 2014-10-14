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
      // position = $(source+" > pre")[0].selectionStart
      // $(source+" > pre").text($(source+" > pre")
      $(source).get(0).selectionStart=
      $(source).get(0).selectionEnd= 1
    }
  })

  $(source).on("keyup", function(e) {
    $(preview).text($(source).text());
  });

}

MarkdownWidget('.input','#output_markdown > p')


// Tests
// delete should be aligned between input and output positions -DONE
// output should be caps sensitive - DONE
// tab should insert a tab instead of changing focus - TODO
