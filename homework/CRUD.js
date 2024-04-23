//Khai báo dữ liệu
    var id_sp = document.getElementById("id-sp");
    var ten_sp = document.getElementById("ten-sp");
    var soluong_sp = document.getElementById("soluong-sp");
    var gia_sp = document.getElementById("gia-sp");
    var ngaysx_sp = document.getElementById("ngaysx-sp");
    var mau_sp = document.getElementsByName("mau-sp");
    var tinhnang_sp = document.getElementsByName("tinhnang-sp");

    var id_loi = document.getElementById("id-loi");
    var ten_loi = document.getElementById("ten-loi");
    var soluong_loi = document.getElementById("soluong-loi");
    var gia_loi = document.getElementById("gia-loi");
    var ngaysx_loi = document.getElementById("ngaysx-loi");
    var mau_loi = document.getElementById("mau-loi");
    var tinhnang_loi = document.getElementById("tinhnang-loi");

// Kiểm tra dữ liệu đã nhập đúng chưa
function kiemtra(){
    if(id_sp.value == ""){
        id_loi.innerHTML = "ID Không được để trống";
    }else if(id_sp.value <= 0){
        id_loi.innerHTML = "ID là số lớn hơn 0";
    }else {
        id_loi.innerHTML = "";
    }

    if(ten_sp.value == ""){
        ten_loi.innerHTML = "Tên sản phẩm không được để trống";
    }else if(kiemtratrungdulieu()) {
        ten_loi.innerHTML = "Sản phẩm đã tồn tại";
    }else {
        ten_loi.innerHTML = "";
    }

    if(soluong_sp.value == ""){
        soluong_loi.innerHTML = "Số lượng không được để trống";
    }else if(soluong_sp.value <= 0){
        soluong_loi.innerHTML = "Số lượng là số lớn hơn 0";
    }else {
        soluong_loi.innerHTML = "";
    }

    if(gia_sp.value == ""){
        gia_loi.innerHTML = "Giá sản phẩm không được để trống";
    }else if(gia_sp.value <= 0){
        gia_loi.innerHTML = "Giá sản phẩm là số lớn hơn 0";
    }else {
        gia_loi.innerHTML = "";
    }

    if(ngaysx_sp.value == ""){
        ngaysx_loi.innerHTML = "Ngày sản xuất chưa điền";
    }else if((Date.parse(ngaysx_sp.value) >= Date.now())){
        ngaysx_loi.innerHTML = "Ngày sản xuất không được lớn hơn thực tế";
    }else{
        ngaysx_loi.innerHTML = "";
    }

    var cochon = false;
    for(i=0; i<mau_sp.length; i++){
       if(mau_sp[i].checked == true){
         cochon = true;
         mau_loi.innerHTML = "";
       }
    }
       if(cochon == false){
         mau_loi.innerHTML = "Màu chưa chọn";
    }
    
    cochon = false;
    for(i=0; i<tinhnang_sp.length; i++){
        if(tinhnang_sp[i].checked == true){
            cochon = true;
            tinhnang_loi.innerHTML = "";
        }
        if(cochon == false){
            tinhnang_loi.innerHTML = "Tính năng chưa chọn";
        }
    }

 if(id_loi.innerHTML == "" && ten_loi.innerHTML == "" && soluong_loi.innerHTML == "" && gia_loi.innerHTML == "" && ngaysx_loi.innerHTML == "" && mau_loi.innerHTML == "" && tinhnang_loi.innerHTML ==""){
    them_sp();
 }
}
//Hàm add sản phẩm
    var bangdulieu = [];
    var demsp = 0;
    function them_sp(){
        var maudachon="";
        for(i=0; i<mau_sp.length; i++){
            if(mau_sp[i].checked == true){
                maudachon = mau_sp[i].value;
            }
        }
        var tinhnangchon="";
        for(i=0; i<tinhnang_sp.length; i++){
            if(tinhnang_sp[i].checked == true){
                tinhnangchon += `<br>${tinhnang_sp[i].value}`;
            }
        }
    var dulieuthem = {
        ID: id_sp.value,
        Ten: ten_sp.value,
        SoLuong: soluong_sp.value,
        Gia: gia_sp.value,
        Ngay: ngaysx_sp.value,
        Mau: maudachon,
        TinhNang: tinhnangchon
    };
    demsp++;
    document.getElementById("sosp").innerText =`Số Sản Phẩm : ${demsp}`;
    bangdulieu.push(dulieuthem);
    taidulieubang();
}

