// Sample Product Data - Replace with your actual products
const products = [
    {
        id: 1,
        name: "Inosuke Hashibira Beaded Anime Keychain",
        category: "keychain",
        price: 380,
        image: "Images/keychain/Inosuke keychain.jpeg",
        description: "Cute handmade keychain featuring Inosuke with colorful beads and charms. Perfect for keys, bags, or backpacks. A must-have for Demon Slayer fans 🐗💙",
        badge: "LIMITED"
    },
    {
        id: 2,
        name: "Asta Anime Banner | Black Clover Wall Decor",
        category: "banners",
        price: 499,
        image: "Images/Banner/Asta -Black Clover.jpeg",
        description: "Bold anime banner featuring Asta in action. Perfect for decorating your room, gaming setup, or anime corner. A must-have for Black Clover fans 🔥🖤",
        badge: "LIMITED"
    },
    {
        id: 3,
        name: "Black Clover Character Banner",
        category: "banners",
        price: 499,
        image: "Images/Banner/Black clover.jpeg",
        description: "Anime banner featuring multiple Black Clover characters. Perfect for room decor, gaming setups, or anime corners. Clean, bold, and fan-approved 🖤✨",
        badge: ""
    },
    {
        id: 4,
        name: "Yuji Itadori Anime Banner",
        category: "banners",
        price: 499,
        image: "Images/Banner/Yuji Itadori.jpeg",
        description: "Cool anime banner featuring Yuji Itadori. Perfect for room decor, gaming setups, or anime corners. Clean, bold, and a must-have for JJK fans 🔥🩸",
        badge: "LIMITED"
    },
    {
        id: 5,
        name: "Yuji Itadori Jujutsu Kaisen Banner (Stylized Art)",
        category: "banners",
        price: 499,
        image: "Images/Banner/Jujutsu Kaisen.jpeg",
        description: "Bold anime banner featuring Yuji Itadori in a dark, intense art style. Perfect for wall decor, gaming rooms, or anime setups. Eye-catching and powerful—made for true JJK fans 🔥🖤",
        badge: "LIMITED"
    },
    {
        id: 6,
        name: "Renguko",
        category: "banners",
        price: 499,
        image: "Images/Banner/renguko.jpg",
        description: "Fiery anime banner featuring Rengoku Kyojuro in a bold flame-inspired art style. Perfect for wall decor, gaming rooms, or anime setups. Bright, intense, and full of Flame Hashira energy—made for true Demon Slayer fans 🔥✨",
        badge: "1 available"
    },
    {
        id: 7,
        name: "KeyChain",
        category: "keychain",
        price: 150,
        image: "Images/keychain/CHAINS.jpg",
        description: "Premium glossy acrylic keychains featuring your favorite anime characters in vibrant, detailed designs. Lightweight, durable, and perfect for bags, keys, or anime collections. Cute, stylish, and a must-have for every true anime fan 🔥🖤",
        badge: "Limited stock"
    },
    {
        id: 8,
        name: "⚓ One Piece & AOT Metal Keychains ⚔️",
        category: "keychain",
        price: 180,
        image: "Images/keychain/one piece and AOT.jpg",
        description: "Premium metal keychains featuring iconic symbols from One Piece and Attack on Titan—Luffy’s straw hat, pirate emblem, and the legendary Survey Corps wings. Strong, durable, and stylish with a vintage metallic finish. Perfect for bags, keys, or anime collectors who love subtle but powerful designs 🔥✨",
        badge: "Limited in stock"
    },
    {
        id: 9,
        name: "Tanjiro Charm Keychain",
        category: "keychain",
        price: 380,
        image: "Images/keychain/Tanjiro.jpg",
        description: "Bring your favorite Demon Slayer hero everywhere with this Tanjiro keychain! Crafted with colorful beads, a mini Tanjiro figure, and a cute charm, it’s lightweight, durable, and perfect to hang on your bag, keys, or backpack. A fun collectible for any fan of the series!",
        badge: "1 available"
    },
    {
        id: 10,
        name: "tokyo Ghoul",
        category: "accessories",
        price: 2899,
        image: "Images/Banner/Tokyo goal.jpg",
        description: "Spacious backpack with Dragon Ball Z design. Multiple compartments and padded straps.",
        badge: "1 available"
    },
    {
        id: 11,
        name: "Sword Art Online Poster Set",
        category: "accessories",
        price: 1699,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
        description: "Set of 3 high-quality posters featuring key scenes from Sword Art Online.",
        badge: ""
    },
    {
        id: 12,
        name: "Fullmetal Alchemist Figure - Edward",
        category: "figures",
        price: 4199,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
        description: "Detailed Edward Elric figure with interchangeable parts and accessories.",
        badge: "NEW"
    }
];

// Shopping Cart
let cart = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    setupEventListeners();
    loadCartFromStorage();
    updateCartUI();
});

// Display Products
function displayProducts(productsToDisplay) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    productsToDisplay.forEach((product, index) => {
        const card = createProductCard(product, index);
        grid.appendChild(card);
    });
    
    document.getElementById('resultsCount').textContent = 
        `${productsToDisplay.length} product${productsToDisplay.length !== 1 ? 's' : ''}`;
}

