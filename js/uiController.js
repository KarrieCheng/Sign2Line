// Variables to Set Text
  var textContainer = $('#text-container');
  var lastGesture;
  var breakWord = "Welcome.";
  var printing = false;

  // Function to set text of textContainer
  printToContainer = function(word){

    // Add word to text container
    $('<span>'+word+'</span>').hide().appendTo(textContainer).fadeIn(250);

    // Add space to end of word
    textContainer.append('   ');

    // Line break if word is breakWord
    if (word === breakWord)
    textContainer.append('<br>');

    // Scroll to bottom of container
    textContainer.scrollTop(textContainer[0].scrollHeight);
  }



  setText = function(gesture){
    // Prevent repeat gestures
    if(lastGesture == gesture) return;
    lastGesture = gesture;

      // Print to text container
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
      $('.background').css('display', 'none');
      $('body').css('background-image', 'none');
      $('.container').css('color','black');
      $('.button').css('color', 'black');
      textContainer.css('color', 'black');
    }
    else if(highContrast){
      highContrast = false;
      $('.background').css('display', 'block');
      $('body').css('background-image', 'url("../img/tiger.jpg")');
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

  // When Export Text Button is clicked
  etButton.on('click', function(){

    // Trim whitespace
    etText.val(textContainer.text());
    etText.val($.trim(etText.val()).replace(/\s*[\r\n]+\s*/g, '\n')
                               .replace(/(<[^\/][^>]*>)\s*/g, '$1')
                               .replace(/\s*(<\/[^>]+>)/g, '$1'));

    // Fade in Export Text Form
    etBg.fadeIn('0.1s');
    etForm.addClass('p-zoom-in');
  });

  // When Export Text Exit Button is clicked
  eteButton.on('click', function(){

    // Fade out Export Text Form
    etForm.removeClass('p-zoom-in');
    etBg.fadeOut('0.1s');
  });