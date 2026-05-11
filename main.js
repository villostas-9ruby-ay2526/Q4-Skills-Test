function enterAccount()
var username = document.getElementById("namesuser").value;
var password = document.getElementById("passingword").value;

 if (username === "" || password === "") {
        result = "empty";
    }
    else if (username === "DevonVillostas" && password === "password123") {
        result = "success";
    }
    else {
        result = "wrong";
    }

