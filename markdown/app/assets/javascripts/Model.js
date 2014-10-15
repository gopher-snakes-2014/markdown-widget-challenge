function MarkDown() {
}

MarkDown.prototype = {
  makeMarkDown : function(raw_text) {


    var start_pos = raw_text.indexOf('*') +1;

    var end_pos = raw_text.indexOf('*',start_pos);
    var between_nostars = raw_text.substring(start_pos, end_pos);
    var between_with_stars = raw_text.substring(start_pos-1, end_pos+1);

    var return_string = raw_text.replace( between_with_stars, between_nostars.italics())

    return return_string;
  }

}
