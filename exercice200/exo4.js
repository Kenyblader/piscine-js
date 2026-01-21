const countVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    var count = 0;
    for (var char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
}
console.log(countVowels("hello"));         
console.log(countVowels("JavaScript"));    
console.log(countVowels("xyz"));           
console.log(countVowels("AEIOU"));         