function validateform() {
    var returnval = true;

    var name = document.forms['RegForm']["name"].value;
    if (name.length == 0 || name == null || name == " ") {
        alert("Name *Can't be Empty");
        returnval = false;
    }

    else if (name.length < 3) {
        alert("Name *Length of name is too short");
        returnval = false;
    }

    var phone = document.forms['RegForm']["phone"].value;
    if (phone.length != 10 || phone == null || phone == " ") {
        alert("Phone *Phone number should be of 10 digits!");
        returnval = false;
    }

    var email = document.forms['RegForm']["email"].value;
    if (email.length > 35 || email == null || email == " ") {
        alert("Email *Email length is too long");
        returnval = false;
    }
    // var Address = document.forms['RegForm']["Address"].value;
    // if (Address.length < 10 || Address == null || Address == " ") {
    //     alert("Address *Enter Address Properly");
    //     returnval = false;
    // }

    // document.getElementById("abcd1").innerHTML = Math.floor(Math.random() * 10);
    return returnval;
}





