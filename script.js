const products = [
  {
    name: "Product 1",
    price: 1500,
    category: "category1",
    description: "Premium quality product.",
    image: "images/product1.jpg"
  },
  {
    name: "Product 2",
    price: 2000,
    category: "category2",
    description: "Best seller item.",
    image: "images/product2.jpg"
  },
  {
    name: "Product 3",
    price: 1800,
    category: "category3",
    description: "Limited stock available.",
    image: "images/product3.jpg"
  },
  {
    name: "Product 4",
    price: 2200,
    category: "category4",
    description: "Top rated product.",
    image: "images/product4.jpg"
  }
];

const productList = document.getElementById("product-list");

function displayProducts(filteredProducts) {
  productList.innerHTML = "";

  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" loading="lazy">
      <h3>${product.name}</h3>
      <p>৳${product.price}</p>
    `;
    card.onclick = () => openModal(product);
    productList.appendChild(card);
  });
}

function filterCategory(category) {
  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}

displayProducts(products);

/* WhatsApp & Messenger */
document.getElementById("whatsapp-btn").href =
  "https://wa.me/8801XXXXXXXXX";

document.getElementById("messenger-btn").href =
  "https://m.me/YOUR_FACEBOOK_PAGE";
