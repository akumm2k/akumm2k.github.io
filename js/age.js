const computeAge = () => {
    let today = new Date();
    let [year, date, month] = 
        [today.getUTCFullYear(), today.getUTCDate(), today.getUTCMonth()]
    age = year - 2002 
    if (month < 5 || (month == 5 && date < 24))
        age -= 1
    return age
}

let aboutPara = document.querySelector("#about > p");
aboutPara.textContent += ` I am ${computeAge()} years old.`
