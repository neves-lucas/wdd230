const main = document.querySelector('#directory');
const url = "https://neves-lucas.github.io/wdd230/chamber/data/members.json";

async function getCards(){
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);
}

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
        grade.innerHTML = member.membership;

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


const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}


getCards();