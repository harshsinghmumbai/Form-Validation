let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 0;

function validationform() {
    // --------------------user_name Validation ---------------------------------------------------------------------
    if (username.value == "") {
        document.getElementById("usererror").innerText = "User Name is empty";
        flag = 0;
    } else if (username.value.length < 3) {
        document.getElementById("usererror").innerHTML ="User Name require 3 Char.";
        flag = 0;
    } else {
        document.getElementById("usererror").innerHTML = "";
        flag = 1;
    }

    // -----------------------------password  Validation-------------------------
    if (password.value == "") {
        document.getElementById("passerror").innerHTML = "Password is empty";
        flag = 0;
    } else if (password.value.length < 11) {
        document.getElementById("passerror").innerHTML = "Enter 10 digit number";
        flag = 0;
    } else {
        document.getElementById("passerror").innerHTML = "";
        flag = 1;
    }

    if (flag) {
        return true;
    } else {
        return false;
    }
}
