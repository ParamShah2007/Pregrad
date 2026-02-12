import products from "./data.js";
console.log(products)
console.log(products);
const productsDisplay = document.getElementById('productsDisplay');
const displayProducts = products => {
    products.forEach((currentProduct) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
        <img src="${currentProduct.imgUrl}" alt="${currentProduct.name}">
        <h3>${currentProduct.name}</h3>
        <p class="rating-discount-strip"> ⭐${currentProduct.rating}
            <span class="discount">${currentProduct.discountPercentage}% OFF </span>
        </p>
        <p class="price-button-strip">
            <span class="price">${currentProduct.discountedPrice}</span>
            <span class="orignal-price">${currentProduct.price}</span>
            <button id="cart-button">Add to Cart </button>
        </p>
        `;
        productsDisplay.append(card);
    });
};
displayProducts(products);
