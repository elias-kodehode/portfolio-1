const app = {};
app.mouseElement = document.getElementById("mouse");
app.expand = (obj) =>  {
    var parent = obj.parentElement.parentElement;
    
    var isExpanded = parent.classList.contains("expand");

    isExpanded == false ? 
        parent.classList.add("expand") :
        parent.classList.remove("expand");
};

document.addEventListener("mousemove", function(evt)  {
    app.mouseElement.style.left = evt.clientX + "px";
    app.mouseElement.style.top = evt.clientY + "px";
});
