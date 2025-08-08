/* fetch: Function used for making HTTP requests to fetch resources.
   (JSON style data, images, files)
   Simplifies asynchronous data fetching in JS and used for 
   interacting with APIs to retrieve and send data asynchronously
   over the web.
   fetch(url, {options}) */

//Using .then 
fetch("https://pokeapi.co/api/v2/pokemon/groudon")
    .then(response => {
        if(!response.ok){
            throw new Error("Could not fetch this resource.");
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error(error));

//Using async/await
fetchData();
async function fetchData(){
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/kyogre");

        if(!response.ok){
            throw new Error("Could not fetch this resource.");
        }

        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}

async function fetchPokemon(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch this resource.");
        }

        const data = await response.json();
        console.log(data);
        alert(`You searched: ${data.name}`);

        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}