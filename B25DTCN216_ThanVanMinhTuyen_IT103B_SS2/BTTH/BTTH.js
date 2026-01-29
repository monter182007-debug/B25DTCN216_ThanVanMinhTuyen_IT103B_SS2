let userName = prompt("Tên người dùng");
let role = prompt("Vai trò (admin, student, guest): ");
let accountCard = prompt("Số dư tài khoản thẻ: ");
let statusLibaray = prompt("Trạng thái thẻ thư viện (true/false): ");
let dayOverdue = prompt("Số ngày quá hạn trả sách:");

let roleNew = role.toLowerCase();
let accountCardNew = Number(accountCard);

let statusLibarayNew = statusLibaray === "true";
let dayOverdueNew = Number(dayOverdue);

let money = 0;
let borrowResult = "";
let greetingMsg = ""; // Biến lưu câu chào
let overdueMsg = ""; // Biến lưu tình trạng trả sách

// 1. Kiểm tra quyền truy cập & Lưu câu chào
switch (roleNew) {
  case "admin":
    greetingMsg = "Chào Admin, bạn có toàn quyền hệ thống";
    break;
  case "student":
    greetingMsg = "Chào sinh viên, bạn có thể mượn sách";
    break;
  case "guest":
    greetingMsg = "Chào khách, bạn chỉ có thể đọc tại chỗ";
    break;
  default:
    greetingMsg = "Lỗi: Vai trò không hợp lệ!";
    break;
}

// 2. Kiểm tra điều kiện mượn sách (Đã sửa logic &&)

if (
  userName &&
  (roleNew === "student" || roleNew === "admin") &&
  accountCardNew > 0 &&
  statusLibarayNew
) {
  borrowResult = "ĐƯỢC PHÉP MƯỢN SÁCH";
} else {
  borrowResult = "Yêu cầu bị từ chối";
}

// 3. Tính phí phạt
if (dayOverdueNew <= 0) {
  overdueMsg = "Cảm ơn bạn đã trả đúng hạn";
  money = 0;
} else {
  overdueMsg = `Quá hạn ${dayOverdueNew} ngày`; // Format theo mẫu ảnh
  if (dayOverdueNew <= 5) {
    money = dayOverdueNew * 5000;
  } else if (dayOverdueNew <= 10) {
    money = dayOverdueNew * 10000;
  } else {
    money = 200000;
    console.log("CẢNH BÁO: TÀI KHOẢN BỊ KHÓA");
  }
}

// 4. In kết quả cuối cùng (Đã điền đủ biến)
console.log(`
    --- HỆ THỐNG MƯỢN TRẢ ---
    Người dùng: ${userName}
    Quyền hạn: ${greetingMsg} 
    Kết quả mượn: ${borrowResult}
    Tình trạng trả sách: ${overdueMsg}
    Tiền phạt: ${money} VNĐ
`);
