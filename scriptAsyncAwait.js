// Declare variables:
const displayPic = document.querySelector(".displayPic");
const displayQuote = document.querySelector(".displayQuote");
const displayGiphy = document.querySelector(".displayGiphy");
const button01 = document.querySelector("#button01");
const giphyApiKey = "lICS8BJoB7k2X8FmSaB32fmK2DUrzrnm";
let characterName = "";

button01.addEventListener("click", (event) => {
  event.preventDefault();
  // getSimpsons();
  getGiphy();
});

function getRandomNum(limit) {
  return Math.floor(Math.random() * limit);
}

function getSimpsons() {
  fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then((res) => res.json())
    .then((res) => {
      characterName = res[0].character;
      console.log(characterName);
      displayPic.innerHTML = `
      <img src="${res[0].image}">
      `;
      displayQuote.innerHTML = `
      <h2>"${res[0].quote}"</h2>
      <p> - ${res[0].character}</p>
      `;
    });
}

async function getGiphy() {
  const result = await getSimpsons();
  console.log(result);
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${characterName}`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      const randomIndex = getRandomNum(res.data.length);
      console.log(randomIndex);
      displayGiphy.innerHTML = `
      <img src="${res.data[randomIndex].images.downsized_medium.url}">
      `;
    });
}
