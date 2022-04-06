//Bài 1
let arrFood = [];

class Food {
  constructor(maMonAn, tenMonAn, giaTien, linkAnh) {
    this.maMonAn = maMonAn;
    this.tenMonAn = tenMonAn;
    this.giaTien = giaTien;
    this.linkAnh = linkAnh;
  }
}

document.querySelector("#btnXacNhan").onclick = function () {
  let doAn = new Food(
    document.querySelector("#maMonAn").value,
    document.querySelector("#tenMonAn").value,
    document.querySelector("#giaTien").value,
    document.querySelector("#linkAnh").value
  );
  arrFood.push(doAn);
  console.log("Đồ ăn", arrFood);
  localStorage.setItem("Đồ ăn", JSON.stringify(arrFood));
  renderTable(arrFood);
};

function xoaMonAn(maMAClick) {
  for (var index = arrFood.length - 1; index >= 0; index--) {
    var mon_an = arrFood[index];
    if (mon_an.maMonAn === maMAClick) {
      arrFood.splice(index, 1);
    }
  }
  localStorage.setItem("Đồ ăn", JSON.stringify(arrFood));
  renderTable(arrFood);
}

function renderTable(arrFood) {
  let sHTML = "";
  for (let index = 0; index < arrFood.length; index++) {
    let monAn = arrFood[index];
    sHTML += `
              <tr>
                  <td>${monAn.maMonAn}</td>
                  <td>${monAn.tenMonAn}</td>
                  <td>${monAn.giaTien}</td>
                  <td>${monAn.linkAnh}</td>
                  <td>
                    <button class="btn btn-danger" onclick="xoaMonAn('${monAn.maMonAn}')">Xóa</button>
                </td>
              </tr>
              `;
  }
  document.querySelector(".tblDanhMucMonAn").innerHTML = sHTML;
}

renderTable(JSON.parse(localStorage.getItem("Đồ ăn")));

//Bài 2
var arrMonAn = [
  {maMonAn:1,tenMonAn:'Nước lẩu haidilao',giaTien:100},
  {maMonAn:2,tenMonAn:'Mì cay thành đô',giaTien:200},
  {maMonAn:3,tenMonAn:'Mực bạch ngọc',giaTien:300},
]

class MonAn {
  constructor(maDoAn, tenDoAn, soLuong, thanhTien) {
    this.maDoAn = maDoAn;
    this.tenDoAn = tenDoAn;
    this.soLuong = soLuong;
    this.thanhTien = thanhTien;
  }
}

document.querySelectorAll("#plus").onclick = function () {
  let thucAn = new MonAn(
    document.querySelector("#mon1").value,
    document.querySelector("#mon2").value,
    document.querySelector("#mon3").value
  )
  console.log("Thực đơn: ", arrMonAn);
}