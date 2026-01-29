// 1. NHẬP DỮ LIỆU (INPUT)
let nameBook = prompt("Nhập tên sách: ");
let nameBorrower = prompt("Nhập tên người mượn: ");
let statusBook = prompt(
  "Nhập tình trạng sách (có sẵn / đã mượn / không có sẵn): ",
);
let daysBorrowed = prompt("Nhập số ngày mượn: ");
let hasLibraryCard = prompt(
  "Bạn có thẻ thư viện không? (nhập true hoặc false): ",
);

// 2. CHUẨN HÓA DỮ LIỆU (PROCESSING)
let statusBookNew = statusBook.toLowerCase();
let daysBorrowedNew = Number(daysBorrowed);
let hasLibraryCardCheck = hasLibraryCard === "true";

// 3. XỬ LÝ LOGIC (LOGIC)
if (statusBookNew === "có sẵn" && hasLibraryCardCheck === true) {
  console.log(`Chúc mừng, bạn có thể mượn sách "${nameBook}".`);
} else if (statusBookNew === "đã mượn" && daysBorrowedNew < 30) {
  if (hasLibraryCardCheck === true) {
    console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại.");
  } else {
    console.log("Bạn không thể mượn sách nếu không có thẻ thư viện.");
  }
} else if (statusBookNew === "không có sẵn") {
  console.log(
    "Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau.",
  );
} else {
  console.log("Thông tin không hợp lệ, vui lòng nhập lại.");
}
