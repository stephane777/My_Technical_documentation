console.log("traversingDom.js loaded");

var wrapper = document.querySelector(".wrapper");
wrapper.addEventListener("click", bubble );

function bubble (event){
    var targetElement = event.target;
    console.log(targetElement);
    console.log("parentNode : " + targetElement.parentNode.className);
    
}


