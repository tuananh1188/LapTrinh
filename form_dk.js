
//kiểm tra nóng báo lỗi tên đăng nhập dùng onkeyup
function hotcheck_tentk(){ 
    var tentk = document.getElementById("tentk").value;
    if(tentk.length < 8 || !/^[a-zA-Z0-9]+$/.test(tentk) == true){
        document.getElementById("tentk").nextElementSibling.innerHTML = "Tên tài khoản tối thiểu 8 ký tự không chứa ký tự đặc biệt";
    }else{
        document.getElementById("tentk").nextElementSibling.innerHTML = "";
    }
}
//Kiểm tra nóng báo lỗi mật khẩu dùng onkeyup
function hotcheck_mk(){ 
    var mk = document.getElementById("mk").value;
    if(mk.length < 8 || mk.length > 16 || !/^[a-zA-Z0-9]+$/.test(mk) == false){
        document.getElementById("mk").nextElementSibling.innerHTML = "Mật khẩu từ 8 đến 16 ký tự chứa ký tự đặc biệt";
    }else{
        document.getElementById("mk").nextElementSibling.innerHTML = "";
    }
}
//Kiểm tra nóng báo lỗi xác nhận mật khẩu
function hotcheck_xnmk(){ 
    var xn_mk = document.getElementById("xn_mk").value;
    mk = document.getElementById("mk").value;
    if(xn_mk !== mk){
        document.getElementById("xn_mk").nextElementSibling.innerHTML = "Mật khẩu xác nhận chưa chính xác";
    }else{
        document.getElementById("xn_mk").nextElementSibling.innerHTML = "";
    }
}
//Kiểm tra dữ liệu
function kiemtra(event){
    event.preventDefault();
var dulieu = true;
//Kiểm tra tên đăng nhập tối thiểu 8 ký tự không chứa ký tự đặc biệt
var tentk = document.getElementById("tentk").value;
if(tentk.length < 8 || !/^[a-zA-Z0-9]+$/.test(tentk) == true){
    dulieu = false;
    document.getElementById("tentk").focus();
} else{
    document.getElementById("kqtentk").innerHTML = tentk;
}
//Kiểm tra mật khẩu tối thiểu từ 8 đến 16 ký tự có chứa ký tự đặc biệt
var mk = document.getElementById("mk").value;
if(mk.length < 8 || mk.length > 16 || !/^[a-zA-Z0-9]+$/.test(mk) == false){
    dulieu = false;
    document.getElementById("mk").focus();
} else{
    document.getElementById("kqmk").innerHTML = mk;
}
//Kiểm tra xác nhận mật khẩu giống với mật khẩu
var xn_mk = document.getElementById("xn_mk").value;
if(xn_mk !== mk){
    dulieu = false;
    document.getElementById("xn_mk").focus();
} else{
    document.getElementById("kq_xnmk").innerHTML = xn_mk;
}
return dulieu;
}

//tạo và xác thực mã captcha
var captchaText = document.getElementById("captcha");
var ctx = captchaText.getContext("2d");
ctx.font = "50px Roboto";
ctx.fillStyle = "#08e5ff";

let userText = document.getElementById("textBox");
let submitButton = document.getElementById("bt1");
let output = document.getElementById("output");
let refreshButton = document.getElementById("refreshButton");

var captchaStr = "";

let alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G',
                 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
                 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
                 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 
                 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
                 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
                 'q', 'r', 's', 't', 'u', 'v', 'w', 
                 'x', 'y', 'z', '0', '1', '2', '3', 
                 '4', '5', '6', '7', '8', '9'];

function generate_captcha(){
    let emptyArr = [];
    for(var i = 1; i <= 7; i++){
        emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
    }
    captchaStr = emptyArr.join("");

    ctx.clearRect(0, 0, captchaText.width, captchaText.height);
    ctx.fillText(captchaStr, captchaText.width/4, captchaText.height/2);

    output.innerHTML = "";
}
generate_captcha();

function check_captcha(){
    if(userText.value === captchaStr) {
        output.classname = "correctCaptcha";
        output.innerHTML = "Correct!";
    } else {
        output.className = "incorrectCaptcha";
        output.innerHTML = "Incorrect, please try again!";
    }
}

userText.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        check_captcha();
    }
});

submitButton.addEventListener("click", check_captcha);
refreshButton.addEventListener("click", generate_captcha);



