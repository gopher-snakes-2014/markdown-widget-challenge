// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// $(document).ready(function() {
//   $('#tarjet').keyup(function(){

//     inputText = $(this).val()
//     // $('.output').html(inputText)
//     inputText = inputText.replace("**", '<b>')
//     inputText = inputText.replace("**", '</b>')
//      $('.output').html(inputText)

//     inputText = inputText.replace("*", '<i>')
//     inputText = inputText.replace("*", '</i>')
//     $('.output').html(inputText)

//   })
// })

// var MarkdownWidget = function(source, output) {

//   $(source).keyup(function(){

//     inputText = $(this).val()
//     // $('.output').html(inputText)
//     inputText = inputText.replace("**", '<b>')
//     inputText = inputText.replace("**", '</b>')
//      $(output).html(inputText)

//     inputText = inputText.replace("*", '<i>')
//     inputText = inputText.replace("*", '</i>')
//     $(output).html(inputText)

//   })

// };

var MarkdownWidget = function(source, output) {

  $(source).keyup(function(){

    inputText = $(this).val()

    inputText = inputText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    $(output).html(inputText)

    inputText = inputText.replace(/\*(.*?)\*/g, '<em>$1</em>')
    $(output).html(inputText)

    inputText = inputText.replace(/``(.*?)``/g, '<code>$1</code>')
    $(output).html(inputText)

  })

};

$(function() {
  MarkdownWidget('#tarjet', '.output')
})
