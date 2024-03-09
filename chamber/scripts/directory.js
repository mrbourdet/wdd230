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
      let name = document.createElement('h2');
      let logo = document.createElement('img');
      let contact = document.createElement('p');
      let title = document.createElement('p');
      let email = document.createElement('p');
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let website = document.createElement('p');
      let level = document.createElement('p');
      let genre = document.createElement('p');
  
      // Build the h2 content out to show the prophet's full name
      name.textContent = `Name: ${company.name}`;
      genre.textContent = `Business Genre: ${company.genre}`;
      contact.textContent = `Contact: ${company.contact}`;
      title.textContent = `Title: ${company.title}`;
      email.textContent = `Email: ${company.email}`;
      address.textContent = `Address: ${company.address}, ${company.city}, ${company.state}  ${company.zip}`;
      phone.textContent = `Phone: ${company.phone}`;
      website.textContent = `Website: ${company.website}`;
      level.textContent = `Membership Level: ${company.level}`;
      // Build the image portrait by setting all the relevant attributes
      logo.setAttribute('src', company.imageurl);
      logo.setAttribute('alt', `${company.name}`);
      logo.setAttribute('loading', 'lazy');
    //   logo.setAttribute('width', '340');
    //   logo.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(logo);
      card.appendChild(name);
      card.appendChild(genre);
      card.appendChild(contact);
      card.appendChild(title);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);
      card.appendChild(level);
  
      cards.appendChild(card);
    }); // end of arrow function and forEach loop
  }