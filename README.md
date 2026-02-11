# AnimeMart - Your Anime E-Commerce Website for Bhutan

A complete, beginner-friendly e-commerce website for your local anime business in Bhutan! This website features a modern design with shopping cart, checkout, and product filtering - similar to Shein and Amazon.

## 🎨 What's Included

- **Product Grid Display** - Beautiful product cards with images, prices in Nu., and "Add to Cart" buttons
- **Shopping Cart** - Sliding sidebar cart with quantity controls
- **Product Filtering** - Filter by category and sort by price/name
- **Checkout System** - Complete checkout form with Bhutanese payment options
- **Product Details** - Quick view modal for product details
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Local Storage** - Cart persists even after page refresh

## 📁 Files You Need

1. **index.html** - Main website structure
2. **styles.css** - All the styling and animations
3. **script.js** - All the functionality (cart, checkout, filtering)
4. **README.md** - This guide (you're reading it!)

## 🚀 How to Use

### Step 1: Create Your Project Folder
1. Create a new folder on your Desktop called "anime-website"
2. Open VS Code
3. Go to **File → Open Folder** and select your "anime-website" folder

### Step 2: Create the Files
1. In VS Code, look at the left sidebar (Explorer)
2. Click the "New File" icon 3 times to create:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Copy the code I provided into each file
4. Press **Ctrl+S** (Windows) or **Cmd+S** (Mac) to save each file

### Step 3: Open Your Website
- Right-click on `index.html` and select "Open with Live Server" (if you have the extension)
- OR just double-click `index.html` to open it in your browser

## 🛍️ Customizing Your Products

### Add Your Own Products

Open `script.js` and find the `products` array (around line 2). Each product looks like this:
```javascript
{
    id: 1,                    // Keep unique for each product
    name: "Product Name",     // Your product name
    category: "figures",      // Options: figures, manga, apparel, accessories
    price: 3799,             // Price in Ngultrum (Nu.)
    image: "image-url.jpg",   // Path to your image
    description: "Product description here",
    badge: "NEW"             // Options: NEW, HOT, BUNDLE, or leave as ""
}
```

### Adding Your Product Images

**Option 1: Use Local Images (Recommended)**
1. Create a folder called `images` in your "anime-website" folder
2. Put your product photos there
3. Update image path like: `"images/naruto-figure.jpg"`

**Option 2: Use Online Image URLs**
- Upload images to Google Drive, Imgur, or any image hosting
- Copy the direct image URL
- Paste it in the `image` field

### Sample Product Entry:
```javascript
{
    id: 13,
    name: "Naruto Shippuden Poster",
    category: "accessories",
    price: 450,
    image: "images/naruto-poster.jpg",
    description: "High-quality Naruto Shippuden poster, perfect for your room.",
    badge: "NEW"
}
```

## 🎨 Customize Colors & Branding

### Change Store Name

In `index.html`, find this line (around line 19):
```html
<h1>ANIMEMART</h1>
```
Change "ANIMEMART" to your store name.

### Change Colors

In `styles.css`, at the very top, change these colors:
```css
:root {
    --primary: #FF1744;        /* Main red color - buttons, highlights */
    --secondary: #2962FF;      /* Blue accent color */
    --accent: #FFD600;         /* Yellow accent */
    --bg-primary: #0A0E27;     /* Dark background */
    --bg-secondary: #1A1F3A;   /* Lighter dark background */
}
```

Pick your own colors from [Coolors.co](https://coolors.co) or [Color Hunt](https://colorhunt.co)

## 💰 Pricing Guide (Bhutan)

The sample products are priced in Ngultrum. Here's a rough guide:
- Small accessories: Nu.400 - Nu.1,500
- T-shirts/Apparel: Nu.2,000 - Nu.3,500
- Manga volumes: Nu.800 - Nu.1,200 per volume
- Figures: Nu.3,000 - Nu.6,000
- Premium items: Nu.6,000+

Adjust based on your costs and market!

## 📦 How Orders Work Right Now

**Current Setup:**
When someone places an order, it shows an alert message and saves order details to the browser console (Press F12 in browser → Console tab to see).

**To Actually Receive Orders, You Need To:**

### Option 1: WhatsApp Integration (Best for Starting)
Add WhatsApp button that sends order details directly to your number. Very popular in Bhutan!

### Option 2: Email Notifications
Use a service like:
- **EmailJS** (free, easy setup)
- **FormSubmit** (free)
- **Google Sheets + Apps Script** (track orders in spreadsheet)

### Option 3: When You Grow - Full Backend
- Use payment gateways like PayPal, Stripe
- Set up database (MySQL, MongoDB)
- Build backend with Node.js or PHP

## 🏦 Payment Methods (Bhutan)

The checkout form includes:
- **MBoB Mobile Banking** (Bank of Bhutan)
- **BNB Mobile Banking** (Bhutan National Bank)
- **DPNB Mobile Banking** (Druk PNB Bank)
- **Other Online Payment**

For now, these are just options customers select. You'll need to:
1. Provide your mobile banking number
2. Or integrate with payment gateway when available
3. Start with "Cash on Delivery" or "Pay After Confirmation"

## 🚚 Delivery Settings

Current delivery fee: **Nu.50.00**

To change it:
1. Open `index.html` → Line 184: Change the delivery amount
2. Open `script.js` → Line 323: Change `const delivery = 50.00;`

## 📱 Testing Your Website

1. **Desktop:** Open in Chrome, Firefox, or Edge
2. **Mobile:** Right-click in browser → Inspect → Click phone icon (responsive mode)
3. **Test Everything:**
   - Add products to cart
   - Change quantities
   - Remove items
   - Fill checkout form
   - Submit order (check browser console)

## 🌐 Next Steps: Going Live

### Free Hosting Options:
1. **GitHub Pages** (Free, reliable)
2. **Netlify** (Free, very easy)
3. **Vercel** (Free, fast)

### Paid Hosting (When You Grow):
- Hostinger
- Bluehost
- SiteGround

### Get a Domain:
- yourstore.bt (Bhutan domain)
- yourstore.com (international)

## 🎯 Adding More Features

### Add More Product Categories:
1. In `script.js`, add products with new category name
2. In `index.html`, add new option in category filter dropdown

Example:
```html
<option value="posters">Posters</option>
```

### Change Delivery Fee by Location:
Later, you can add different delivery fees for Thimphu, Paro, Phuentsholing, etc.

### Add Product Search:
The search icon is there for design. You can add search functionality by filtering products based on user input.

## 📞 Common Questions

**Q: How do I get my products to show up?**
A: Edit the `products` array in `script.js` with your actual products, prices, and images.

**Q: Can I accept online payments right now?**
A: Not directly. You'll need to integrate a payment gateway. Start with manual confirmation via WhatsApp/call first.

**Q: What if I don't have product images?**
A: Take photos with your phone! Make sure they're clear, well-lit, and show the product clearly.

**Q: How do I know when someone orders?**
A: Right now, it only shows in browser console. You MUST add email/WhatsApp integration to receive real orders.

**Q: Can I sell outside Bhutan?**
A: Yes! Just add international shipping options and adjust delivery fees.

**Q: Do I need to register a business?**
A: Check with Bhutan's Department of Trade. Usually required for formal business operations.

## 💡 Tips for Success in Bhutan

1. **Start Small:** Test with 10-20 products first
2. **Use Social Media:** Share on Facebook, Instagram, WeChat
3. **Local Delivery:** Offer hand delivery in Thimphu to save costs
4. **WhatsApp Orders:** Many Bhutanese prefer WhatsApp - add a WhatsApp button!
5. **Quality Photos:** Good photos = more sales
6. **Clear Prices:** Always include Nu. and be transparent about delivery
7. **Fast Response:** Reply to customer messages quickly
8. **Build Trust:** Start with friends/family, get reviews

## 🎌 Design Philosophy

This website was designed to be:
- **Bold & Vibrant** - Eye-catching anime aesthetic
- **Easy to Navigate** - Clear categories and simple checkout
- **Mobile-Friendly** - Most Bhutanese shop on phones
- **Fast Loading** - Works even on slower connections

## 📚 Learning Resources

Want to improve your website? Learn:
- **HTML/CSS Basics:** FreeCodeCamp, W3Schools
- **JavaScript:** JavaScript.info, MDN Web Docs
- **Web Hosting:** YouTube tutorials for GitHub Pages

## 🆘 Need Help?

Remember: Every big business started small!

**Building Stages:**
1. ✅ **Week 1:** Get website working with your products
2. ✅ **Week 2:** Add WhatsApp/Email for orders
3. ✅ **Week 3:** Test with friends and family
4. ✅ **Month 2:** Go live and promote on social media
5. ✅ **Month 3+:** Add payment gateway and expand

## 🇧🇹 Good Luck with Your Anime Business in Bhutan!

Remember:
- Start simple
- Test everything
- Listen to customers
- Keep improving

You've got this! 💪

---

**Made for aspiring entrepreneurs in Bhutan 🇧🇹**
**Tashi Delek and Happy Selling! 🎌**