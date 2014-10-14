window.onload = function() {
  var view = new View(); //pass argument for text area and display area later?
  var controller = new Controller(view);
  controller.addListener();
}; // close document ready function

// CONTROLLER
function Controller(view) {
  this.display = view;
}

Controller.prototype = {
  addListener: function() {
    var element = this.display.getTextArea();
    element.addEventListener("keyup", this.display.updateText.bind(this.display));
  }
};
// MODEL



// VIEW
function View() {
  this.textarea = 'source-id';
  this.displayarea = 'preview-div';
}

View.prototype = {
  getTextArea: function() {
    return document.getElementById(this.textarea);
  },
  updateText: function() {
    input = this.getTextArea().value;
    displayArea = document.getElementById(this.displayarea);
    displayArea.innerHTML = input;
  }
};

