let nameBook = prompt("Nhập tên sách: ");
let generdBook = prompt(
  "Nhập thể loại sách (Khoa học, Lịch sử, Văn học, Truyện): ",
);
let conditionBook = prompt("Nhập tình trạng sách (true/false): ");

let generdBookNew = generdBook.toLowerCase();

if (generdBookNew === "khoa học" || generdBookNew === "lịch sử") {
  if (conditionBook === "true") {
    console.log(
      `Sách: ${nameBook} - Thể loại: ${generdBookNew} -> Sách này có sẵn trong thư viện`,
    );
  } else {
    console.log(
      `Sách: ${nameBook} - Thể loại: ${generdBookNew} -> Sách đã được mượn`,
    );
  }
} else if (generdBookNew === "văn học" || generdBookNew === "truyện") {
  console.log(`Sách ${nameBook} có thể đọc giải trí`);
} else {
  console.log("Thể loại sách không hợp lệ");
}
