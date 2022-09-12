


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



