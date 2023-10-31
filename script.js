window.addEventListener('load', function() {
    alert('Бажаємо приємних покупок ;) p.s ExpressParts4PC');
  });

function zoomIn(element) {
  element.querySelector('img').style.transform = 'scale(1.1)';
}

function zoomOut(element) {
  element.querySelector('img').style.transform = 'scale(1)';
}

var cart = [];

function addToCart(product) {
    cart.push(product);
    updateCart();
}

function updateCart() {
    var cartList = document.getElementById("cart-list");
    var total = 0;

    cartList.innerHTML = ""; 

    cart.forEach(function (product) {
        var listItem = document.createElement("li");
        listItem.textContent = product.name + " - " + product.price + "$";
        cartList.appendChild(listItem);
        total += product.price;
    });
    var totalElement = document.getElementById("total");
    totalElement.textContent = "Загальна сума: " + total + "$";
}

var cartIcon = document.getElementById("cart-icon");

var cartList = document.getElementById("cart-list");

var isCartVisible = false;

cartIcon.addEventListener("click", function () {
    if (isCartVisible) {
        cartList.style.display = "none";
    } else {
        cartList.style.display = "block";
    }
    isCartVisible = !isCartVisible;
});

var clearCartButton = document.getElementById("clear-cart");
clearCartButton.addEventListener("click", function () {
    cart = [];
    updateCart();
});

document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: "SSD Seagate", price: 220 },
        { name: "Intel Core i5-12500k", price: 277 },
        { name: "Ігрова мишка Razer", price: 77 },
        { name: "Монітор Asus Tuf Gaming 144hz", price: 219 },
        { name: "Patch-Cord", price: 27 },
        { name: "Оперативка DDR5", price: 101 }
    ];

    const searchInput = document.getElementById("searchInput");
    const productContainers = document.querySelectorAll(".info");

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();

        productContainers.forEach(container => {
            const productName = container.querySelector("h3").textContent.toLowerCase();
            const productIcon = container.previousElementSibling;
            
            if (productName.includes(searchTerm)) {
                container.style.display = "block";
                productIcon.style.display = "block";
            } else {
                container.style.display = "none";
                productIcon.style.display = "none";
            }
        });
    });
});

