// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
window.addEventListener("load",function(){
    let arr = JSON.parse(localStorage.getItem("amount")) || [] ;
    let amount = arr.reduce(function(sum, elem){
        return sum + elem;
        },0);
        let wallet = document.querySelector("#wallet");
        wallet.innerText = amount;
})


let id ;
function debouncing(delay){
    if(id){
     clearTimeout(id);
    }
  
     id = setTimeout(function(delay){
        main();
     },delay)

}

async function main(){

  let data = await getmovies();
  

    appendmovies(data);
  
  

}


// http://www.omdbapi.com/?apikey=a57166bf&s=avengers

async function getmovies(){

    let name1 = document.querySelector("#search").value;

   try{
     
     let res = await fetch(`http://www.omdbapi.com/?apikey=a57166bf&s=${name1}`);

     let data = await res.json();
 
       let moviedata = data.Search;
       console.log(data);
       return moviedata;    
   }
   catch(err){
       console.log(err);
   }

}


function appendmovies(data){

let movies = document.querySelector("#movies");
movies.innerText = null;

data.forEach(function(elem){
 
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = elem.Poster;

    let title = document.createElement("p");
    title.innerText = elem.Title;

    let but = document.createElement("button");
    but.innerText = "book movies";
    but.addEventListener("click",function(){
        movetocheckout(elem);
    })

    div.append(img,title,but);
    movies.append(div);
     
})



}

function movetocheckout(elem){
   localStorage.setItem("movie",JSON.stringify(elem));

   window.location.href = "./checkout.html";
}