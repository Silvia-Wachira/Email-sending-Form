//Variables 
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message');



//Event Listeners

eventListeners();

function eventListeners() {
    //App Init
        document.addEventListener('DOMContentLoaded, appInit')
}


//Functions

//App Initialization
function appInit() {
    //disable the send button on load
    sendBtn.disabled = true;
}