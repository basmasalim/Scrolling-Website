// ? =============> Global ===============>
let stars = document.getElementById("stars"),
  moon = document.getElementById("moon"),
  mountains3 = document.getElementById("mountains3"),
  mountains4 = document.getElementById("mountains4"),
  river = document.getElementById("river5"),
  boat = document.getElementById("boat6"),
  mountains7 = document.getElementById("mountains7"),
  nouvil = document.querySelector(".nouvil");

// * =============> Events ===============>
window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 3 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat.style.top = value + "px";
  boat.style.left = value * 3 + "px";
  nouvil.style.fontSize = value * 0.5 + "px";
  if (scrollY >= 127) {
    document.querySelector('.main').style.background = 'linear-gradient(to top,#376281, #10001f)'
  }else{
    document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)'
  }


};
// & =============> Function ===============>
