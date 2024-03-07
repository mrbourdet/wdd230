const baseURL = "https://mrbourdet.github.io/wdd230/";
const linksURL = "https://mrbourdet.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  //console.log(data);
  displayLessons(data.lessons)
}
  
getLinks();
const lessonlinks = document.querySelector('.links');

const displayLessons = (lessons) => {
     lessons.forEach((lesson) => {
        console.log(lesson.links)
    });
   
        //  links.forEach((link) => {
        //     let linkurl= link.url;
        //     let linktitle= link.title;
        //     let links = document.createElement('section');
        //     let week = document.createElement('p');
        //     let assignment = document.createElement('a');
        //     const weekline = `Week ${lesson}: <a href=${data.url}>${data.title}</a>`;
        //     console.log(weekline);
        // });

    //   // Create elements to add to the div.cards element
    //   let links = document.createElement('section');
    //   let week = document.createElement('p');
    //   let assignment = document.createElement('a');
    //   const weekline = `Week ${lesson}: <a ${data.url}>${data.title}</a>`;

    // //   <a href= "images/w3schools.com_combinator_exercise.png">w3schools.com Combinator Exercise</a>
  
    //   // Build the h2 content out to show the prophet's full name
    //   fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    //   dob.textContent = `Date of Birth: ${prophet.birthdate}`;
    //   pob.textContent = `Place of Birth: ${prophet.birthplace}`;
    //   // Build the image portrait by setting all the relevant attributes
    //   portrait.setAttribute('src', prophet.imageurl);
    //   portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    //   portrait.setAttribute('loading', 'lazy');
    //   portrait.setAttribute('width', '340');
    //   portrait.setAttribute('height', '440');
  
    //   // Append the section(card) with the created elements
    //   card.appendChild(weekline);
    //   card.appendChild(dob);
    //   card.appendChild(pob);
    //   card.appendChild(portrait);
  
    //   cards.appendChild(card);
    // }); // end of arrow function and forEach loop
}