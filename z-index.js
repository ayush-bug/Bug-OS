let highestZ = 100;

document.addEventListener("mousedown", (e)=>{
    const win = e.target.closest(".window");
    if(!win) return;
    highestZ++;
    win.style.zIndex = highestZ;
})