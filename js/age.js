const yearsDiff = (d1, d2) => 
    Math.floor(Math.abs((d1.getTime() - d2.getTime())) / (3600 * 24 * 1000 * 365));


const birthDate = new Date("05/24/2002");
let today = new Date();
let years = yearsDiff(today, birthDate);

let aboutPara = document.querySelector("#about > p");
aboutPara.textContent += ` I am ${years} years old.`
