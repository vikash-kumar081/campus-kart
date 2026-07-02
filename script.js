// SEARCH FUNCTION
// =========================
console.log("JS Loaded");
const searchInput = document.querySelector(".search-box input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {

        const title = card.querySelector("h3")
        .textContent
        .toLowerCase();

        card.style.display =
        title.includes(value) ? "block" : "none";

    });

});

// =========================
// WISHLIST
// =========================

const wishlistBtns =
document.querySelectorAll(".wishlist");

wishlistBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.classList.toggle("active");

        btn.innerHTML =
        btn.classList.contains("active")
        ? "💚"
        : "🤍";

    });

});

// =========================
// CART SYSTEM
// =========================

let cartCount = 0;

const cartCounter =
document.querySelector(".cart-count");

const addedProducts = new Set();

document
.getElementById("addToCartBtn")
.addEventListener("click", () => {

    const productName =
    document.getElementById("modalTitle").textContent;

    if(addedProducts.has(productName)){
        alert("Already Added To Cart");
        return;
    }

    addedProducts.add(productName);

    cartCount++;

    cartCounter.textContent = cartCount;
    const item = document.createElement("div");

item.classList.add("cart-item");

item.innerHTML = `
<h4>${productName}</h4>
<p class="item-price">${modalPrice.textContent}</p>

<button class="remove-item">
    ❌ Remove
</button>
`;

cartItems.appendChild(item);
item
.querySelector(".remove-item")
.addEventListener("click", () => {

    item.remove();

    cartCount--;
    cartCounter.textContent = cartCount;

     const price =
parseInt(
item.querySelector(".item-price")
.textContent.replace("₹","")
);

    total -= price;

    totalPrice.textContent = total;

    addedProducts.delete(productName);

});
const price =
parseInt(modalPrice.textContent.replace("₹",""));

total += price;

totalPrice.textContent = total;
    alert("🛒 Product Added To Cart");

});
const modal = document.getElementById("productModal");
const closeBtn = document.querySelector(".close-btn");

const modalTitle =
document.getElementById("modalTitle");

const modalPrice =
document.getElementById("modalPrice");

const modalImage =
document.getElementById("modalImage");

const detailBtns =
document.querySelectorAll(".details-btn");

detailBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        const card = btn.parentElement;

        modalTitle.textContent =
        card.querySelector("h3").textContent;

        modalPrice.textContent =
        card.querySelector(".price").textContent;

        modalImage.src =
        card.querySelector("img").src;

        modal.style.display = "flex";

    });

});

closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});
const cartLink =
document.querySelector(".cart-link");

const cartSidebar =
document.querySelector(".cart-sidebar");

const closeCart =
document.querySelector(".close-cart");

const cartItems =
document.querySelector(".cart-items");

const totalPrice =
document.getElementById("totalPrice");

let total = 0;

cartLink.addEventListener("click",(e)=>{

    e.preventDefault();

    cartSidebar.classList.add("active");

});

closeCart.addEventListener("click",()=>{

    cartSidebar.classList.remove("active");

});
const buyBtn =
document.querySelector(".buy-btn");

buyBtn.addEventListener("click", () => {

    alert(
        "✅ Thank you for shopping on CampusKart!"
    );

});