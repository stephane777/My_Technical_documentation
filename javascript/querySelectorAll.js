console.log("querySelectorAll.js is loaded");               

var list, listArray;

// document.getElementById('btn').addEventListener('click', clearDiv);
var btnNode = document.getElementById("btn");



var clearDiv = function (){
    list = document.querySelectorAll('.myDiv1, .myDiv2');
    // console.log('list : ' + list);
    listArray = Array.prototype.slice.call(list);
    // console.log('listArray : ' + listArray);
    listArray.forEach(function(current, index, array) {
    current.textContent = '';
        // console.log(current);
        // console.log(current.textContent);
});
};

btnNode.addEventListener("click", clearDiv);