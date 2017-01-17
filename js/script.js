function setup() {                                  // Declare function
  var textInput;                                    // Create variable
  textInput = document.getElementById('WorkeTime');  // Get WorkeTime input
  textInput.focus();                                // Give WorkeTime focus
}

window.addEventListener('load', setup, false); // When page loaded call setup()

function checkWorkTime() {                        // Declare function
  var workTime = work.value;                       
  if (Number(workTime) < 10) {                      
    workMsg.className = 'warning';                  // Change class on message
    workMsg.textContent = 'Not long enough, yet...';// Update message
  } else {                                        // Otherwise
    workMsg.textContent = '';                       // Clear the message
  }
}

function tipWorkTime() {                         
  workMsg.className = 'tip';                       
  workMsg.innerHTML = 'work must be at least 10 mins';
}

var work = document.getElementById('workTime');    
var workMsg = document.getElementById('feedback'); 


work.addEventListener('focus', tipWorkTime, false); 
work.addEventListener('blur', checkWorkTime, false);