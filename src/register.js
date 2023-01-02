function validatefor()
{
    var name=document.getElementById("fullname").value;
    var correct_way=/^[A-Za-z]+$/;
    if(a=="")
    {
        document.getElementById("nwrongalert").innerHTML="please fill user name ";
        return false;
    }

    if(name.length<3)
    {
        document.getElementById("nwrongalert").innerHTML="please fill 3 cha ";
        return false;
    }
    if(name.length>35)
    {
        document.getElementById("nwrongalert").innerHTML="please fill user name 35 total  ";
        return false;
    }
    if(name.match(correct_way))
    {
        document.getElementById("nwrongalert").innerHTML="please fill user name 35 total  ";
        return true;
    
}
else{
    document.getElementById("nwrongalert").innerHTML="User name Only Character Type ";
        return false;
}
}

function validate_password() {
 
    var pass = document.getElementById('password').value;
    var confirm_pass = document.getElementById('confirmpassword').value;
    if (pass != confirm_pass) {
        document.getElementById('wrongalert').style.color = 'red';
        document.getElementById('wrongalert').innerHTML
          = '☒ Use same password';
        document.getElementById('create').disabled = true;
        document.getElementById('create').style.opacity = (0.4);
    } else {
        document.getElementById('wrongalert').style.color = 'green';
        document.getElementById('wrongalert').innerHTML =
            '🗹 Password Matched';
        document.getElementById('create').disabled = false;
        document.getElementById('create').style.opacity = (1);
    }
}

function wrongalert() {
    if (document.getElementById('pass').value != "" &&
        document.getElementById('confirm_pass').value != "") {
        alert("Your response is submitted");
    } else {
        alert("Please fill all the fields");
    }
}
