// Khai báo dữ liệu
var dulieu = [
    {  
       STT: 1,
       Ten: "iphone 15 pro max",
       Gia: "35540345",
       Giakm: "32540345"     
    },
];

//Load data
var myTable = document.getElementById("tb");
function addData(element) {
    var row = myTable.insertRow();
    row.insertCell().innerHTML = element.STT;
    row.insertCell().innerHTML = element.Ten;
    row.insertCell().innerHTML = element.Gia;
    row.insertCell().innerHTML = element.Giakm;
}

function loadData() {
    dulieu.forEach(addData);
}


function kiemtra(){
    var tensp = document.getElementById("tenSp");
    var giasp = document.getElementById("giaSp");
    var giakm = document.getElementById("giaKm");
    var checkTenSp = document.getElementById("checkTenSp");
    var checkGiaSp = document.getElementById("checkGiaSp");
    var checkGiaKm = document.getElementById("checkGiaKm");
//Kiểm tra tên sản phẩm không được để trống
if(tensp.value == ""){
    checkTenSp.innerHTML = "Tên sản phẩm không được để trống";
} else if(checkTrung()){
    checkTenSp.innerHTML = "Sản phẩm đã tồn tại";
}else{
    checkTenSp.innerHTML = "";
}
//Kiểm tra giá phải là số dương
if(giasp.value == ""){
    checkGiaSp.innerHTML = "Giá không được để trống";
}else if(isNaN(parseInt(giasp.value)) == true){
    checkGiaSp.innerHTML = "Giá phải đúng định dạng ";
}else if(giasp.value <= 0){
    checkGiaSp.innerHTML = "Giá phải là số dương ";
}else{
    checkGiaSp.innerHTML = "";
}
//Kiểm tra giá khuyến mại phải là số dương và nhỏ hơn giá
if(giakm.value == ""){
    checkGiaKm.innerHTML = "Giá khuyến mại không được để trống ";
}else if(isNaN(parseInt(giakm.value)) == true){
    checkGiaKm.innerHTML = "Giá khuyến mại phải đúng định dạng ";
}else if(giakm.value <=0){
    checkGiaKm.innerHTML = "Giá khuyến mại phải là số dương ";
}else if(giakm.value > giasp.value){
    checkGiaKm.innerHTML = "Giá khuyến mại phải nhỏ hơn giá sản phẩm ";
}else{
    checkGiaKm.innerHTML = "";
}

if(checkTenSp.innerHTML === "" && checkGiaSp.innerHTML === "" && checkGiaKm.innerHTML === ""){
    them();
   }
}

//Kiểm tra trùng dữ liệu
function checkTrung(){
    var checkTrung = false;
    for (var i = 0; i < dulieu.length; i++) {
        if (dulieu[i].Ten.trim().toLowerCase() === tensp.value.trim().toLowerCase()){
            checkTrung = true;
            break;
        }
    }
    return checkTrung;
}

function them() {
    var vxl = {
        STT: dulieu.length + 1,
        Ten: tensp.value,
        Gia: parseInt(giasp.value),
        Giakm: parseInt(giakm.value)
    };
    dulieu.push(vxl);
    addData(vxl);
    huy();
}

function huy() {
    tensp.value = "";
    giasp.value = "";
    giakm.value = "";
    checkTenSp = "";
    checkGiaSp = "";
    checkGiaKm = "";
}