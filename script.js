function showRegister() {

    document.getElementById("welcomePage").classList.add("hidden");

    document.getElementById("registerPage").classList.remove("hidden");

}


function sayThankYou() {

    document.getElementById("welcomePage").classList.add("hidden");

    document.getElementById("thankYouPage").classList.remove("hidden");

    document.getElementById("thankYouText").innerText = "Thank you!";

}


function registerUser(event) {

    event.preventDefault();

    document.getElementById("registerPage").classList.add("hidden");

    document.getElementById("thankYouPage").classList.remove("hidden");

    document.getElementById("thankYouText").innerText =
        "Thank you for registering!";

}
