let myArray=[1,2,3,4,5,4,54,5,4,3,534,5,34,5,43,5,43,5,34,5,3,45,43,5];
function pushArray(myArray,target){
    myArray.push(target);
    return;
}
pushArray(myArray,100);
console.log(myArray);
function unshiftArray(myArray,target){
    myArray.unshift(target);
    return;
}
unshiftArray(myArray,-100);
console.log(myArray);
function insertArray(myArray,_index,target){
    myArray.splice(_index,0,target);
    return;
}
insertArray(myArray,3,10000);
console.log(myArray);

function updateArray(myArray,_index,target){
    myArray[_index]=target;
    return;
}
updateArray(myArray,3,"update");
console.log(myArray);
function deleteArray(myArray,_index){
    myArray.splice(_index,1);
    return;
}
deleteArray(myArray,3,10000);
console.log(myArray);

function sortArray(myArray){
myArray.sort(function(a,b){return a-b});
};
sortArray(myArray);
console.log(myArray);