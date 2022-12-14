
const add_message = "http://localhost/test/add_massage.php";
const get_message = "http://localhost/test/getting_message.php";

const message_table = document.getElementById("message_table");
const message_row = message_table.insertRow();
let cell = message_row.insertCell();

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

fetch(get_message)
.then (x => x.json())
.then (message => {
    name_g = message.name;
    email_g = message.email;
    phone_g = message.phone;
    message_g = message.message;

    const message_table = document.getElementById("message_table");
    const message_row = message_table.insertRow();
    let cell = message_row.insertCell();
    cell.innerHTML = name_g
    cell.innerHTML = email_g
    cell.innerHTML = phone_g
    cell.innerHTML = message_g

    // document.getElementById("gender").innerHTML = "Gender: " + gender_type;
});


valid(document.getElementById("submit"));
