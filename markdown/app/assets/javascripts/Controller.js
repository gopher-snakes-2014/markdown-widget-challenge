window.onload = function() {
  var view = new View()
  var markdown = new MarkDown()
  var controller = new Controller(view, markdown)
  controller.bindListeners()
}


function Controller(display,model) {
  this.display = display;
  this.model = model;
}

Controller.prototype = {
  bindListeners: function() {
    var getText = this.display.getTextArea()
    getText.addEventListener('keyup', this.convertToText.bind(this))
  },

  convertToText: function(){
    var raw_text = this.display.getTextArea().value;
    var response = this.model.makeMarkDown(raw_text);
    this.display.setParagraph(response);
  }

}
