// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time



window.addEventListener("load",function(){
  showdata();
})


function showdata(){
 
     var elem = JSON.parse(localStorage.getItem("movie")) || {} ;

     let movies = document.querySelector("#movie");
        movies.innerText = null;

     let div = document.createElement("div");

     let img = document.createElement("img");
     img.src = elem.Poster;
 
     let title = document.createElement("p");
     title.innerText = elem.Title;
     div.append(img,title);
    movies.append(div);


    let arr = JSON.parse(localStorage.getItem("amount")) || [] ;
    let amount = arr.reduce(function(sum, elem){
        return sum + elem;
        },0);
        let wallet = document.querySelector("#wallet");
        wallet.innerText = amount;

}
