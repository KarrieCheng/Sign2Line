  // Variables to Set Text
  var textContainer = $('#text-container');
  var lastGesture;

  // function to set text of textContainer
  printToContainer = function(word){

    var q = jQuery.map(word.split(''), function (letter) {
        return $('<span>' + letter + '</span>');
    });

    var dest = textContainer;

    var c = 0;
    var i = setInterval(function () {
        q[c].appendTo(dest).hide().fadeIn(500);
        c += 1;
        if (c >= q.length) clearInterval(i);
    }, 100);


    textContainer.append('   ');
    textContainer.scrollTop(textContainer[0].scrollHeight);
  }

  setText = function(gesture){
    // Prevent repeat gestures
    if(lastGesture == gesture) return;
    lastGesture = gesture;

    printToContainer(gesture);
  };
    
  // Export Button
  $('#export-button').on('click',function(){
      alert('Text Exported!');
  });

  // High Contrast Button
  var highContrast = false;
  $('#high-contrast-button').on('click',function(){
    if(!highContrast){
      highContrast = true;
      $('.background').css('background-color', 'white');
      $('.container').css('color','black');
      $('.button').css('color', 'black');
      textContainer.css('color', 'black');
    }
    else if(highContrast){
      highContrast = false;
      $('.background').css('background-color', 'rgba(155, 89, 182,0.9)');
      $('.container').css('color','white');
      $('.button').css('color', 'white');
      textContainer.css('color', 'white');
    }
  });

  // Show Email Form
  var etButton = $('#export-text-button'),
      etBg = $('#email-form-bg'),
      eteButton = $('.export-text-exit-button'),
      etForm = $('.email-form')
      etText = $('#email-form-text');

  etButton.on('click', function(){

    etText.val(textContainer.text());
    etText.val($.trim(etText.val()).replace(/\s*[\r\n]+\s*/g, '\n')
                               .replace(/(<[^\/][^>]*>)\s*/g, '$1')
                               .replace(/\s*(<\/[^>]+>)/g, '$1'));
    etBg.fadeIn('0.1s');
    etForm.addClass('p-zoom-in');
  });

  eteButton.on('click', function(){
    etForm.removeClass('p-zoom-in');
    etBg.fadeOut('0.1s');
  });