// Hàm hiện dữ liệu lên bảng
    function taidulieubang(){
        var table_sp = `<tr>
                        <th>ID</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Số Lượng</th>
                        <th>Giá Bán</th>
                        <th>Ngày Sản Xuất</th>
                        <th>Màu Sắc</th>
                        <th>Tính Năng</th>
                        <th>Thay Đổi</th>
                    </tr>`;
        for(var i=0; i < bangdulieu.length; i++){
        table_sp = table_sp  +  `<tr>
                                    <td>${bangdulieu[i].ID}</td>
                                    <td>${bangdulieu[i].Ten}</td>
                                    <td>${bangdulieu[i].SoLuong}</td>
                                    <td>${bangdulieu[i].Gia}</td>
                                    <td>${bangdulieu[i].Ngay}</td>
                                    <td>${bangdulieu[i].Mau}</td>
                                    <td>${bangdulieu[i].TinhNang}</td>
                                    <td>
                                        <button onclick="suadulieu(${bangdulieu[i].ID})">Sửa</button>
                                        <button onclick="xoadulieu(${bangdulieu[i].ID})">Xoá</button>
                                    </td>
                                </tr>`;
    }
      document.getElementById("table").innerHTML = table_sp;
      console.log(bangdulieu);   
}

//Kiểm tra trùng dữ liệu
    function kiemtratrungdulieu(){
        var trungdulieu = false;
        for (var i = 0; i < bangdulieu.length; i++) {
            if (bangdulieu[i].Ten.trim().toLowerCase() === ten_sp.value.trim().toLowerCase() || bangdulieu[i].ID == id_sp.value) {
                trungdulieu = true;
                break;
            }
        }
        return trungdulieu;
    }

//huỷ dữ liệu
    function huydulieu(){
        id_sp.value = "";
        ten_sp.value = "";
        soluong_sp.value = "";
        gia_sp.value = "";
        ngaysx_sp.value = "";  

        id_loi.innerHTML = "";
        ten_loi.innerHTML = "";
        soluong_loi.innerHTML = "";
        gia_loi.innerHTML = "";
        ngaysx_loi.innerHTML = "";
        mau_loi.innerHTML = ""
        tinhnang_loi.innerHTML = "";
    }

//Delete dữ liệu
    function xoadulieu(index){
        for(var i=0; i<bangdulieu.length; i++){
            if(bangdulieu[i].ID == index){
                bangdulieu.splice(i,1);
                taidulieubang();
                huydulieu();
            }
        }
    }

//Edit dữ liệu
    function suadulieu(index){
        for(var i=0; i<bangdulieu.length; i++){
            if(bangdulieu[i].ID == index){
                id_sp.value = bangdulieu[i].ID;
                ten_sp.value = bangdulieu[i].Ten;
                soluong_sp.value = bangdulieu[i].SoLuong;
                gia_sp.value = bangdulieu[i].Gia;
                ngaysx_sp.value = bangdulieu[i].Ngay;
                mau_sp.value = bangdulieu[i].Mau;
                tinhnang_sp.value = bangdulieu[i].TinhNang;
            }
        }
    }

// Update dữ liệu
    function capnhat(index_sua){
        var maudachon="";
        for(i=0; i<mau_sp.length; i++){
            if(mau_sp[i].checked == true){
                maudachon = mau_sp[i].value;
            }
        }
        
        var tinhnangchon= "";
        for(i=0; i<tinhnang_sp.length; i++){
            if(tinhnang_sp[i].checked == true){
                tinhnangchon += `<br>${tinhnang_sp[i].value}`;
            }
        }

        var dulieuthem = {
            ID: id_sp.value,
            Ten: ten_sp.value,
            SoLuong: soluong_sp.value,
            Gia: gia_sp.value,
            Ngay: ngaysx_sp.value,
            Mau: maudachon,
            TinhNang: tinhnangchon
        };

        var index_sua = bangdulieu.findIndex((item)=>item.ID == dulieuthem.ID)
        if(index_sua >= 0){
        bangdulieu.splice(index_sua,1,dulieuthem);
        }else{
        bangdulieu.push(dulieuthem);
        }
        taidulieubang();
    }

// Sắp xếp dữ liệu 
    function sapxep(){
        bangdulieu.sort(function(sp1,sp2){
            let a = sp1.Ten.toLowerCase();
            let b = sp2.Ten.toLowerCase();
            if(a < b){ 
                return -1;
            } 
            if(a > b){ 
                return 1;
            }
            return 0;
        });
        taidulieubang();
    }

    



