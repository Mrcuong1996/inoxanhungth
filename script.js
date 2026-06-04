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

const slides = [
  "https://via.placeholder.com/1200x400?text=INOX+CAO+CAP",
  "https://via.placeholder.com/1200x400?text=GIA+CONG+THEO+YEU+CAU",
  "https://via.placeholder.com/1200x400?text=BAO+GIA+NHANH"
];

let current = 0;

function startCountdown(duration){
  let timer = duration;

  setInterval(function(){

    let h = Math.floor(timer / 3600);
    let m = Math.floor((timer % 3600) / 60);
    let s = timer % 60;

    // format 2 số
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    const el = document.getElementById("countdown");

    if(el){
      el.innerHTML = `${h} : ${m} : ${s}`;
    }

    timer--;

    if(timer < 0){
      timer = duration;
    }

  },1000);
}

// chạy sau khi load
window.onload = function(){
  startCountdown(2 * 60 * 60); // 2 tiếng
};
