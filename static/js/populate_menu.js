
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


console.log("Total Num: " + dinner_items_cold.length)

// Create an empty STRING to populate
small_cold.innerHTML = "";

dinner_items_cold.forEach(item => {
    console.log(item.item_name);

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


// -- Build a card block for each menu item -- //

// small_cold.innerHTML = `<div class="col-md-4 box">
//     <div class="card">
//         <div class="card-body text-center">
//             <div class="row name-price-1">
//                 <h5 class="card-title">Food Title</h5>
//                 <span class="item-price">$5</span>
//             </div>
//             <p class="card-text">Food description</p>
//         </div>
//     </div>
// </div>`;

// -- Loop through Cold Menu Items -- //

small_hot.innerHTML = `<div class="col-md-4 box hot-items">
    <div class="card">
        <div class="card-body text-center">
            <div class="row name-price-1">
                <h5 class="card-title">Jonjoli Salad</h5>
                <span class="special">NEW ITEM!</span>
                <span class="item-price">$7</span>
            </div>
            <p class="card-text">Jonjoli, fresh and house-pickled cucumber, onion, green tomato, fresh herbs and sunflower</p>
        </div>
    </div>
</div>
`;


// console.log(dinner_items_cold.length);
// dinner_items_cold.map(item => {
//     console.log(item.item_name);

//     // -- Build a card block for each menu item -- //
//     small_cold.innerHTML = `
// <div class="card">
//     <div class="card-body text-center">
//         <div class="row name-price-1">
//             <h5 class="card-title">${item.item_name}</h5>
//             <span class="item-price">$${item.item_price}</span>
//         </div>
//         <p class="card-text">${item.description}</p>
//     </div>
// </div>
// `;
// })