// Create Product Card
function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
        <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/400x400?text=Image+Not+Found'">
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">Nu.${product.price.toFixed(2)}</div>
            <div class="product-actions">
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
                <button class="quick-view-btn" onclick="openProductDetail(${product.id})">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 4C5 4 1 10 1 10s4 6 9 6 9-6 9-6-4-6-9-6z" stroke="currentColor" stroke-width="2"/>
                        <circle cx="10" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartUI();
    openCart();
    
    // Add animation feedback
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 200);
}

// Update Cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style="margin: 0 auto 1rem; opacity: 0.3;">
                    <path d="M10 10H20L30 60H70L80 20H25" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                    <circle cx="35" cy="70" r="5" fill="currentColor"/>
                    <circle cx="65" cy="70" r="5" fill="currentColor"/>
                </svg>
                <p>Your cart is empty</p>
            </div>
        `;
        cartTotal.textContent = 'Nu.0.00';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/80x80?text=No+Image'">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">Nu.${item.price.toFixed(2)}</div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="qty-display">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `Nu.${total.toFixed(2)}`;
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    saveCartToStorage();
    updateCartUI();
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartUI();
}

// Cart Storage
function saveCartToStorage() {
    localStorage.setItem('animemart_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('animemart_cart');
    if (saved) {
        cart = JSON.parse(saved);
    }
}

// Open/Close Cart
function openCart() {
    document.getElementById('cartSidebar').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

// Product Detail Modal
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    const detail = document.getElementById('productDetail');
    
    detail.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-detail-image" onerror="this.src='https://via.placeholder.com/500x500?text=Image+Not+Found'">
        <div class="product-detail-info">
            <div class="product-detail-category">${product.category}</div>
            <h2>${product.name}</h2>
            <div class="product-detail-price">Nu.${product.price.toFixed(2)}</div>
            <p class="product-detail-description">${product.description}</p>
            <div class="product-detail-actions">
                <button class="add-to-cart-btn" onclick="addToCart(${product.id}); closeProductModal();">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
    if (!document.getElementById('cartSidebar').classList.contains('active') &&
        !document.getElementById('checkoutModal').classList.contains('active')) {
        document.getElementById('overlay').classList.remove('active');
    }
}

// Checkout
function openCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const modal = document.getElementById('checkoutModal');
    const summary = document.getElementById('checkoutSummary');
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal; // NO DELIVERY CHARGE
    
    summary.innerHTML = cart.map(item => `
        <div class="summary-item">
            <span>${item.name} × ${item.quantity}</span>
            <span>Nu.${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
    
    document.getElementById('checkoutSubtotal').textContent = `Nu.${subtotal.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `Nu.${total.toFixed(2)}`;
    
    modal.classList.add('active');
    closeCart();
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

// TikTok Order Function
function orderViaTikTok() {
    if (cart.length === 0) {
        alert('Your cart is empty! Please add items before ordering.');
        return;
    }
    
    // Get order details
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal; // NO DELIVERY CHARGE
    
    // Create order message
    let message = "🛒 New Order Request!\n\n";
    message += "📦 Items:\n";
    cart.forEach(item => {
        message += `• ${item.name} x${item.quantity} - Nu.${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\n✨ Total: Nu.${total.toFixed(2)}`;
    message += "\n\nPlease confirm my order! 🙏";
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // YOUR TIKTOK USERNAME
    const tiktokUsername = "otaku_bt1";
    
    // Create TikTok URL
    const tiktokUrl = `https://www.tiktok.com/@${tiktokUsername}`;
    
    // Open TikTok profile in new tab
    window.open(tiktokUrl, '_blank');
    
    // Copy order details to clipboard
    navigator.clipboard.writeText(message).then(() => {
        alert('✅ Order details copied to clipboard!\n\n📱 We\'re opening TikTok now.\n\n📋 Paste the order details in your DM to us!');
    }).catch(() => {
        // Fallback if clipboard doesn't work
        alert(`📱 Opening TikTok!\n\nPlease send us this message:\n\n${message}`);
    });
    
    // Log order for your records
    console.log('TikTok Order:', {
        items: cart,
        total: total,
        message: message
    });
}

// Filtering and Sorting
function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const sortBy = document.getElementById('sortFilter').value;
    
    let filtered = category === 'all' 
        ? [...products] 
        : products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    
    // Sort
    switch(sortBy) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    displayProducts(filtered);
}

// Event Listeners
function setupEventListeners() {
    document.getElementById('cartBtn').addEventListener('click', openCart);
    document.getElementById('closeCart').addEventListener('click', closeCart);
    document.getElementById('continueShopping').addEventListener('click', closeCart);
    document.getElementById('checkoutBtn').addEventListener('click', openCheckout);
    document.getElementById('closeCheckout').addEventListener('click', closeCheckoutModal);
    document.getElementById('closeProduct').addEventListener('click', closeProductModal);
    document.getElementById('categoryFilter').addEventListener('change', filterProducts);
    document.getElementById('sortFilter').addEventListener('change', filterProducts);
    
    // Add TikTok button listener
    document.getElementById('tiktokOrderBtn').addEventListener('click', orderViaTikTok);
    
    document.getElementById('overlay').addEventListener('click', () => {
        closeCart();
        closeCheckoutModal();
        closeProductModal();
    });
}