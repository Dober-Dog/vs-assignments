var title = document.createElement("h2")
title.textContent = "JavaScript Made This!!"
var span = document.createElement("span")
span.textContent = "Logan Russell "
span.style.color = "green"
var header = document.getElementById("header")
header.append(title)
header.append(span)
var span2 = document.createElement("span")
span2.textContent = " wrote the JavaScript"
header.append(span2)


var messageLeft = document.getElementsByClassName("message left")
var messageRight = document.getElementsByClassName("message right")
var button = document.getElementById("clear-button")

function erase(){
    for(i = 0; i < messageLeft.length; i ++){
        messageLeft[i].textContent = "--MESSAGE DELETED--"
    }
    for(i = 0; i < messageRight.length; i ++){
        messageRight[i].textContent = "--MESSAGE DELETED--"
    }
}

button.addEventListener("click", erase)