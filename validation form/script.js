function validaate() {
    var username = document.getElementById("username").value;

    var mobilenumber = document.getElementById("mobilenumber").value;

    var email = document.getElementById("email").value;

    if (username == "shris_ss08" && mobilenumber == "7254940758" && email == "shristikeshri24@gmail.com") {

        alert('login sucessfully');
        return false;
    }

    else {
        alert("login failed");
    }
}