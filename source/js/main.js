var InputModel = function(source) {
  this.source = source
}

InputModel.prototype = {
  getText: function() {
    return $(this.source).text()
  },

  getMarkdownText: function(){
    return this.getText().replace(/\*\b([\w\s]+)\*/gi, "<em>$1</em>");
  }
}

var Controller = function(model, view){
  this.model = model
  this.view = view
}

Controller.prototype = {
  bindEvents: function() {
    $(this.model.source).on("keydown", function(e) {
      if (e.which == 9){
        e.preventDefault();
      }
    });

    $(this.model.source).on("keyup", this.convertToMarkdown.bind(this));
  },

  convertToMarkdown: function(){
    var markdownText = this.model.getMarkdownText();
    this.view.update(markdownText);
  }

}

var OutputView = function(preview){
  this.output = preview
}

OutputView.prototype = {
  update: function(input) {
    $(this.output).html(input);
  }
}

MarkdownWidget = new Controller(new InputModel('.input'), new OutputView('#output_markdown > p'));
MarkdownWidget.bindEvents();



// Tests
// tab should insert a tab instead of changing focus - TODO
