const timeDiff = (d1, d2) => 
    Math.floor(Math.abs((d1.getTime() - d2.getTime())) / (3600 * 24 * 1000));


const birthDate = new Date("05/24/2002");
let today = new Date();
let days = timeDiff(today, birthDate);

let dateTag = document.getElementById("date");
dateTag.innerText = `${days} days on Earth. 0 on Mars.`;