
function calcPrice() {
    var a = parseInt(document.getElementById("v1").innerHTML);
    var b = parseInt(document.getElementById("v2").innerHTML);
    var c = parseInt(document.getElementById("v3").innerHTML);
    var d = parseInt(document.getElementById("v4").innerHTML);
    var res = 0;
    var it = false;
    if (c1.checked == 1) {
        it = true;
        res += a;
    }
    if (c2.checked == 1) {
        it = true;
        res += b;
    }
    if (c3.checked == 1) {
        it = true;
        res += c;
    }
    if (c4.checked == 1) {
        it = true;
        res += d;
    }
    document.getElementById("totVal").innerHTML = res;
    return it;
}

function validateFirstName() {
    var name = document.getElementById("fname").value;
    var reg = /^[A-Za-z]+$/;
    if (name.length == 0 || !reg.test(name)) {
        document.getElementById("namevalid").innerHTML = "Please enter valid First name";
        return false;
    }
    else {
        document.getElementById("namevalid").innerHTML = "";
        return true;
    }

}

function validateLastName() {
    var name = document.getElementById("lname").value;
    var reg = /^[A-Za-z]+$/;
    if (name.length == 0 || !reg.test(name)) {
        document.getElementById("namevalid").innerHTML = "Please enter valid Last name";
        return false;
    }
    else {
        document.getElementById("namevalid").innerHTML = "";
        return true;
    }
}



function validateEmail() {
    var name = document.getElementById("email").value;
    var reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!reg.test(name)) {
        document.getElementById("emailvalid").innerHTML = "Please enter valid Email Id";
        return false;
    }
    else {
        document.getElementById("emailvalid").innerHTML = "";
        return true;
    }

}

function validateNumber() {
    var number = document.getElementById("mobile").value;
    var reg = /^\d{10}$/;
    if (!reg.test(number)) {
        document.getElementById("numbervalid").innerHTML = "Please enter valid Mobile Number";
        return false;
    }
    else {
        document.getElementById("numbervalid").innerHTML = "";
        return true;
    }

}
function validateCode() {
    var number = document.getElementById("zip").value;
    var reg = /^\d{6}$/;
    if (!reg.test(number)) {
        document.getElementById("codevalid").innerHTML = "Please enter valid pincode";
        return false;
    }
    else {
        document.getElementById("codevalid").innerHTML = "";
        return true;
    }

}


function placeOrder() {
    var a = calcPrice();
    var b = validateFirstName();
    var c = validateLastName();
    var d = validateNumber();
    var e = validateEmail();
    var f = validateCode();
   
    if (!a) {
        window.alert("please select the products to order");
        document.getElementById("namevalid").innerHTML = "";
        document.getElementById("emailvalid").innerHTML = "";
        document.getElementById("numbervalid").innerHTML = "";
        document.getElementById("codevalid").innerHTML = "";
    }
    else if (a && b && c && d && e && f)
        document.getElementById("order").style.visibility = "visible";
    else {
        window.alert("Please fill the required information to place order");
        document.getElementById("namevalid").innerHTML = "";
        document.getElementById("emailvalid").innerHTML = "";
        document.getElementById("numbervalid").innerHTML = "";
        document.getElementById("codevalid").innerHTML = "";
    }
}




