// Store the wallet amount to your local storage with key "amount"


function functionaddamount(){

    let arr = JSON.parse(localStorage.getItem("amount")) || [] ;
    
    let money = document.querySelector("#amount").value;
    
   
    let amount = arr.reduce(function(sum, elem){
    return sum + elem;
    },0)
   

    amount = Number(money) + Number(amount);
    arr[0] = amount;
    let wallet = document.querySelector("#wallet");
    wallet.innerText = amount;

    localStorage.setItem("amount",JSON.stringify(arr));
console.log(arr);
   

}

window.addEventListener("load",function(){
    functionaddamount();
})

