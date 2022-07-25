/**
 * 2 công việc chính :
 *          - lấy value từ ô input khi nhấn nút hiển thị thông tin
 *          - hiển thị thông tin ra các ô phù hợp
 */

// 8
var renderInfo = function(tenSV, maSV, loaiSV, dtb, xepLoai) {
    document.getElementById("spanTenSV").innerHTML = tenSV;
    document.getElementById("spanMaSV").innerHTML = maSV;
    document.getElementById("spanLoaiSV").innerHTML = loaiSV;
    document.getElementById("spanDTB").innerHTML = dtb;
    document.getElementById("spanXL").innerHTML = xepLoai;
    
    }

// 5
var tinhDtb = function (toan, van) {
  var dtb = (toan + van) / 2;

  return dtb;
};
//7
var sapXepLoaiSV = function (diemTrungBinh) {
  if (diemTrungBinh >= 5 && diemTrungBinh <= 10) {
    return "Bạn Đã Qua Môn !";
  } else {
    return "Vui lòng đóng tiền học lại !!!";
  }
};

var handleShowInfo = function () {
  var maSV = document.getElementById("maSV").value;
  var tenSV = document.getElementById("tenSV").value;
  var loaiSV = document.getElementById("loaiSV").value;
  var toan = +document.getElementById("toan").value;
  var van = +document.getElementById("van").value;
  console.log(maSV, tenSV, loaiSV, toan, van); //1

  var diemTB = tinhDtb(toan, van); //4

  var xepLoaiSV = sapXepLoaiSV(diemTB); // 6
  //    hàm gọi show lên màn hình
  //    không có dtb và xếp loại thì phải tính rồi mới truyền vô
  //    và tác vụ mới thì phải viết hàm khác đừng viết chung 1
  renderInfo(tenSV, maSV, loaiSV, diemTB, xepLoaiSV); // 3
};

document.getElementById("btnHT").onclick = handleShowInfo; // 2
