
// -- Bring in Menu Data
// import dinner_menu from "./dinner_items";
// const dinner_menu_cold = require("./dinner_items");

// -- TESTING -- //
// console.log("Cold Menu Items:")
// console.log(dinner_items_cold);
// console.log("Hot Menu Items:")
// console.log(dinner_items_hot);
// console.log("Bread Items:")
// console.log(bread_items);
// console.log("Large Menu Items:")
// console.log(large_plates);
// -- TESTING -- //


// -- Grab HTML divs 
let small_cold = document.querySelector(".cold-items");
let small_hot = document.querySelector(".hot-items");
let breads = document.querySelector(".khachapuri-items");
let large = document.querySelector(".large");

// -- TESTING -- //
// console.log(small_cold, small_hot, breads, large);

// ------------------------------------------------- //
//          Initialize Menu Population               //
// ------------------------------------------------- //
function init() {
    populateShareCold();
    populateShareHot();
    populateBreads();
    populateLargePlates();
}

// Run Program
init();

console.log("Small Cold Num: " + dinner_items_cold.length)
// ------------------------------------------------- //
//   Function to Populate Cold Share Plates Section  //
// ------------------------------------------------- //
function populateShareCold() {

    // Create an empty STRING to populate
    small_cold.innerHTML = "";
    
    dinner_items_cold.forEach(item => {
        // console.log(item.item_name);
    
        // Add each items data to a COLUMN and CARD 
        let temp = `<div class="col-md-4 box">
            <div class="card">
                <div class="card-body text-center">
                    <div class="row name-price-1">
                        <h5 class="card-title">${item.item_name}</h5>
                        <span class="item-price">$${item.item_price}</span>
                    </div>
                    <p class="card-text">${item.description}</p>
                </div>
            </div>
        </div>`;
    
        small_cold.innerHTML += temp;
    });
}


console.log("Small Hot Num: " + dinner_items_hot.length)
// ------------------------------------------------- //
//   Function to Populate Cold Share Plates Section  //
// ------------------------------------------------- //
function populateShareHot() {

    // Create an empty STRING to populate
    small_hot.innerHTML = "";

    dinner_items_hot.forEach(item => {
        // console.log(item.item_name);

        // Add each items data to a COLUMN and CARD 
        let temp = `<div class="col-md-4 box">
            <div class="card">
                <div class="card-body text-center">
                    <div class="row name-price-1">
                        <h5 class="card-title">${item.item_name}</h5>
                        <span class="item-price">$${item.item_price}</span>
                    </div>
                    <p class="card-text">${item.description}</p>
                </div>
            </div>
        </div>`;

        small_hot.innerHTML += temp;
    });
}



console.log("Khachaquri Num: " + breads.length)
// ------------------------------------------------- //
//     Function to Populate KHACHAOURI Section       //
// ------------------------------------------------- //
function populateBreads() {

    // Create an empty STRING to populate
    breads.innerHTML = "";

    bread_items.forEach(item => {
        // console.log(item.item_name);

        // Add each items data to a COLUMN and CARD 
        let temp = `<div class="col-md-4 box">
            <div class="card">
                <div class="card-body text-center">
                    <div class="row name-price-1">
                        <h5 class="card-title">${item.item_name}</h5>
                        <span class="item-price">$${item.item_price}</span>
                    </div>
                    <p class="card-text">${item.description}</p>
                </div>
            </div>
        </div>`;

        breads.innerHTML += temp;
    });
}


console.log("Large Num: " + large_plates.length)
// ------------------------------------------------- //
//     Function to Populate Large Plates Section     //
// ------------------------------------------------- //
function populateLargePlates() {

    // Create an empty STRING to populate
    large.innerHTML = "";

    large_plates.forEach(item => {
        // console.log(item.item_name);

        // Add each items data to a COLUMN and CARD 
        let temp = `<div class="col-md-4 box">
            <div class="card">
                <div class="card-body text-center">
                    <div class="row name-price-1">
                        <h5 class="card-title">${item.item_name}</h5>
                        <span class="item-price">$${item.item_price}</span>
                    </div>
                    <p class="card-text">${item.description}</p>
                </div>
            </div>
        </div>`;

        large.innerHTML += temp;
    });
}