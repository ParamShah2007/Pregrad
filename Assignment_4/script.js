import products from "./data.js";
import { data1 } from "./data.js";
import displayProducts from "./render.js";
console.log(displayProducts)
const productsDisplay = document.getElementById('productsDisplay');
const typeRadio = document.querySelectorAll('input[name]');
const ratingInput = document.getElementById('rating-input');
const ratingOutput = document.getElementById('rating-output');
displayProducts(products);

typeRadio.forEach(currentRadio=> {
    currentRadio.addEventListener('change', e=>{
        const selectedType=e.target.value
        const filteredData=products.filter(p => p.types === selectedType)
        displayProducts(filteredData)
    })
})

ratingInput.addEventListener('change', (e)=>{
    const currentValue=Number(e.target.value);
    console.log(typeof(currentValue));
    ratingOutput.innerText=currentValue
    const filterProducts = products.filter(p=>p.rating>=currentValue)
    displayProducts(filterProducts)
})