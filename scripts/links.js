const baseURL = "https://neves-lucas.github.io/wdd230/";
const linksURL = "https://neves-lucas.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}


getLinks();