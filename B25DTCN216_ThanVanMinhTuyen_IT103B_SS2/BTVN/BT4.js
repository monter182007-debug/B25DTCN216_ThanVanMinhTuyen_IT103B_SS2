let nameBook = prompt("Nhập vào tên sách: ");
let userName = prompt("Nhập vào tên người mượn:");
let level_of_love = prompt("Nhập 1 giá trị từ 1 đđến 5: ");

if (level_of_love === "1" || level_of_love === "2") {
  console.log("Sách này bạn có thể cân nhắc mượn lại sau");
} else if (level_of_love === "3") {
  console.log("Sách này khá ổn, có thể mượn");
} else if (level_of_love === "5" || level_of_love === "4") {
  console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
} else {
  console.log("Ko thể đánh giá");
}
