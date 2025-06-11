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
                <button class="product-button" data-id="${product.id}" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        catalogContainer.appendChild(productCard);
    });
}

const updateCart = () => {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = ""; // Clear previous content
    if (!cart.length) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <img class="cart-item-picture" src="${item.imageUrl}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <div class="cart-item-details">
                <p>Subtotal: €${(item.price * item.quantity).toFixed(2)}</p>
                <button class="cart-item-button" data-id="${item.id}" onclick="remove(${item.id})">Remove</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });
}

const updateTotal = () => {}

const remove = (productId) => {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
        updateCart();
        updateTotal();
    } else { console.error("Item not found in cart"); }
}

const addToCart = (productId) => {
    const product = productCatalog.find(p => p.id === productId);
    if (product) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) { 
            cartItem.quantity++;
        } else { 
            cart.push({ 
                id: product.id,
                name: product.name,
                price: product.price,
                category: product.category,
                imageUrl: product.imageUrl, 
                quantity: 1 
            }); 
        }

        updateCart();
        updateTotal();
    } else { console.error("Product not found"); }
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

