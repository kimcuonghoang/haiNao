const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const wrapper = document.querySelector(".button-wrapper");

function moveNoButton() {
  const wrapperRect = wrapper.getBoundingClientRect();
  const maxX = wrapper.clientWidth - noBtn.offsetWidth;
  const maxY = wrapper.clientHeight - noBtn.offsetHeight;

  const randX = Math.random() * maxX;
  const randY = Math.random() * maxY;

  noBtn.style.left = `${randX}px`;
  noBtn.style.top = `${randY}px`;
}

noBtn.addEventListener("mouseover", moveNoButton); // desktop
noBtn.addEventListener("touchstart", moveNoButton); // mobile

yesBtn.addEventListener("click", () => {
  alert("Yêu em💘");
});
