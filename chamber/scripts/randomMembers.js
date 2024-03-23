const urljson = "https://mrbourdet.github.io/wdd230/chamber/data/members.json";
async function getCompanyData() {
    const response = await fetch(urljson);
    const data = await response.json();
    // console.table(data.companies); // temporary testing of data retreival
    prepareAds(data.companies);
  }
  
  getCompanyData();

  const prepareAds = (companies) => {
    const goldSilverStatus = companies.filter(companies => ((companies.level == "gold") || (companies.level == "silver")));

    //console.log(goldSilverStatus);
    //chooseRandomItems(goldSilverStatus, 3);
    const randomGoldSilver = chooseRandomItems(goldSilverStatus, 3);
    displayAds(randomGoldSilver);
    //console.log(randomGoldSilver);
  }


  // Function to choose random items from an array
    function chooseRandomItems(arr, numItems) {
        const result = [];
        const length = arr.length;
        const indices = new Set();
    
    // Generate unique random indices
    while (indices.size < numItems) {
      const index = Math.floor(Math.random() * length);
      if (!indices.has(index)) {
        indices.add(index);
        result.push(arr[index]);
      }
    }
    
    return result;
  }

  

  const displayAds = (companies) => {
    const cards = document.querySelector('.ads');
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
    phone.textContent = `${company.phone}`;
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
    // card.appendChild(contact);
    // card.appendChild(title);
    card.appendChild(address);
    card.appendChild(phone);
    p.appendChild(email);  
    card.appendChild(p); 
    pp.appendChild(website);
    card.appendChild(pp);
    // card.appendChild(level);

    cards.appendChild(card);
})}

