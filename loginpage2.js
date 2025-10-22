document.querySelector(".login1").addEventListener("click", function() {
    // Correct credentials
    const correctUsername = "gautam";
    const correctPassword = "123456";

    // Get values from class inputs
    const username = document.querySelector(".user-input").value.trim();
    const password = document.querySelector(".pass-input").value.trim();

    // Check credentials
    if(username === correctUsername && password === correctPassword){
        window.location.href = "index.html"; // redirect
    } else {
        alert("Username or Password is incorrect!");
    }
});
