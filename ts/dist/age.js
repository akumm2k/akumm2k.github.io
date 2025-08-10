function calculateAge(birthday) {
    const today = new Date();
    const yearsSinceBirth = today.getUTCFullYear() - birthday.getUTCFullYear();
    const birthMonth = birthday.getUTCMonth();
    const currMonth = today.getUTCMonth();
    const todayDate = today.getUTCDate();
    const birthDate = birthday.getUTCDate();
    if (currMonth < birthMonth ||
        (currMonth === birthMonth && todayDate < birthDate)) {
        return yearsSinceBirth - 1;
    }
    return yearsSinceBirth;
}
const MY_BIRTHDAY = new Date(Date.UTC(2002, 4, 24));
const MY_AGE = calculateAge(MY_BIRTHDAY);
const aboutParagraph = document.querySelector('#about > p');
if (aboutParagraph) {
    aboutParagraph.textContent += ` I am ${MY_AGE} years old.`;
}
export {};
