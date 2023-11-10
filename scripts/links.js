const activityList = document.querySelector('#activitiesList');
const url = "https://neves-lucas.github.io/wdd230/data/links.json";

async function getList(){
    const response = await fetch(url);
    const data = await response.json();

    loadList(data.lessons);
}

const loadList = (lessons) => {
    lessons.forEach((lesson) => {
        let list = document.createElement('li');
        let link = document.createElement('a');
        link.textContent = lesson.title;
        link.target = "_blank"
        link.href = lesson.url;
        list.appendChild(link);
        activityList.append(list);
       
        activityList.append(list);
    
    })
}
getList()