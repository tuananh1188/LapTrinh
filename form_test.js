//Khai báo dữ liệu bảng
var bangdulieu = [
    { STT: 1,
      Ten: "iphone15",
      SL: "1",
      Gia: "35678945",
      NSX: "2023-02-23",
      MS: "Đỏ",
      TN: "GPS",
      TĐ: `<button onclick='suadulieu()'>Sửa</button> <button onclick='xoadulieu()'>Xoá</button>`
    },
    { STT: 2,
        Ten: "iphone16",
        SL: "2",
        Gia: "36678945",
        NSX: "2023-02-29",
        MS: "trắng",
        TN: "WIFI6",
        TĐ: `<button onclick='suadulieu()'>Sửa</button> <button onclick='xoadulieu()'>Xoá</button>`
      },
];

//Cập nhật dữ liệu bảng 
var bangsanpham = document.getElementById("bang");
function nhapdulieu(element){
   var hang = bangsanpham.insertRow();
   hang.insertCell().innerHTML = element.STT;
   hang.insertCell().innerHTML = element.Ten;
   hang.insertCell().innerHTML = element.SL;
   hang.insertCell().innerHTML = element.Gia;
   hang.insertCell().innerHTML = element.NSX;
   hang.insertCell().innerHTML = element.MS;
   hang.insertCell().innerHTML = element.TN;
   hang.insertCell().innerHTML = `<button onclick='suadulieu()'>Sửa</button> <button onclick='xoadulieu()'>Xoá</button>`;
}

function taidulieu(){
    for(let i = 0; i < bangdulieu.length; i++){
        nhapdulieu(bangdulieu[i]);
    }
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
function kiemtradulieu(event){
    event.preventDefault();
    var tensanpham = document.getElementById("tensanpham");
    var giasanpham = document.getElementById("giasanpham");
    var ngaysanxuat = document.getElementById("ngaysanxuat");
    var baoloiten = document.getElementById("baoloiten");
    var baoloigia = document.getElementById("baoloigia");
    var baoloingay = document.getElementById("baoloingay");
    var baoloimau = document.getElementById("baoloimau");
    var baoloitn = document.getElementById("baoloitn");
    var soluong = document.getElementById("soluong");
    var baoloisl = document.getElementById("baoloisl");

//Tên sản phẩm không được để trống
    if(tensanpham.value == ""){
        baoloiten.innerHTML = "Tên sản phẩm không được để trống";
    }else if(kiemtratrung()){
        baoloiten.innerHTML = "Sản phẩm đã tồn tại";
    }else{
        baoloiten.innerHTML = "";
    }
 
//Số lượng không được để trống và phải là số dương
    if(soluong.value == ""){
        baoloisl.innerHTML = "Nhập số lượng";
    }else if(soluong.value <= 0){
        baoloisl.innerHTML = "Nhập số lớn hơn 0";
    }else{
        baoloisl.innerHTML = "";
    }
//Giá sản phẩm không được để trống 
    if(giasanpham.value == ""){
        baoloigia.innerHTML = "Giá sản phẩm không được để trống";
    }else if(isNaN(giasanpham.value)){
        baoloigia.innerHTML = "Giá sản phẩm phải là số";
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

//Màu sắc phải chọn 
    var arr_mausac = document.getElementsByName("mausac");
    var cochon = false;
        for(i = 0; i < arr_mausac.length; i++){
            if(arr_mausac[i].checked == true){
              cochon = true;
              baoloimau.innerHTML = "";
        } 
        if(cochon == false){
           baoloimau.innerHTML = "Màu chưa chọn";
        }
    }
    
//Tính năng phải chọn
   var arr_tinhnang = document.getElementsByName("tinhnang");
   cochon = false;
    for(i = 0; i < arr_tinhnang.length; i++){
        if(arr_tinhnang[i].checked == true){
            cochon = true;
            baoloitn.innerHTML = "";
        } 
    if(cochon == false){
            baoloitn.innerHTML = "Tính năng chưa chọn";
        }
    }
   
    if(baoloiten.innerHTML == "" && baoloisl.innerHTML == "" && baoloigia.innerHTML == "" && baoloingay.innerHTML == "" && baoloimau.innerHTML == "" && baoloitn.innerHTML == ""){
    themdulieu();
    }
}

// Thêm dữ liệu
function themdulieu(){
    var arr_mausac = document.getElementsByName("mausac");
    var mausacchon = "";
        for(i = 0; i < arr_mausac.length; i++){
            if(arr_mausac[i].checked == true){
              mausacchon = arr_mausac[i].value;    
        } 
    }
    var arr_tinhnang = document.getElementsByName("tinhnang");
    var tinhnangchon = "";
    for(i = 0; i < arr_tinhnang.length; i++){
        if(arr_tinhnang[i].checked == true){
            tinhnangchon += `<br>${arr_tinhnang[i].value}`;
        } 
    }
    var dulieuthem = {
            STT: bangdulieu.length + 1,
            SL: soluong.value,
            Ten: tensanpham.value,
            Gia: giasanpham.value,
            NSX: ngaysanxuat.value,
            MS: mausacchon,
            TN: tinhnangchon,
        }
    ;
    bangdulieu.push(dulieuthem);
    nhapdulieu(dulieuthem);
    huydulieu();
}

// Huỷ dữ liệu
function huydulieu(){
    tensanpham.value = "";
    soluong.value = "";
    giasanpham.value = "";
    ngaysanxuat.value = "";
    baoloiten.innerHTML = "";
    baoloisl.innerHTML = "";
    baoloigia.innerHTML = "";
    baoloingay.innerHTML = "";
    baoloimau.innerHTML = "";
    baoloitn.innerHTML = "";
}

function suadulieu(index){
    for(var i = 0; i < bangdulieu.length; i++){
    if(bangdulieu[i].STT == x){
        bangdulieu.splice(i,1);
    }
  }
}





