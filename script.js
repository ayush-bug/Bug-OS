const progressBar = document.getElementById("progress-bar");
const percent = document.getElementById("percent");
const message = document.getElementById("boot-message");

const messages = [
    "Initializing Os...",
    "Loading files...",
    "Installing more bugs...",
    "Getting ready"
]
let progress = 0;
const loading = setInterval(() => {
    progress++;
    progressBar.style.width = progress + "%";
    percent.textContent = progress + "%";

    if(progress === 25) message.textContent = messages[0];
    if(progress === 50) message.textContent = messages[1];
    if(progress === 75) message.textContent = messages[2];
    if(progress === 95) message.textContent = messages[3];

    if(progress >= 100){
        clearInterval(loading);
        document.getElementById("boot-screen").style.display = "none";
        document.getElementById("desktop").style.display = "block";

    }


},30);



    function updateTime() {
        var currentTime = new Date().toLocaleString();
         document.getElementById("task-time").textContent = currentTime;
    }
    setInterval(updateTime, 1000);




// right click to show context menu

const desktop = document.getElementById("desktop");
const contextMenu = document.getElementById("context-menu");
desktop.addEventListener("contextmenu",(e) =>{
    e.preventDefault();
    contextMenu.style.display = "flex";
    const menuwidth = contextMenu.offsetWidth;
    const menuheight = contextMenu.offsetHeight;
    let x = e.clientX;
    let y = e.clientY;
    if(x + menuwidth > window.innerWidth){
        x = window.innerWidth - menuwidth - 10;
    }
       if(y + menuheight > window.innerHeight){
        y = window.innerHeight - menuheight - 10;
    }
     contextMenu.style.left = x + "px";
     contextMenu.style.top = y + "px"

});

document.addEventListener("click", ()=>{
    contextMenu.style.display = "none";
});

//w3school code to make window movable
//  windows preiviews controles// Make the DIV element draggable:
dragElement(document.getElementById("my-computer"));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// end of w3school code
function closeWindow(element){
    element.style.display = "none";
}
function openWindow(element) {
  element.style.display = "block"
};


const closemybug = document.querySelector("#close-mybug");
 closemybug.addEventListener("click", function(){
  closeWindow(mybug);
  document.querySelector("#mypc-app").remove();
 });
  
 

 //code to open window for my bug
 const mybug = document.querySelector("#my-computer");
 const mypc = document.querySelector("#my-pc");
 mypc.addEventListener("click", function(){
    openWindow(mybug);
    document.querySelector(".taskbar-apps").insertAdjacentHTML("beforeend", ` <button id="mypc-app" class="task-icon">
                   <img src="images/my-pc.png" alt="my bug"> 
              </button>`);
 });




 

//drag browser 
dragElement(document.getElementById("browser-window"));


 //open browser
  const browser = document.querySelector("#browser");
 const browserWindow = document.querySelector("#browser-window");
 browser.addEventListener("click", function(){
    openWindow(browserWindow);
    document.querySelector(".taskbar-apps").insertAdjacentHTML("beforeend", ` <button id="mypc-app" class="task-icon">
                   <img src="images/browser.png" alt="my bug"> 
              </button>`);
 });

 document.querySelector("#close-browser").addEventListener("click", function(){
closeWindow(browserWindow);
document.querySelector("#mypc-app").remove();
 })



 //code of terminal
const output = document.querySelector(".terminal-output");
const input = document.getElementById("terminal-command");

input.addEventListener("keydown", function(e){
  if(e.key === "Enter"){
    const command = input.value.trim();
    if(command === "") return;
    print("C:BUG-ADMIN> " + command);
    executeCommand(command);
    input.value = "";
  }
});

function print(text){
  output.innerHTML += text.replace(/\n/g, "<br>" ) +  "<br>";
  output.scrollTop = output.scrollHeight;
}

function executeCommand(input){
  const args = String(input).trim().split(/\s+/);
  const cmd = args[0].toLowerCase();
   if(cmd === "help"){
    print(`\n
╔╗ ╦ ╦╔═╗      ╔═╗╔═╗
╠╩╗║ ║║ ╦      ║ ║╚═╗
╚═╝╚═╝╚═╝      ╚═╝╚═╝
Bug OS v0.0.1
\n\n
Avaliable Commands : \n help\nabout\nshutdown
      `);
   }
   else if(cmd === "about"){
    print(`
╔═ ║ ║╔═╝      ╔═║╔═╝
╔═║║ ║║ ║      ║ ║══║
══ ══╝══╝      ══╝══╝
\n
    Bug-os terminal made with love by 
┏━┓╻ ╻╻ ╻┏━┓╻ ╻   ╻┏ ╻ ╻┏━┓╻ ╻╻ ╻┏━┓╻ ╻┏━┓
┣━┫┗┳┛┃ ┃┗━┓┣━┫   ┣┻┓┃ ┃┗━┓┣━┫┃╻┃┣━┫┣━┫┣━┫
╹ ╹ ╹ ┗━┛┗━┛╹ ╹   ╹ ╹┗━┛┗━┛╹ ╹┗┻┛╹ ╹╹ ╹╹ ╹, \n for stardance misson project on hack club.

      `);
   }
   
    else{
        print("command not found");
    }
}


//move terminal
dragElement(document.getElementById("terminal-window"));

//open terminal 
  const openterminal = document.querySelector("#terminal-window");

 document.getElementById("terminal").addEventListener("click", function(){
    openWindow(openterminal);
    document.querySelector(".taskbar-apps").insertAdjacentHTML("beforeend", ` <button id="mypc-app" class="task-icon">
                   <img src="images/terminal.png" alt="my bug"> 
              </button>`);
 });

 //close terminal 
 document.getElementById("close-terminal").addEventListener("click", function(){
  closeWindow(document.getElementById("terminal-window"));
  document.querySelector("#mypc-app").remove();
 });


 // code for change wallpaper

 document.getElementById("change-wallpaper").addEventListener("click",function(){
     openWindow(document.querySelector("#wallpaper-window"));
 document.querySelector(".taskbar-apps").insertAdjacentHTML("beforeend", ` <button id="mypc-app" class="task-icon">
                   <i class="bi bi-sliders2"></i>
              </button>`);

 });
//  drag
dragElement(document.querySelector("#wallpaper-window"));




const upload = document.getElementById("wallpaper-upload");

upload.addEventListener("change", (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
        document.getElementById("desktop").style.backgroundImage =
            `url(${event.target.result})`;
            closeWindow(document.getElementById("wallpaper-window"));
    };

    reader.readAsDataURL(file);
});

