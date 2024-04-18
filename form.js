function check(event){
    event.preventDefault();
    var mydata = true;
    //Kiểm tra tên từ 3 đến 20 ký tự và in ra kết quả
    var name = document.getElementById("register_name").value;
    if(name.length < 3 || name.length > 20){
        mydata = false;
        document.getElementById("register_name").className = "er";
        document.getElementById("name_error").innerHTML = "Name must be between 3 and 20 characters <br>";
        document.getElementById("register_name").focus();
    }else{
        document.getElementById("register_name").className = "tr";
        document.getElementById("name_error").innerHTML = ""
        document.getElementById("result_name").innerHTML = name;
         }
    //Kiểm tra tuổi phải là số dương và in ra kết quả
    var age = document.getElementById("register_age").value;
    if(age <= 0){
        mydata = false;
        document.getElementById("register_age").className = "er";
        document.getElementById("age_error").innerHTML = "Age must be a number greater than 0 <br>";
        document.getElementById("register_age").focus();
    } else{
        document.getElementById("register_age").className = "tr";
        document.getElementById("age_error").innerHTML = "";
        document.getElementById("result_age").innerHTML = age;
          }
    //Kiểm tra giới tính phải chọn và in ra kết quả
    var arr_gender = document.getElementsByName("gender");//[input, input]
    var choosed = false;
    for(var i = 0; i < arr_gender.length; i++){
        if(arr_gender[i].checked == true){
           choosed = true;
           document.getElementById("result_gender").innerHTML = arr_gender[i].value;
           document.getElementById("gender_error").innerHTML = ""   
     } 
    }
    if(choosed == false){
        mydata = false;
        document.getElementById("gender_error").innerHTML = "Gender must choose <br>";
     }
    //Kiểm tra email không được để trống và in ra kết quả
    var email = document.getElementById("register_email").value;
    if(email.length <= 0){
       mydata = false;
       document.getElementById("register_email").className = "er";
       document.getElementById("email_error").innerHTML = "Email cannot be empty <br>";
       document.getElementById("register_email").focus();
    } else{
        document.getElementById("register_email").className = "tr";
        document.getElementById("email_error").innerHTML = ""
        document.getElementById("result_email").innerHTML = email;
          }
    //Kiểm tra quốc gia phải chọn và in ra kết quả
    var country = document.getElementById("register_country").value;
    if(country == "Select_country"){
        mydata = false;
        document.getElementById("register_country").className = "er";
        document.getElementById("country_error").innerHTM = "Country must choose <br>";
    } else{
        document.getElementById("register_country").className = "tr";
        document.getElementById("result_country").innerHTML = country;
       }
    //Kiểm tra sở thích có chọn và in ra kết quả
     var arr_hobby = document.getElementsByName("hobby");//[input, input, input]
     choosed = false;
     for(var i = 0; i < arr_hobby.length; i++){
         if(arr_hobby[i].checked == true){
         choosed = true;
         document.getElementById("result_hobby").innerHTML += (`${arr_hobby[i].value}<br>`);
         document.getElementById("hobby_error").innerHTML = "";
         }
         }
         if(choosed == false){
           mydata = false;
           document.getElementById("hobby_error").innerHTML = "Hobby must choose <br>";
         }
     return mydata;
 }   