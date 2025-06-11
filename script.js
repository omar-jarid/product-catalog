// Questa funzione mostra il catalogo dei prodotti.
const showCatalog = () => {
    // Seleziona il contenitore del catalogo e svuota il suo contenuto precedente.
    const catalogContainer = document.getElementById("product-list");
    catalogContainer.innerHTML = "";
    
    // Se il catalogo è vuoto, mostra un messaggio.
    if (!productCatalog.length) {
        catalogContainer.innerHTML = "<p>Catalog is empty.</p>";
        return;
    }

    // Itera su ogni prodotto nel catalogo e crea un elemento per ciascuno.
    productCatalog.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img class="product-picture" src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="product-details">
                <p><span class="quantity">€${product.price.toFixed(2)}</span></p>
                <button class="product-button" data-id="${product.id}" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        catalogContainer.appendChild(productCard);
    });
}

// Questa funzione mostra il carrello degli acquisti.
const updateCart = () => {
    // Seleziona il contenitore del carrello e svuota il suo contenuto precedente.
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";

    // Se il carrello è vuoto, mostra un messaggio.
    if (!cart.length) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    // Itera su ogni elemento del carrello e crea un elemento per ciascuno.
    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <img class="cart-item-picture" src="${item.imageUrl}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="quantity-p">Quantity: <span class="quantity">${item.quantity}</span></p>
            </div>
            <div class="cart-item-details">
                <p>Subtotal: <span class="quantity">€${(item.price * item.quantity).toFixed(2)}</span></p>
                <button class="cart-item-button" data-id="${item.id}" onclick="remove(${item.id})">Remove</button>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });
}

// Questa funzione aggiorna il totale del carrello.
const updateTotal = () => {
    let total = 0;
    cart.forEach(item => total += item.price * item.quantity);
    const totalElement = document.getElementById("total");
    totalElement.textContent = total.toFixed(2);
}

// Questa funzione rimuove un prodotto dal carrello.
const remove = (productId) => {
    cart.forEach((item, index) => {
        if (item.id === productId) {
            // Se la quantità è maggiore di 1, decrementa la quantità.
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                // Altrimenti, rimuovi l'elemento dal carrello.
                cart.splice(index, 1);
            }

            updateCart();
            updateTotal();
        } else { console.error("Item not found in cart"); }
    });
}

// Questa funzione aggiunge un prodotto al carrello.
const addToCart = (productId) => {
    let found = false;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === productId) {
            cart[i].quantity++;
            found = true;
            break;
        }
    }

    if (!found) {
        // Cerca il prodotto nel catalogo
        for (let j = 0; j < productCatalog.length; j++) {
            if (productCatalog[j].id === productId) {
                cart.push({
                    id: productCatalog[j].id,
                    name: productCatalog[j].name,
                    price: productCatalog[j].price,
                    category: productCatalog[j].category,
                    imageUrl: productCatalog[j].imageUrl,
                    quantity: 1
                });
                break;
            }
        }
    }

    updateCart();
    updateTotal();
};

// Questa funzione cancella il carrello.
const clearCart = () => {
    cart.length = 0; // Svuota l'array del carrello
    updateCart(); // Aggiorna la visualizzazione del carrello
    updateTotal(); // Aggiorna il totale
}

// Catalogo dei prodotti
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

// Inizializza il carrello come un array vuoto.
const cart = [];

// Mostra il catalogo dei prodotti all'avvio della pagina.
showCatalog();

