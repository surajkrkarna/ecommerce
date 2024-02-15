const { Product } = require("../models");
const fetch = require('node-fetch')

async function addProducts() {
    try {
        for (let i = 0; i <= 10; i++) {
            let response = await fetch(`https://dummyjson.com/products?limit=10&skip=${i * 10}`);
            let products = await response.json();
            if (products.products.length) {
                products = products.products.map((product) => ({ ...product, api_id: product.id }));
                products.forEach(async (product) => {
                    await Product.create(product);
                });
            }
        }
    } catch (error) {
        console.log(error)
    }
}

addProducts()
