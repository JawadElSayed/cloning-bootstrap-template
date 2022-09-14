
const add_message = "http://localhost/test/add_massage.php";
const get_message = "http://localhost/test/getting_message.php";

const valid = (element) => {
    element.addEventListener("click" , (event) => {

        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let phone = document.getElementById("phone");
        let message = document.getElementById("massage");

        fetch(add_message, {method: 'POST', body: new URLSearchParams({"name": name.value,"email": email.value, "phone": phone.value, "message": message.value})})
    })

}

// checking name

function check_name (name) {
    if (name < 5 ){
        return false;
    }
    return true;
}

// checking email

function check_email (email) {
    if ( !(email.include("@" , 3)) ){
        return false;
    }
    let arry = email.split("@");
    var part2 = arry[1];
    if (part2.lenth() < 5) {
        return false;
    }
    return true;
}

// checking phone

function check_phone (phone) {
    if (phone.startswith("+961")){
        if (phone.startswith("0" , 4) ){
            return false;
        }
        else{
            if (phone.startswith("3" , 4) && phone.lenth() != 11 ){
                return false;
            }
            else if (!(phone.startswith("3" , 4)) && phone.lenth() != 12 ){
                return false;
            }
        }
    }
    return true;
}

// checking massage

function check_massage (massage) {
    if (massage < 100 ){
        return false;
    }
    return true;
}




valid(document.getElementById("submit"));
