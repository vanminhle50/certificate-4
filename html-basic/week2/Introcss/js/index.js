function changeBackground(statusRow){
    var div = document.getElementById("contentContainer");
    var backgroundColour = window.getComputedStyle(statusRow).color;
    div.style.backgroundColor =backgroundColour;
    statusRow.style.backgroundColor ="white";
}
function resetBackgound(statusRow){
    var div =document.getElementById("contentContainer");
    div.style.backgroundColor =  "bisque";
    statusRow.style.backgroundColor ="";
}
function changeLove(statusRow){
    var div = document.getElementById("loveDiv");
}
function resetLove(statusRow){
    var div =document.getElementById("loveDiv");
    div.style.backgroundColor =  "red";
}