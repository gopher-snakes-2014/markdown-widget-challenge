$(function(){  
  $("#input-source").keyup( function(){
       var value = $( this ).val();     
       
       value = to_bold(value); 
       value = to_italic(value);
            
      $("#preview").text(value);
  });
});

var to_italic = function(value){
  var italic_regex  = /(\*[^*]+\*)/g
  var italics = value.match(italic_regex) 
  
  for(i=0; i < italics.length; i++){
    var semi_clean_text = italics[i].replace("*", "");
    var clean_text = semi_clean_text.replace("*", "");
    value = value.replace(italics[i], "<i>" + clean_text + "</i>");
  };
  return value;
};      
  
var to_bold = function(value){
  var bold_regex    = /(\*\*[^*]+\*\*)/g       
  var bolds         = value.match(bold_regex)
  for(i=0; i < bolds.length; i++){
    var semi_clean_text = bolds[i].replace("**", "");
    var clean_text = semi_clean_text.replace("**", "");
    value = value.replace(bolds[i], "<b>" + clean_text + "</b>");
  };
  return value;
};
