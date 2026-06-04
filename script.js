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

// mobile
@media(max-width:768px){

/* HEADER */
.header{
  flex-direction:column;
  gap:10px;
}

.search{
  width:100%;
}

/* MENU */
.menu{
  display:flex;
  overflow-x:auto;
  white-space:nowrap;
}

.menu a{
  margin:0 10px;
  font-size:14px;
}

/* BANNER */
.banner{
  padding:30px 15px;
}

.banner h1{
  font-size:22px;
}

/* PRODUCTS */
.products{
  grid-template-columns:repeat(2,1fr);
  gap:10px;
  padding:10px;
}

.product img{
  height:140px;
}

/* BUTTON */
.product button{
  font-size:13px;
  padding:6px;
}

}

const slides = [
  "https://via.placeholder.com/1200x400?text=INOX+CAO+CAP",
  "https://via.placeholder.com/1200x400?text=GIA+CONG+THEO+YEU+CAU",
  "https://via.placeholder.com/1200x400?text=BAO+GIA+NHANH"
];

let current = 0;

setInterval(()=>{
  current++;
  if(current >= slides.length) current = 0;
  document.getElementById("slide-img").src = slides[current];
},3000);

function callNow(){
  window.location.href = "tel:0967721996";
}

<button onclick="callNow()">Liên hệ</button>

function startCountdown(duration){
  let timer = duration;

  setInterval(()=>{
    let hours = Math.floor(timer / 3600);
    let minutes = Math.floor((timer % 3600) / 60);
    let seconds = timer % 60;

    document.getElementById("countdown").innerHTML =
      `${hours} : ${minutes} : ${seconds}`;

    timer--;

    if(timer < 0){
      timer = duration;
    }
  },1000);
}

startCountdown(3 * 60 * 60); // 3 tiếng
