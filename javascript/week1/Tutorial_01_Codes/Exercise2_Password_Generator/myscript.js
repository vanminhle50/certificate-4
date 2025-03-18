// This JavaScript function returns a random number x;
// 0 <= x <= n-1 (included):
// refer to https://www.w3schools.com/js/js_random.asp
function getRndInteger(n) {
    return Math.floor(Math.random() * n);
}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// shuffle an array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

function genPassword(length) {
    if (length < 6 || length > 10) {
        return "";
    }
    const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberSet = "0123456789";
    const specialCharSet = "!@#$%^&*";
    const fullSet = lowerCaseSet + upperCaseSet + numberSet + specialCharSet;

    // With the input length – e.g. 10
    // Init an empty array to store each password char in one element – []
    const passwordArray = [];
    let char;
    // Generate a random lower-case letter and add to the array – [a]
    char = lowerCaseSet.charAt(getRndInteger(lowerCaseSet.length));
    passwordArray.push(char);

    // Generate a random upper-case letter and add to the array – [a, E]
    char = upperCaseSet.charAt(getRndInteger(upperCaseSet.length));
    passwordArray.push(char);

    // Generate a random number and add to the array – [a, E, 5]
    char = numberSet.charAt(getRndInteger(numberSet.length));
    passwordArray.push(char);

    // Generate a random special character and add to the array – [a, E, 5, !]
    char = specialCharSet.charAt(getRndInteger(specialCharSet.length));
    passwordArray.push(char);

    // Generate several random characters and add to the array.
    // The total number meet the input length – [a, E, 5, !, u, *, O, x, 0, 8]
    for (let i = 5; i <= length; i++) {
        char = fullSet.charAt(getRndInteger(fullSet.length));
        passwordArray.push(char);
    }

    // Shuffle the array element randomly - [O, E, !, 5, *, u, a, x, 8, 0]
    const shuffledArray = shuffle(passwordArray);
    // Convert the array to a string to generate the final password – “OE!5*uax80”

    const password = shuffledArray.join("");
    return password;

}

function genPasswordClick() {
    let len = parseInt(document.getElementById("length").value);
    let password = genPassword(len);
    document.getElementById("password").innerHTML = password;
}

function copyPassword() {
    /* Get the text field */
    var copyText = document.getElementById("password").textContent;
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);
    /* Alert the copied text */
    alert("Copied the password: " + copyText);
}