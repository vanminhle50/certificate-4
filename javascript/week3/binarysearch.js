const myArray = [2, 3, 4, 5, 6, 8, 10, 15];
console.log(myArray);
const key=6;
console.log(`Key: ${key}`);
function binarySearch(searchArray, target){
    let found =-1;
    console.log(` Search Array:  ${searchArray}`);
    console.log(`Target: ${target}`);
    let start =0;
    let end=searchArray.length-1;

    while(start<= end){
        let mid = Math.floor((start+end)/2);
        if (searchArray[mid]==target){
            console.log(`SearchArray[${mid}]: ${searchArray[mid]}`);
            found=mid;
            break;
        }else if (searchArray[mid]<target){
            start=mid+1;
            console.log(`star: ${start}` );
        }
        else end=mid-1;
    }
    return found; // must outside loop
}
const result = binarySearch(myArray,key);
if (result == -1){
  console.log(`The key of ${key} was not found`)
} else {
  console.log(`The key of ${key} was found at index ${result}`)
}