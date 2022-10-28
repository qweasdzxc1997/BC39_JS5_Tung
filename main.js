// bai 1
document.getElementById("btnTinhDiem").onclick = function () {
    // đầu vào
      var mon_1 = document.getElementById("mon1").value * 1;
      var mon_2 = document.getElementById("mon2").value * 1;
      var mon_3 = document.getElementById("mon3").value * 1;
      var tongDiem;
      var diemChuan = document.getElementById("dc").value *1;
      var khuVuc = document.getElementById("khuvuc").value;
      var doiTuong = document.getElementById("doituong").value;
      var diemKhuVuc;
      var diemDoiTuong;
  
  
    //xử lý
      if (khuVuc == "A") {
          diemKhuVuc = 2;
      } else if (khuVuc == "B") {
          diemKhuVuc = 1;
      } else if (khuVuc == "C") {
          diemKhuVuc = 0.5;
      } else {
          diemKhuVuc = 0;
      }
  
      if (doiTuong == "dt1") {
          diemDoiTuong = 2.5;
      } else if (doiTuong == "dt2") {
          diemDoiTuong = 1.5;
      } else if (doiTuong == "dt3") {
          diemDoiTuong = 1;
      } else {
          diemDoiTuong = 0;
      }
  
      console.log(diemDoiTuong,diemKhuVuc);
      function checkScore(diemChuan) {
          return (diemChuan > 0);
      }
  //đầu ra
          if (checkScore(mon_1) && checkScore(mon_2) && checkScore(mon_3)) {
              var tongDiem = mon_1 + mon_2 + mon_3 + diemKhuVuc + diemDoiTuong;
              document.getElementById("infoTD").innerHTML = tongDiem >= diemChuan ? "Bạn đã đậu. Tổng điểm: " + tongDiem : "Bạn đã rớt. Tổng điểm: " + tongDiem; 
          }else{
              document.getElementById("infoTD").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
          }
  }


//   bài 2
// bài 2
// -dau vao

const KW_1 = 500;
const KW_2 = 650;
const KW_3 = 850;
const KW_4 = 1100;
const KW_5 = 1300;

var tienkw_1 = 0;
var tienkw_2 = 0;
var tienkw_3 = 0;
var tienkw_4 = 0;
var tongTien = 0;
var tienkw_5 = 0;
var dien = 0;

// xu ly

document.getElementById("btnTinh2").onclick = () => {
  var name = document.getElementById("name").value;
  var kw = parseInt(document.getElementById("kw").value);

  let price;

  if (kw <= 50) price = kw * KW_1;
  if (kw > 50 && kw <= 100) {
    price = (kw - 50) * KW_2 + 50 * KW_1;
  }
  if (kw > 100 && kw <= 200) {
    price = (kw - 100) * KW_3 + 50 * KW_2 + 50 * KW_1;
  }
  if (kw > 200 && kw <= 350) {
    price = (kw - 200) * KW_4 + 100 * KW_3 + 50 * KW_2 + 50 * KW_1;
  }
  if (kw > 350) {
    price = (kw - 350) * KW_5 + 200 * KW_4 + 100 * KW_3 + 50 * KW_2 + 50 * KW_1;
  }

// in ket qua
  var result = "";
  result += "<p>Họ tên: " + name + ", so tien can tra: " + price + " vnd </p>";
  document.getElementById("infotinh2").innerHTML = result;
};
