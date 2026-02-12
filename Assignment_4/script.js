import products from './data.js';

const productsDisplay = document.getElementById('productsDisplay');

const displayProducts = (productsArray) => {
  productsDisplay.innerHTML = "";

  productsArray.forEach((currentProduct) => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <img src="${currentProduct.imgUrl}" alt="${currentProduct.name}">
      <h3>${currentProduct.name}</h3>

      <p class="card-rating-discount-strip">
        <span>${currentProduct.rating} ⭐</span>
        <span class="discount">${currentProduct.discountPercentage}% OFF</span>
      </p>

      <p class="card-cart-button-strip">
        <span class="price">₹${currentProduct.discountedPrice}/-</span>
        <span class="original-price">₹${currentProduct.price}/-</span>
      </p>

      <button class="product-button">Add To Cart</button>
    `;

    productsDisplay.append(card);
  });
};

displayProducts(products);

filterDropdown.addEventListener('change', () => {
  const selectedType = filterDropdown.value;

  if (selectedType === "") {
    displayProducts(products);
  } else {
    const filteredProducts = products.filter(
      (product) => product.type === selectedType
    );
    displayProducts(filteredProducts);
  }
});