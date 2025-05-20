document.getElementById("askButton").addEventListener("click", function () {
  // Hiển thị câu trả lời
  const answerDiv = document.getElementById("answer");
  answerDiv.style.display = "block";

  // Tiếp tục tạo trái tim bay lên mỗi giây
  setInterval(() => {
    createHeart(document.getElementById("hearts"));
  }, 500); // Tạo trái tim mới mỗi 500ms (nửa giây)
});

function createHeart(parentElement) {
  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.textContent = "❤️";

  // Vị trí ngẫu nhiên cho mỗi trái tim
  heart.style.left = Math.random() * 100 + "%";

  parentElement.appendChild(heart);

  // Xóa trái tim sau khi hiệu ứng hoàn tất
  setTimeout(() => {
    heart.remove();
  }, 2000); // Trái tim biến mất sau 2 giây
}
