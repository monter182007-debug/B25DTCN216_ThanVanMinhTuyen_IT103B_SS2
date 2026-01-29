let nameBook = prompt("Nhập tên cuốn sách: ");
let author = prompt("Nhập tên tác giả:");
let yearOldBook = prompt(" Nhập năm suất bản sách:");
let yearOldBookNew = Number(yearOldBook);
const yearNow = 2026;
if (yearOldBookNew === yearNow) {
  console.log("Đây là sách mơi");
} else if (yearOldBookNew >= 2021 && yearOldBookNew < 2026) {
  console.log("Sách khá mới");
} else {
  console.log("Sách đã cũ");
}
