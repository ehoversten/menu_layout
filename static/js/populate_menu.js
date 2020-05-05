
// -- Bring in Menu Data
// import dinner_menu from "./dinner_items";
// const dinner_menu_cold = require("./dinner_items");

// console.log("Cold Menu Items:")
// console.log(dinner_items_cold);
// console.log("Hot Menu Items:")
// console.log(dinner_items_hot);
// console.log("Bread Items:")
// console.log(bread_items);
// console.log("Large Menu Items:")
// console.log(large_plates);

// -- Grab HTML divs 
let small_cold = document.querySelector(".cold-items");
let small_hot = document.querySelector(".hot-items");
let breads = document.querySelector(".khachapuri-items");
let large = document.querySelector(".large");

console.log(small_cold, small_hot, breads, large);


// -- Build a card block for each menu item -- //
// small_cold.innerHTML = `
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

// -- Loop through Cold Menu Items -- //


dinner_items_cold.map(item => {
    console.log(item.item_name);

    // -- Build a card block for each menu item -- //
    small_cold.innerHTML = `
<div class="card">
    <div class="card-body text-center">
        <div class="row name-price-1">
            <h5 class="card-title">${item.item_name}</h5>
            <span class="item-price">$${item.item_price}</span>
        </div>
        <p class="card-text">${item.description}</p>
    </div>
</div>
`;
})