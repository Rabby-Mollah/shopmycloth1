const products = [
  {
    name: "Product 1",
    price: 15,
    description: "High quality product 1.",
    image: "https://picsum.photos/300?1"
  },
  {
    name: "Product 2",
    price: 25,
    description: "High quality product 2.",
    image: "https://picsum.photos/300?2"
  },
  {
    name: "Product 3",
    price: 30,
    description: "High quality product 3.",
    image: "https://picsum.photos/300?3"
  },
  {
    name: "Product 4",
    price: 18,
    description: "High quality product 4.",
    image: "https://picsum.photos/300?4"
  },
  {
    name: "Product 5",
    price: 40,
    description: "High quality product 5.",
    image: "https://picsum.photos/300?5"
  },
  {
    name: "Product 6",
    price: 22,
    description: "High quality product 6.",
    image: "https://picsum.photos/300?6"
  },
  {
    name: "Product 7",
    price: 35,
    description: "High quality product 7.",
    image: "https://picsum.photos/300?7"
  },
  {
    name: "Product 8",
    price: 50,
    description: "High quality product 8.",
    image: "https://picsum.photos/300?8"
  }
];

const productList = document.getElementById("product-list");
const modal = document.getElementById("product-modal");
const closeBtn = document.getElementById("close-btn");

const modalImage = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");
const modalPrice = document.getElementById("modal-price");
const modalDescription = document.getElementById("modal-description");
const buyNowBtn = document.getElementById("buy-now");

let selectedProduct = null;

products.forEach((product, index) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
  `;
  card.onclick = () => openModal(product);
  productList.appendChild(card);
});

function openModal(product) {
  selectedProduct = product;
  modalImage.src = product.image;
  modalName.innerText = product.name;
  modalPrice.innerText = "$" + product.price;
  modalDescription.innerText = product.description;
  modal.classList.remove("hidden");
}

closeBtn.onclick = () => {
  modal.classList.add("hidden");
};

buyNowBtn.onclick = () => {
  const phone = "01972854293"; 
  const message = `Hello, I want to buy ${selectedProduct.name} for $${selectedProduct.price}`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
