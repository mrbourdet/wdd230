const url = "https://mrbourdet.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#directory');
async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.companies); // temporary testing of data retreival
    displayDirectory(data.companies);
  }
  
  getCompanyData();

  const displayDirectory = (companies) => {
    companies.forEach((company) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let p = document.createElement('p');
      let pp = document.createElement('p');
      let name = document.createElement('h2');
      let logo = document.createElement('img');
      let contact = document.createElement('p');
      let title = document.createElement('p');
      let email = document.createElement('a');
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let website = document.createElement('a');
      let level = document.createElement('p');
      let genre = document.createElement('p');
  
      
      name.textContent = `${company.name}`;
      genre.textContent = `${company.genre}`;
      contact.textContent = `${company.contact}`;
      title.textContent = `${company.title}`;
      email.textContent = `Email`;
      address.textContent = `${company.address}, ${company.city}, ${company.state}  ${company.zip}`;
      phone.textContent = `☎️${company.phone}`;
      website.textContent = `Website`;
      level.textContent = `Membership Level: ${company.level.toUpperCase()}`;
      const aa = document.createElement("a");

      email.setAttribute("href", `mailto:${company.email}`);
      website.setAttribute("href", `${company.website}`);
      // Build the image portrait by setting all the relevant attributes
      logo.setAttribute('src', company.imageurl);
      logo.setAttribute('alt', `${company.name}`);
      logo.setAttribute('loading', 'lazy');
    //   logo.setAttribute('width', '340');
    //   logo.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(logo);
      card.appendChild(name);
      // card.appendChild(genre);
      card.appendChild(contact);
      // card.appendChild(title);
      card.appendChild(address);
      card.appendChild(phone);
      p.appendChild(email);  
      card.appendChild(p); 
      pp.appendChild(website);
      card.appendChild(pp);
      card.appendChild(level);
  
      cards.appendChild(card);
    }); // end of arrow function and forEach loop
  }

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#directory");

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
