let isActive = true;
let isActive_02 = "true";
console.log(typeof isActive);
console.log(typeof isActive_02);

let check = 5 == 5;
let check2 = 5 === "5";
let check3 = 5 != 5;
console.log(typeof check);
console.log(check);
console.log(check2);
console.log(check3);

// Cau dieu kien if else

let yearOld = 20;
if (yearOld < 25) {
  console.log("Tôi chưa đủ tuổi đi tù");
} else if (yearOld < 45) {
  console.log("Tôi đủ tuổi lấy vọ");
} else {
  console.log("Tôi thích");
}
// Toán tử 3 ngôi

let city = yearOld > 25 ? "Ha noi" : "Ha nam";
console.log(city);

let point = 9;
let age = 20;

if (point > 9 && age > 18) {
  console.log("Đỗ đại học rồi");
} else {
  console.log("Đã trượt đại học rồi");
}

let day = 10;
switch (day) {
  case 1:
    console.log("Hom nay la ngay1");
    break;
  case 2:
    console.log("Hom nay la ngay 2");
    break;
  default:
    console.log("Hom nay la thu 7");
    break;
}

// Falsy
// null , 0 , "",und, false , NaN
let checked = null;
if (checked) {
  console.log("Trả về khi giá trị là true");
} else {
  console.log("Trả về giá trị là false");
}
