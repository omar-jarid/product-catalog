const showCatalog = () => {
    const catalogContainer = document.getElementById("product-list");
    catalogContainer.innerHTML = ""; // Clear previous content
    productCatalog.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img class="product-picture" src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="product-details">
                <p>€${product.price.toFixed(2)}</p>
                <button class="product-button" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        catalogContainer.appendChild(productCard);
    });
}

const productCatalog = [
    { id: 1, name: "Laptop", price: 999.99, category: "Electronics", imageUrl: "assets/laptop.webp" },
    { id: 2, name: "Smartphone", price: 499.99, category: "Electronics", imageUrl: "assets/smartphone.webp" },
    { id: 3, name: "Coffee Maker", price: 79.99, category: "Home Appliances", imageUrl: "assets/coffee-maker.webp" },
    { id: 4, name: "Blender", price: 49.99, category: "Home Appliances", imageUrl: "assets/blender.webp" },
    { id: 5, name: "Headphones", price: 199.99, category: "Electronics", imageUrl: "assets/headphones.webp" },
    { id: 6, name: "Smartwatch", price: 299.99, category: "Electronics", imageUrl: "assets/smartwatch.webp" },
    { id: 7, name: "Microwave Oven", price: 89.99, category: "Home Appliances", imageUrl: "assets/microwave-oven.webp" },
    { id: 8, name: "Air Conditioner", price: 499.99, category: "Home Appliances", imageUrl: "assets/air-conditioner.webp" },
    { id: 9, name: "Gaming Console", price: 399.99, category: "Electronics", imageUrl: "assets/gaming-console.webp" },
    { id: 10, name: "Wireless Charger", price: 29.99, category: "Electronics", imageUrl: "assets/wireless-charger.webp" }
];

const cart = [];

showCatalog();

