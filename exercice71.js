const isPalindrome = (str) => {
    for(var i =0; i<str.length ; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("radar")); // true
console.log(isPalindrome("hello")); // false    