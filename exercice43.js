function countvowels(str) {
    const vowels = 'aeiouAEIOU';
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) >= 0){
            count++;
        }
    }
      return count;
}
console.log(countvowels("Hello World")); 
console.log(countvowels("JavaScript"));
console.log(countvowels("Piscine"));