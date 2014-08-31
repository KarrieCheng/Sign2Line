
  function concatData(id, data) {
    return id + "; " + data + "<br>";
  }
  
  var delay = 1000;
  var output = document.getElementById('output');
  var frameString = "", handString= "", fingerString = "";
  var hand, finger;
  
  var options = { enableGuestures: true};
  var x = false;
  /*
  Leap.loop(options, function(frame) {
    
    frameString = concatData("frame_id", frame.id);
    frameString += concatData("num_hands", frame.hands.length);
    frameString += concatData("num_fingers", frame.fingers.length);
    frameString += "<br>";
    if (x == false) {
    setText(frame.hands);
    x = true;
    }
    output.innerHTML = frameString;
  });

  */

 
                
   var hello = true;
   var welcome = true;
   var excited = true;
   var our = true;
    
	var controller = Leap.loop({enableGestures: true}, function(frame){
    function numOfExtended(){
            var extendedFingers=0;
            for (var i=0, len= frame.hands.length; i < len; i++){
                var hand= frame.hands[i];
                    for(var f = 0; f < hand.fingers.length; f++){
                        var finger = hand.fingers[f];
                        if (finger.extended){
                            ++extendedFingers;
                        }
                }
            }
           return extendedFingers;
    }

	  if(frame.valid && frame.gestures.length > 0){
	  	
	    frame.gestures.forEach(function(gesture){
	        switch (frame.hands.length){
	          case 1:
	              console.log("one hand");
	              var hand = frame.hands[0];
	              var velocity = hand.palmVelocity;
	              if(gesture.type== 'circle') { setText("our");our=false; break;}
                   
	              else {
                    if(numOfExtended() ==1){
		            	if(frame.hands[0].indexFinger.direction[2] < -0.60) {setText("you");}
		            	if(frame.hands[0].indexFinger.direction[2] > 0 && frame.hands[0].indexFinger.direction[1] > 0.50) {setText("I");}
		            }
	              	else if(numOfExtended() >= 3) {
	              	//  if (hand.fingers[1].direction[1] > .7) {if(our==true) {setText("our");our=false;}}
		              if(velocity[0] > 0 && velocity[1] > 0 && velocity[2] < 0) {if(hello==true) {setText("Hello!");hello=true;}}
		              else if(velocity[1] < 0 && velocity[2] < 0 && frame.hands[0].middleFinger.direction[2] < -0.8) {setText("Thank you"); break;}
		              else if(velocity[0] < 0 && velocity[1] < 0 && velocity[2] > 0 && frame.hands[0].middleFinger.direction[0] < -0.4) {if(welcome==true) {setText("Welcome.");welcome=true;}}
		   
		            }
		          //  else if(numOfExtended() <=2)
		          }
                                      

	              break;
	          case 2:
	              console.log("two hands");
	              if(numOfExtended() == 7) {setText("program.");}
	              else if(gesture.type == 'circle') {
	              	if(numOfExtended() >= 6) {
	              		if(excited==true) {setText("am excited for"); excited = true;}
	              	}
	              	else {
	              		setText("American Sign Language");
	              	}
	              }
                    else{
                        if (numOfExtended()>=2 && frame.hands[0].thumb.direction[1] > 0.7 && frame.hands[0].indexFinger.direction[2] > 0.7) {setText("have");}
                    }
	              
	              break;
	        }
	    });
	     
	  }
	});
/*"use strict";

  alert('called');
  function concatData(id, data) {
    return id + "; " + data + "<br>";
  }

  // Variables for Leap Controls
  var frameString = "", handString= "", fingerString = "";
  var hand, finger;

  var options = { enableGuestures: true};
  var x = false;
  var delay = 1000; // 1 second


  // Leap Event Handler
  var controller = Leap.loop({enableGestures: true}, function(frame){
    if(frame.valid && frame.gestures.length > 0){
      frame.gestures.forEach(function(gesture){
          switch (gesture.type){
      case 1:
          setText("one hand");
          var hand = frame.hands[0];
          var velocity = hand.palmVelocity;
          if(gesture.type== 'circle') {
            setText("single"); 
            break;
          }
          if(velocity[0] > 0) {
            setText("hello!");
          }
          else {
            setText("welcome");
          }
          break;
      case 2:
          setText("two hands");
          if(gesture.type == 'circle') {
            setText("excited");
          }
          break;
      });
    });
  }, delay
}); */