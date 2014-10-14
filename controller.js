$(function() {
    events();
});

var events = function(){

  $("#MD_button").on('click', function(){
    var bold = MD_bold();
    var italic1 = MD_italic1();
    var italic2 = MD_italic2();
    var string = clean_string();

    var string1 = string.replace(bold, "<b>"+bold+"</b>")
    var string2 = string1.replace(italic1, "<i>"+italic1+"</i>")
    var output_string = string2.replace(italic2, "<i>"+italic2+"</i>")
    append(output_string);
  })





}
