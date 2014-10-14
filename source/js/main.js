var Model = function() {
  // body...
}

var Controller = function(model, view){

}

var View = function(){

}

var MarkdownWidget = function(source, preview){
  // source.on(keyUP, function(key) {
    // preview.render(key)
  // }
  $(source).on("keyup", function(e) {
    console.log(e.which);
    /* Act on the event */
  });
}

MarkdownWidget('.input','#output_markdown')
