const app = {};

var mouseElement = document.getElementById("mouse");

app.expand = (obj) =>  {
    var parent = obj.parentElement.parentElement;
    
    var isExpanded = parent.classList.contains("expand");

    if(!isExpanded){
        parent.classList.add("expand");
    }else{
        parent.classList.remove("expand");
    }
};

document.addEventListener("mousemove", function(evt)  {
    const x = evt.clientX;
    const y = evt.clientY;

    mouseElement.style.left = x + "px";
    mouseElement.style.top = y + "px";
})