const joke = document.getElementById('joke');
const btn = document.getElementById('btn');

var URL =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const getFact = () => {
    fetch(URL)
      .then((info) => info.json())
      .then((item) => {
        joke.textContent = `${item.joke}`;
      });
};

btn.addEventListener("click", getFact);