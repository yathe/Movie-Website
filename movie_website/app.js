const arrows = document.querySelectorAll(".arrow");
// selecting all movie-list
const movieLists = document.querySelectorAll(".movie-list");
// iska use katke hum check kar sakte hai ke kitna sara image hai ek container mai
arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
        // iska use katke hum movielist ke under jo transform:translateX hai console mai dekhe sakte hai ki vo haike naahi
      movieLists[i].style.transform = `translateX(${
        //   iska use karke hum size pata kar sakte hai movielist ka aur transition perform kar sakte hai -300 karke left side sab card jayega iss
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
//  if we expand click number will decrease
// 7-(4+0)+(4-2)
  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE
// /iska use kar ke toggle-ballse black screen se white screen kar sakte hai
const ball = document.querySelector(".toggle-ball");
// iska use kar ke sar element ko hum black screen se white screen kar denge
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);
// active class ko target karke hum white screen kar denge
ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
function toggleMobileMenu() {
    const menuList = document.querySelector(".menu-list");
    menuList.classList.toggle("active");
}
