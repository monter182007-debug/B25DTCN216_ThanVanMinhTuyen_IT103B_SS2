// Khai bao bien
let nameBook = prompt("Nhập tên sách: ");
let statusBook = prompt("Nhập trạng thái sách (đã mượn / có săn): ");
let yearPubication = prompt("Nhập vào năm xuất bản:");

// Tao bien
const yearNow = 2026;
let statusBookNew = statusBook.toLowerCase();
let bookAge = yearNow - +yearPubication;

// Dieeu kien
if (statusBookNew === "có sẵn" && bookAge <= 5) {
  console.log(`Sách "${nameBook}" mới và có sẵn để mượn.`);
} else if (statusBookNew === "đã mượn" && bookAge <= 10) {
  console.log(`Sách "${nameBook}" đã mượn nhưng khá mới, có thể mượn lại sau.`);
} else if (statusBookNew === "đã mượn" && bookAge > 10) {
  console.log(`Sách "${nameBook}" đã mượn và khá cũ.`);
} else if (statusBookNew === "có sẵn" && bookAge > 5) {
  console.log(`Sách "${nameBook}" có sẵn nhưng đã lâu năm.`);
} else {
  console.log("Thông tin trạng thái hoặc năm không hợp lệ.");
}
