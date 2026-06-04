const products = [
  {
    name: "Tủ inox âm tường",
    price: "2.500.000đ",
    img: "https://via.placeholder.com/300"
  },
  {
    name: "Nắp bể inox 304",
    price: "1.200.000đ",
    img: "https://via.placeholder.com/300"
  },
  {
    name: "Bể nước ngầm inox",
    price: "5.000.000đ",
    img: "https://via.placeholder.com/300"
  },
  {
    name: "Gia công theo yêu cầu",
    price: "Liên hệ",
    img: "https://via.placeholder.com/300"
  }
];

const container = document.getElementById("product-list");
const searchInput = document.querySelector(".search");

// render sản phẩm
function render(list){
  container.innerHTML = list.map(p => `
    <div class="product">
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p class="price">${p.price}</p>
      <button>Liên hệ</button>
    </div>
  `).join("");
}

// tìm kiếm
searchInput.addEventListener("input", function(){
  const keyword = this.value.toLowerCase();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword)
  );

  render(filtered);
});

// load ban đầu
render(products);
