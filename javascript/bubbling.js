console.log("bubbling.js loaded");

var wrapper = document.querySelector(".wrapper");
wrapper.addEventListener("click", bubble );

function bubble (event){
    console.log(event.target);
    console.log(event.target.className);
    console.log(event.target.tagName);
}

console.log(window.console);
