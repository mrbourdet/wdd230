const baseURL = "https://mrbourdet.github.io/wdd230/";
const linksURL = "https://mrbourdet.github.io/wdd230/data/links.json";
const lessonlinks = document.querySelector('.links');

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  //console.log(data);
  //console.log(data.lessons[0].links[0].url);
  displayLessons(data.lessons)
}
  
getLinks();


const displayLessons = (weeks) => {
    weeks.forEach((lessonItem) => {
        console.log("outer loop", lessonItem);
        let arr2 = lessonItem.links;
        arr2.foreach((elem) => {
            console.log("inner loop",elem);
        });
        // console.log(data.lessons.links);
    });
       
    };