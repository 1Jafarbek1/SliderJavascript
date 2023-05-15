const image = document.querySelector(".corauselSliders");
const images = document.querySelectorAll(".corauselSlidersItems");
const next = document.querySelector("#rightBtn");
const back = document.querySelector("#leftBtn");

let idx = 0;

function changeImg() {
  if (idx > images.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = images.length - 1;
  }
  image.style.transform = `translateX(${-idx *300}px)`;
}
next.addEventListener("click", () => {
  idx++;
  changeImg();
});

    // 2 knopka

back.addEventListener("click", () => {
  idx--;
  changeImg();
});


// keydown


document.addEventListener('keydown', (e)=>{
  if(e.key == 'd'){
    idx++
    changeImg()
  }else if(e.key == 'a'){
    idx--
    changeImg()
  }
})