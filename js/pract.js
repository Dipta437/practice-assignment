const button1 = document.getElementById("firstRam");
const button2 = document.getElementById("secondRam");
const button3 = document.getElementById("firstStorage");
const button4 = document.getElementById("secondStorage");
const button5 = document.getElementById("thirdStorage");
const button6 = document.getElementById("firstShippingCharge");
const button7 = document.getElementById("secondShippingCharge");

const total = document.getElementById("fixedPrice");
total.innerText = "1299";

const grandTotal = document.getElementById("baseTotal");
grandTotal.innerText = "1299";

const finalTotal = document.getElementById("finalTotal");
finalTotal.innerText = "1299";


const additionalPrice = document.getElementById("additionalPrice");
const additionalStoragePrice = document.getElementById("additionalStoragePrice");
const shippingCost = document.getElementById("shippingCost");


button1.addEventListener("click", function(){
    firstRamPrice.innerText = "80";
    updateTotal();
});
button2.addEventListener("click", function(){
    firstRamPrice.innerText = "160";
    updateTotal();
});
button3.addEventListener("click", function(){
    additionalStoragePrice.innerText = "100";
    updateTotal();
});
button4.addEventListener("click", function(){
    additionalStoragePrice.innerText = "120";
    updateTotal();
})
button5.addEventListener("click", function(){
    additionalStoragePrice.innerText = "130";
    updateTotal();
})
button6.addEventListener("click", function(){
    shippingCost.innerText = "0";
    updateTotal();
})
button7.addEventListener("click", function(){
    shippingCost.innerText = "20";
    updateTotal();
})

    

// update total 
    function updateTotal(){
        const ramPrice = parseInt(firstRamPrice.innerText);
        const storagePrice = parseInt(additionalStoragePrice.innerText);
        const shipping = parseInt(shippingCost.innerText);
        const cost = parseInt(total.innerText);
        
        const totalPrice = ramPrice + storagePrice + shipping + cost;

        grandTotal.innerText = totalPrice;

        finalTotal.innerText = totalPrice;
        
    
        
        
       
        
        

    
        
        
    }