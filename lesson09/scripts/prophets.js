const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector('#cards');

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();

    //console.table(data.prophets)
    displayProphets(data.prophets)
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
       let card = document.createElement('section');
       let fullName = document.createElement('h2');
       let portrait = document.createElement('img');
       fullName.innerHTML = `${prophet.name} ${prophet.lastname}`
       portrait.src = prophet.imageurl;
       portrait.alt = `image of ${prophet.name} ${prophet.lastname}`
       portrait.loading = "lazy";
       portrait.width = "300";
       portrait.height = "400";

       card.appendChild(fullName);
       card.appendChild(portrait);

       cards.append(card);
        
    });
}

getProphetData();