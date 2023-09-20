let currentYear = new Date().getFullYear();
let modifiedDate = new Date();
let dateElement = document.getElementById('lastModified')
const options = {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
};

const formattedDate = modifiedDate.toLocaleDateString('en-US', options);

document.getElementById("year").innerHTML = currentYear;
dateElement.innerHTML = `<strong>Last Modified: ${formattedDate}</strong>`;
