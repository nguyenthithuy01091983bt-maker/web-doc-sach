const books = {
  test: "Đây là sách test đầu tiên.\n\nChúc bạn đọc vui vẻ!",
  sach1: "Đây là nội dung sách số 1.",
  abc: "Sách ABC đang hiển thị tại đây."
};

function openBook() {
  const id = document.getElementById("bookId").value.trim();
  const result = document.getElementById("result");

  if (books[id]) {
    result.innerText = books[id];
  } else {
    result.innerText = "Không tìm thấy sách!";
  }
}
