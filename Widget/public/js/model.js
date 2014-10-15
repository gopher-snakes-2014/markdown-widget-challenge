    var translator = function(codeToTranslate,preview) {
       if ((codeToTranslate.charAt(0) === "*") && (codeToTranslate.charAt(1) === "*") && (codeToTranslate.charAt(codeToTranslate.length-1) === "*") && (codeToTranslate.charAt(codeToTranslate.length-2) === "*")) {
        $(preview).empty();
        return "<p><b>" + codeToTranslate.substr(2, (codeToTranslate.length-4)) + "</b></p>"
      }

       else if ((codeToTranslate.charAt(0) === "_") && (codeToTranslate.charAt(1) === "_") && (codeToTranslate.charAt(codeToTranslate.length-1) === "_") && (codeToTranslate.charAt(codeToTranslate.length-2) === "_")) {
        $(preview).empty();
        return "<p><b>" + codeToTranslate.substr(2, (codeToTranslate.length-4)) + "</b></p>"
      }

      else if ((codeToTranslate.charAt(0) === "*") && (codeToTranslate.charAt(codeToTranslate.length - 1) === "*")) {
        $(preview).empty();
        return "<p><em>" + codeToTranslate.substr(1, (codeToTranslate.length-2)) + "</em></p>"
      }

      else if ((codeToTranslate.charAt(0) === "_") && (codeToTranslate.charAt(codeToTranslate.length - 1) === "_")) {
        $(preview).empty();
        return "<p><em>" + codeToTranslate.substr(1, (codeToTranslate.length-2)) + "</em></p>"
      }
      else {
        $(preview).empty();
      }
    };
