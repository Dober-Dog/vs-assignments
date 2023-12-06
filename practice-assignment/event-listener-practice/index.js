var square = document.getElementById("square")

function hover(){
    square.style.backgroundColor = "blue"
}

function holdDown(){
    square.style.backgroundColor = "red"
}

function letGo(){
    square.style.backgroundColor = "yellow"
}

function doubleClick(){
    square.style.backgroundColor = "green"
}

function wheel(){
    square.style.backgroundColor = "orange"
}

square.addEventListener("mouseover", hover)
square.addEventListener("mousedown", holdDown)
square.addEventListener("mouseup", letGo)
square.addEventListener("dblclick", doubleClick)
document.body.addEventListener("wheel", wheel)