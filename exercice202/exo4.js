class UserValidator {
    static estEmailValide(email) {
        return email.includes("@") && email.includes(".");
    }

    static estMotDePasseValide(mdp) {
        return mdp.length >= 8;
    }
}

console.log(UserValidator.estEmailValide("test@mail.com")); // true
console.log(UserValidator.estMotDePasseValide("12345678")); // true
console.log(UserValidator.estMotDePasseValide("123")); // false
