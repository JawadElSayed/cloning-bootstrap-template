


const valid = (element) => {
    element.addEventListener("click" , (event) => {
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let phone = document.getElementById("phone");
        let massage = document.getElementById("massage");


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

