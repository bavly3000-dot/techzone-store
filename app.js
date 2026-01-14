const whatsappNumber = "201069067445"; // Your WhatsApp number with country code

const products = [
  {
    name: " cr7 shirt man united",
    price: "200 EGP",
    image: "https://via.placeholder.com/200",
  },
  {
    name: "Logitech Gaming Mouse",
    price: "250 EGP",
    image: "https://via.placeholder.com/200",
  },
  {
    name: "Corsair Mechanical Keyboard",
    price: "600 EGP",
    image: "https://via.placeholder.com/200",
  },
  {
    name: "NVIDIA RTX 3060",
    price: "8000 EGP",
    image: "https://via.placeholder.com/200",
  },
];

const container = document.getElementById("products-container");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>Price: ${product.price}</p>
    <a href="https://wa.me/${whatsappNumber}?text=هل%20هذا%20المنتج%20${encodeURIComponent(product.name)}%20موجود%20حاليا؟" target="_blank">Order Now</a>
  `;
  container.appendChild(card);
});
