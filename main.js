function enterAccount() {
    var username = document.getElementById("namesuser").value;
    var password = document.getElementById("passingword").value;

    if (username === "" || password === "") {
            alert ("Empty Input!");
        }
        else if (username === "DevonVillostas" && password === "password123") {
             window.location.href = "notebooks.html";
        }
        else {
            alert ("Incorrect Input!")
        
        }
}

