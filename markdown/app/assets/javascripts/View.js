function View(){
  this.paragraphSelector = "#result"
  this.textAreaSelector = "#text"
}

View.prototype = {
  getParagraph: function(){
    return document.querySelector(this.paragraphSelector)
  },
  getTextArea: function(){
    return document.querySelector(this.textAreaSelector)
  },
  setParagraph: function(markdown){
    var paragraph = this.getParagraph();
    paragraph.innerHTML = markdown;
  }
}
