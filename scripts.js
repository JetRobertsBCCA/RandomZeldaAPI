const btn = document.getElementById('gamebtn');
let games = []

document.addEventListener("DOMContentLoaded", () => {
    fetchAllGames();
});

async function fetchAllGames(){
    let request = await fetch("https://zelda.fanapis.com/api/games");
    console.log(request.status);
    if (request.ok){
        let data = await request.json();
        for (let game of data.data){
            games.push(game.name);
        }
    }
    

    // normal data at this point

}

console.log(games)

btn.addEventListener('click',() => {
    let x = Math.floor(Math.random() * 20);
    btn.textContent = games[x];
        
})

