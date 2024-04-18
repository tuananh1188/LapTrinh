//Khai báo dữ liệu bảng
var bangdulieu = [];

//Cập nhật dữ liệu bảng 
var bangsanpham = document.getElementById("bang");
function nhapdulieu(element){
   var hang = bangsanpham.insertRow();                // Tạo <tr> chèn vào bảng
   hang.insertCell().innerHTML = element.STT;         // Tạo các <td> chèn vào bảng
   hang.insertCell().innerHTML = element.Ten;
   hang.insertCell().innerHTML = element.Gia;
   hang.insertCell().innerHTML = element.NgaySanXuat;
}

function taidulieu(){
    bangdulieu.forEach(nhapdulieu);// Hàm forEach tương đương chạy vòng lặp for qua mảng thực hiện hàm
}

//Kiểm tra nhập trùng dữ liệu
function kiemtratrung(){
    var trungdulieu = false;
    for (var i = 0; i < bangdulieu.length; i++) {
        if (bangdulieu[i].Ten.trim().toLowerCase() === document.getElementById("tensanpham").value.trim().toLowerCase()) {
            trungdulieu = true;
            break;
        }
    }
    return trungdulieu;
}

//Kiểm tra dữ liệu
function kiemtradulieu(){
    var tensanpham = document.getElementById("tensanpham");
    var giasanpham = document.getElementById("giasanpham");
    var ngaysanxuat = document.getElementById("ngaysanxuat");
    var baoloiten = document.getElementById("baoloiten");
    var baoloigia = document.getElementById("baoloigia");
    var baoloingay = document.getElementById("baoloingay");
//Tên sản phẩm không được để trống
    if(tensanpham.value === ""){
        baoloiten.innerHTML = "Tên sản phẩm không được để trống";
    }else if(kiemtratrung()){
        baoloiten.innerHTML = "Sản phẩm đã tồn tại";
    }else{
        baoloiten.innerHTML = "";
    }
//Giá sản phẩm không được để trống 
    if(giasanpham.value === ""){
        baoloigia.innerHTML = "Giá sản phẩm không được để trống";
    }else{
        baoloigia.innerHTML = "";
    }
//Ngày sản xuất không được để trống và không được vượt quá ngày hiện tại
   if(ngaysanxuat.value.trim().length == 0){
      baoloingay.innerHTML = "Ngày không được để trống";
   }else if(Date.parse(ngaysanxuat.value) >= Date.now()){
     baoloingay.innerHTML = "Ngày sản xuất không được lớn hơn ngày hiện tại";
   }else{
    baoloingay.innerHTML = "";
   }
   
   if(baoloiten.innerHTML == "" && baoloigia.innerHTML == "" && baoloingay.innerHTML == ""){
    themdulieu();
   }
}

// Thêm dữ liệu
function themdulieu(){
    var dulieuthem = {
            STT: bangdulieu.length + 1,
            Ten: tensanpham.value,
            Gia: giasanpham.value,
            NgaySanXuat: ngaysanxuat.value
        }
    ;
    bangdulieu.push(dulieuthem);
    nhapdulieu(dulieuthem);
    huydulieu();
}

// Huỷ dữ liệu
function huydulieu(){
    tensanpham.value = "";
    giasanpham.value = "";
    ngaysanxuat.value = "";
    baoloiten.innerHTML = "";
    baoloigia.innerHTML = "";
    baoloingay.innerHTML = "";
}





