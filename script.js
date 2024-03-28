fetch('https://icanhazdadjoke.com/',
{headers: {'Accept': 'application/json', 'User-Agent': 'yrgo-kprog-class'}})
.then(resp => resp.json())
.then(json => console.log(json.joke));

let jokeBox = document.getElementsByClassName("jokeBox");
let jokeButton = document.getElementById("jokeButton");

jokeButton.addEventListener("click", ()=>{
    document.body.innerHTML.joke;
})