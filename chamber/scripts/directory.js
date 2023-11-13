const main = document.querySelector('#directory');
const url = "https://neves-lucas.github.io/wdd230/chamber/data/members.json";
const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');

async function getCards(){
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);
}

gridBtn.addEventListener('click', () => {
    main.classList.add('grid');
    main.classList.remove('list');
});

listBtn.addEventListener('click', () => {
    main.classList.add('list');
    main.classList.remove('grid');
})

function displayMembers(arr){
    arr.forEach((member) =>{
        let card = document.createElement('section');
        let header = document.createElement('h2');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let link = document.createElement('a');
        let description = document.createElement('p');
        let grade = document.createElement('p');
        card.classList.add('card');

        header.innerHTML = member.name;
        logo.src = member.imagerl;
        logo.alt = `image of ${member.name} logo`;
        logo.loading = "lazy";
        logo.width = "375";
        logo.height = "375";
        link.textContent = member.website;
        address.textContent = member.address;
        phone.textContent = member.phone;
        description.textContent = member.description;
        grade.innerHTML = member.membershipLevel;

        card.appendChild(header);
        card.appendChild(logo);
        card.appendChild(link);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(description);
        card.appendChild(grade);

        main.append(card);

    })
}

getCards();