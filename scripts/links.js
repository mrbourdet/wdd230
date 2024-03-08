const baseURL = "https://mrbourdet.github.io/wdd230/";
const linksURL = "https://mrbourdet.github.io/wdd230/data/links.json";
const lessonlinks = document.querySelector('.links');

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.lessons)
}
  
getLinks();


const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        const pp = document.createElement("p");
        pp.textContent = `Lesson ${week.lesson}: `;

        week.links.forEach((lesson) => {
            const aa = document.createElement("a");

            aa.setAttribute("href", `${lesson.url}`);
            aa.textContent = `${lesson.title}  |  `;

            pp.appendChild(aa);

        });
        lessonlinks.appendChild(pp);
    });
};