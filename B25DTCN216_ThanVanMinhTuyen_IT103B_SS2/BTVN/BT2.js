let quantityBook = +prompt("Nhập số lượng sách: ");
let greetMSG = "";
if (quantityBook < 10) {
  greetMSG = "Thư viện có ít sách";
} else if (quantityBook <= 20) {
  greetMSG = "Thư viện có số lượng sách vừa đủ";
} else {
  greetMSG = "Thư viện có nhiều sách";
}
console.log(greetMSG);
