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

// Create the HTML for the message
var msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>What is The Pomodoro Technique?</h2>';
msg += 'For many people, time is an enemy. We race against the clock to finish assignments and meet deadlines. The Pomodoro Technique teaches you to work with time, instead of struggling against it. A revolutionary time management system, it is at once deceptively simple to learn and life-changing to use. ';
msg += 'Essential to the Pomodoro Technique is the notion that taking short, scheduled breaks while working eliminates the running on fumes feeling you get when you have pushed yourself too hard. It is impossible to over work when you stick to the system. You may end up taking fewer sick days, too!</div>';

var elNote = document.createElement('div');       // Create a new element
elNote.setAttribute('id', 'note');                // Add an id of note
elNote.innerHTML = msg;                           // Add the message
document.body.appendChild(elNote);                // Add it to the page

function dismissNote() {                          // Declare function
  document.body.removeChild(elNote);              // Remove the note
}

var elClose = document.getElementById('close');   // Get the close button
elClose.addEventListener('click', dismissNote, false);// Click close-clear note