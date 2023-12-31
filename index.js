const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");
const url = "https://api.quotable.io/random";


btn.addEventListener("click", (e) =>{

    e.preventDefault();
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        quote.innerHTML = data.content;
        author.innerHTML = data.author;
    });
})