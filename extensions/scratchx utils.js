/*
window.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
	  enterPressed = true;
  }
});
*/

(function(ext) {
    var enterPressed = false;

    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
	
	ext.open_url = function(url){
		window.open(url);
	}
		
	ext.startEnter = function(){
		window.addEventListener("keyup", function(event) {
			if (event.keyCode === 13) {
				enterPressed = true;
			}
		});
	}

    ext.when_enter_press = function() {
       if (enterPressed === true) {
           enterPressed = false;
           return true;
       }

       return false;
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['', 'go to URL %s in new tab', 'open_url', 'https://digeelf.com'],
            ['h', 'when enter key pressed', 'when_enter_press'],
			['', 'start listening for enter key', 'startEnter', ''],
        ]
    };

    // Register the extension
    ScratchExtensions.register('ScratchX utils', descriptor, ext);
})({});